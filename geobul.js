var fs = require('fs');
var obj= require ('./settlements.json');  // JSON file with settlement coords and data
var objLen= obj.length;
var R = 6371; // Earth radius in KM
var counter=-1;
var num;


Number.prototype.toRad = function() {     // Convert coords to radians
   return this * Math.PI / 180;
}


function pathLength (lat1, lng1, lat2, lng2) {  // Implementation of Haversine formula, credits to   http://stackoverflow.com/users/1025458/talkol

var x1 = lat2-lat1;
var dLat = x1.toRad();  
var x2 = lng2-lng1;
var dLon = x2.toRad();  
var a = Math.sin(dLat/2) * Math.sin(dLat/2) + 
                Math.cos(lat1.toRad()) * Math.cos(lat2.toRad()) * 
                Math.sin(dLon/2) * Math.sin(dLon/2);  
var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
var d = R * c; 
return d;
}

module.exports = {
  locate: function(lat,lng) {
 

for (var i=0; i<objLen; i++){         // Brute forcing the object - newer versions will be done with quadtree (hopefully)

var values = obj[i].geo.split(",", 2);
var v1 = parseFloat(values[0]);
var v2 = parseFloat(values[1]);

var temp = pathLength (lat,lng,v2,v1);
if (counter==-1 || temp<counter) {counter=temp; console.log (obj[i].name); num=i;}

  }
  
  var values = obj[num].geo.split(",", 2);   	
  var v1 = parseFloat(values[0]);
  var v2 = parseFloat(values[1]);
  obj[num].lat=v2;							// addinng latitude and longtitude because the ones in the JSON are in the reverse order and are stringified
  obj[num].lng=v1;
  obj[num].distanceTo=counter;				// Distance from original location to closest settlement
  return obj[num];
  } 
};
