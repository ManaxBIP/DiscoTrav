require('dotenv').config();
const express = require('express');
const path = require('path');
const { createClient } = require('@supabase/supabase-js');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const bcrypt = require('bcrypt');
const saltRounds = 10; // Nombre de salage pour le hachage

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

const supabase = createClient( process.env.SUPABASE_URL, process.env.SUPABASE_KEY);

app.use(express.static(path.join(__dirname, 'public/home')));
app.use(express.static(path.join(__dirname, 'public/login')));
app.use(express.static(path.join(__dirname, 'public/article')));
app.use(express.static(path.join(__dirname, 'public/src')));
app.use(express.static(path.join(__dirname, 'public/src/cover')));
app.use(express.static(path.join(__dirname, 'public/src/cover-font')));


app.use(express.json());
app.use(cookieParser());

app.get('/', (req, res) => {
    res.clearCookie('username');
    res.clearCookie('cover');
    res.sendFile(path.join(__dirname, 'public/login', 'login.html')); 
});

app.get('/home', (req, res) => {
    res.clearCookie('cover');
    if (!req.cookies.username) {
        // Rediriger vers la page d'accueil si le cookie est vide
        res.redirect('/');
        return;
    }
    res.sendFile(path.join(__dirname, 'public/home', 'home.html'));
});

app.get('/article-utopia', (req, res) => {
    res.cookie('cover', "utopia", { httpOnly: false, secure: true });
    res.sendFile(path.join(__dirname, 'public/article', 'article.html'));
});

app.get('/article-jackboys', (req, res) => {
    res.cookie('cover', "jackboys", { httpOnly: false, secure: true });
    res.sendFile(path.join(__dirname, 'public/article', 'article.html'));
});

app.get('/article-birds', (req, res) => {
    res.cookie('cover', "birds", { httpOnly: false, secure: true });
    res.sendFile(path.join(__dirname, 'public/article', 'article.html'));
});

app.get('/article-rodeo', (req, res) => {
    res.cookie('cover', "rodeo", { httpOnly: false, secure: true });
    res.sendFile(path.join(__dirname, 'public/article', 'article.html'));
});

app.get('/article-astroworld', (req, res) => {
    res.cookie('cover', "astroworld", { httpOnly: false, secure: true });
    res.sendFile(path.join(__dirname, 'public/article', 'article.html'));
});

app.post('/signin', async (req, res) => {
    try {
        let { Username, Password } = req.body;
        const hashedPassword = await bcrypt.hash(Password, saltRounds);
        Password = hashedPassword;
        const { data, error } = await supabase
            .from('Users')
            .insert([{ Username, Password }]);
        if (error) throw error;
        res.sendFile(path.join(__dirname, 'public/login', 'login.html'));
    } catch (error) {
        console.error('Erreur lors de l\'insertion de l\'utilisateur:', error.message);
        res.status(500).json({ error: 'Erreur lors de l\'insertion de l\'utilisateur' });
    }
});

app.post('/home', async (req, res) => {
    try {
        const { Username, Password } = req.body;
        const user = await authenticateUser(Username, Password);
        if (user.success) {
            res.cookie('username', Username, { httpOnly: false, secure: true });
            res.sendFile(path.join(__dirname, 'public/home', 'home.html'));
        } else {
            res.status(401).json({ error: 'Erreur lors de la connexion' });
        }
    } catch (error) {
        console.error('Erreur lors de la connexion:', error.message);
        res.status(500).json({ error: 'Erreur lors de la connexion' });
    }
});

// Route pour récupérer les commentaires depuis Supabase
app.get('/comments', async (req, res) => {
    try {
        const { data, error } = await supabase
            .from('comments')
            .select('*');
        
        if (error) {
            throw error;
        }

        res.json(data);
    } catch (error) {
        console.error('Erreur lors de la récupération des commentaires:', error.message);
        res.status(500).json({ error: 'Erreur lors de la récupération des commentaires' });
    }
});

// Route pour ajouter un nouveau commentaire à Supabase
app.post('/comments', async (req, res) => {
    try {
        const { IdArticle, Username, Content } = req.body;

        const { data, error } = await supabase
            .from('comments')
            .insert([{ IdArticle, Username, Content, created_at: new Date().toISOString() }]);

        if (error) {
            throw error;
        }

        res.json({ success: true, message: 'Commentaire ajouté avec succès' });
    } catch (error) {
        console.error('Erreur lors de l\'ajout du commentaire:', error.message);
        res.status(500).json({ error: 'Erreur lors de l\'ajout du commentaire' });
    }
});


async function authenticateUser(username, password) {
    try {
        // Recherchez l'utilisateur dans la base de données Supabase
        const { data, error } = await supabase
            .from('Users')
            .select('Username, Password')
            .eq('Username', username)
            .single();

        if (error) {
            throw error;
        }
        if (!data) {
            throw new Error('Nom d\'utilisateur incorrect');
        }

        // Vérifiez si le mot de passe correspond
        const isPasswordMatch = await bcrypt.compare(password, data.Password);

        if (!isPasswordMatch) {
            throw new Error('Mot de passe incorrect');
        }

        // L'utilisateur est authentifié
        return { success: true, message: 'Connexion réussie' };
    } catch (error) {
        return { success: false, message: error.message };
    }
}

app.listen(port, () => {
    console.log(`Serveur en cours d'exécution sur http://localhost:${port}`);
});
