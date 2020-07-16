const express  = require('express');

const app = express();

app.listen(3030, () => console.log('Servidor levantado en le puerto 3030'));


const rutasHeroes = require ('./routes/heroes')
const rutasMain = require ('./routes/main')

app.use ('/',rutasMain) 
app.use('/heroes',rutasHeroes)


app.get('*', (req, res) => {
	res.status(404).send('404 not found. <br> ¡Houston, poseemos problemas!');
});
