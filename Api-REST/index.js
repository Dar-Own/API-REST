const express  = require('express')
const mongoose = require('mongoose')
const body = require('body-parser')
const Livres   = require('./livres')

let app = express(); // création de l'objet représentant notre application express
let port = 8080;

mongoose.connect('mongodb://localhost:27017/livres', {useNewUrlParser: true});

 
app.get('/', function(req, res) { // création de la route sous le verbe get
    res.send('Hello world  ! ') // envoi de hello world a l'utilisateur
})

app.post('/', async (req, res) => {
    const titre = req.body.titre; // récupération des variables du body
    const auteur = req.body.auteur
    const genre = req.body.genre
 
    if (!genre || !auteur  || !titre) { // on vérifie que les trois variables sont présentes
        res.send('Il manque un argument')
        return
    }
 
    const nouveau_livre = new Livres({ // création d'un objet représentant notre nouveau livre
        titre : titre,
        auteur : auteur,
        genre : genre
    })
     
    await nouveau_livre.save() // sauvegarde asynchrone du nouveau livre
    res.json(nouveau_livre)
    return
 
})

app.use(body())
 
 
app.listen(port, () =>  { // ecoute du serveur sur le port 8080
    console.log('le serveur fonctionne')
})
