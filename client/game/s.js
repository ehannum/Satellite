/*
Satellite
Copyright (C) 2013 Larry Davis
*/

var s = {
    config: {
        ship: {
			hull: 160,
			shields: 120
        },
    sound: {
		enabled: true,
		silentDistance: 10000,
		sounds: {
			laser: "Sounds/laser.mp3"
			}
		}
    },

	init: function() {
		console.log('Satellite starting...');
		// Create a projector for 2D <-> 3D calculations
		s.projector = new THREE.Projector();

		// Create a model loader
		s.loader = new THREE.JSONLoader();

		// Create game
		s.game = new s.SatelliteGame();
	}
};
