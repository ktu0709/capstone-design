
const admin = require("firebase-admin");
var serviceAccount = require('./test-75c5a-firebase-adminsdk-az1n0-a0b1211919.json');
admin.initializeApp({
  credential:admin.credential.cert(serviceAccount),
  databaseURL:"https://test-75c5a.firebaseio.com",
  authDomain:"test-75c5a.firebaseapp.com",
});

var db=admin.database();
var temp=db.ref("Temp");
var hum=db.ref("hum");
var mungi=db.ref("mungi");
var weather=db.ref("weather");

temp.on("value",function(snapshot){
  console.log(snapshot.val());
},function(errorObject){
  console.log("the read failed: "+errorObject.code);
});

hum.on("value",function(snapshot){
  console.log(snapshot.val());
},function(errorObject){
  console.log("the read failed: "+errorObject.code);
});

mungi.on("value",function(snapshot){
  console.log(snapshot.val());
},function(errorObject){
  console.log("the read failed: "+errorObject.code);
});

weather.on("value",function(snapshot){
  console.log(snapshot.val());
},function(errorObject){
  console.log("the read failed: "+errorObject.code);
});
