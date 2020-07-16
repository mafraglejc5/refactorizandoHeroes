
const fs = require('fs');
const heroes = JSON.parse(fs.readFileSync(__dirname + '/data/heroes.json', 'utf-8'));
const heroesController = {

    index: function (req, res)  {
		res.send(heroes)
		
	},

	detalle: (req, res) => {

		let idHeroe = req.params.id;
		res.set({ 'content-type': 'text/plain; charset=utf-8' });

		heroes.forEach (heroe => {
			if(idHeroe == heroe.id){
				res.send('Hola soy elheroe' + ' ' + heroe.nombre + 'y mi profesion es ' + heroe.profesion )
			}
	 });

		res.send ('lo siento no encontramos tu heroe')
	
	},
  bio : (req, res) => {
	 let idHeroe = req.params.id;
	 let ok = req.params.ok
	 res.set({ 'content-type': 'text/plain; charset=utf-8' });
	 
	 heroes.forEach(heroe => {
		if (heroe.id == idHeroe) {
			if (ok == 'ok'){
				res.write ('hola, mi nombre es :' + heroe.nombre)
				res.write (heroe.resenia);
				res.end ()
			} else {
				res.send (heroe.nombre +'dice : lamento que no quieras saber mas de mi')
			}
		}
		});
	
		res.send('Lo siento, no encontre ese heroe') 
	},

}
module.exports = heroesController

