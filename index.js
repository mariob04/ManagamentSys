const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');

app.use(express.urlencoded({ extended: true}));
app.use(express.json());

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


// ucitavanje iz json file-a
var data = fs.readFileSync('list.json');
var list = JSON.parse(data);
console.log(list);


// pregled
app.get('/', (req, res) => {
    res.render('index', {list: list});
})
// pregled pojedinog usera
app.get('/view', (req, res) => {
    res.render('view')
    const { id } = req.params;
})
// dodavanje usera
app.get('/new', (req, res) => {
    res.render('new');
})
app.post('/', (req, res) => {
    console.log(req.body);
    response.send(req.body);
    res.redirect('/');
})

// uredivanje usera
app.get('/edit', (req, res) => {
    res.render('edit');
})
app.patch('/:id', (req, res) => {
    const { id } = req.params;
    res.redirect('/');
})
// brisanje usera
app.delete('/:id', (req, res) => {
    const { id } = req.params;
    res.redirect('/');
})

app.listen(3000, () => {
    console.log('Listening on port 3000')
});