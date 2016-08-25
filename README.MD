GeoBul
=========

A geolocation module for Bulgaria based on Boyan Yurukov's geocoding resources - https://github.com/yurukov/Bulgaria-geocoding


## Installation

  npm install geobul --save

## Usage

  var geobul = require('geobul')

  var object = geobul.locate (lat,lng);  // returns and object with the data of the closest settlement	
  
  object.village  	   //1 - village, 0 - city
<<<<<<< HEAD

  object.name 		  // name of the settlement

  object.ekatte  	 // ekatte code of the settlement

  object.province 	// settlement's province

  object.municipality  // settlement's municipality

  object['postal code']  	  // settlement postal code

  object['municipality code'] 	 // settlement municipality code

  object.geo   		// longtitude and latitude as string

  object.lat   		// latitude as float

  object.lng   		// longtitude as float

=======
  
  object.name 		  // name of the settlement
  
  object.ekatte  	 // ekatte code of the settlement
  
  object.province 	// settlement's province
  
  object.municipality  // settlement's municipality
  
  object['postal code']  	  // settlement postal code
  
  object['municipality code'] 	 // settlement municipality code
  
  object.geo   		// longtitude and latitude as string
  
  object.lat   		// latitude as float
  
  object.lng   		// longtitude as float
  
>>>>>>> origin/master
  object.distanceTo     // distance from original coords to settlement
  




## Release History

* 1.0.0 Initial release


* 1.0.1 Fixed README
=======

