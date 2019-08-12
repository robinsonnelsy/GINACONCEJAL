var  todolodeusernfire;
var nodetodoadmin;
var todolodeadminfire;
var vinpnombre;
var  vpass;
function inicia(){
  var firebaseConfig = {
    apiKey: "AIzaSyDhOtf_ssOp3KEOiu3nByOWcqJxXZEzVaA",
    authDomain: "concejalaginna.firebaseapp.com",
    databaseURL: "https://concejalaginna.firebaseio.com",
    projectId: "concejalaginna",
    storageBucket: "concejalaginna.appspot.com",
    messagingSenderId: "167282227815",
    appId: "1:167282227815:web:6efa3b7917aa63bd"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

}















  // Initialize Firebase
  inicia();

  funatraefireadmi();
function funatraefireadmi(){
    firebase.database().ref().child("admin").once("value", function(snapshot) {
  
        todolodeadminfire=snapshot.val();
    


        firebase.database().ref().child("user").once("value", function(snapshot) {
  
          todolodeusernfire=snapshot.val();
      
      //    console.log("todolodeadminfire");
      //    console.log(todolodeadminfire);
          
  
      }, function (errorObject) {
      //  console.log("The read failed: " + errorObject.code);
      });

        
        

    }, function (errorObject) {
    //  console.log("The read failed: " + errorObject.code);
    });
  }

  funatraefireadmion();

  function funatraefireadmion(){
    firebase.database().ref().child("admin").on("value", function(snapshot) {
  
        todolodeadminfire=snapshot.val();
      
      }, function (errorObject) {
//console.log("The read failed: " + errorObject.code);
    });
  }


  firebase.database().ref().child("user").on("child_added", function(snapshot) {
  
    firebase.database().ref().child("admin").once("value", function(snapshot) {
  
      todolodeadminfire=snapshot.val();
  


      firebase.database().ref().child("user").once("value", function(snapshot) {

        todolodeusernfire=snapshot.val();
    
     //   console.log("todolodeadminfire");
      //  console.log(todolodeadminfire);
        

    }, function (errorObject) {
    //  console.log("The read failed: " + errorObject.code);
    });

      
      

  }, function (errorObject) {
  //  console.log("The read failed: " + errorObject.code);
  });


firebase.database().ref().child("user").child(snapshot.key).child("idfire").set(snapshot.key);
    

}, function (errorObject) {
 // console.log("The read failed: " + errorObject.code);
});





  var  soyadminabjto={objfire:0,estoylogeado:false};
  var  soyuserobj={objfire:0,estoylogeado:false};;

function fbtlogin(){

 vinpnombre=getv("idinpnombre");
 vpass=getv("inppass");
//console.log(vpass+"  aca");
//console.log(todolodeadminfire);
    for(var i in todolodeadminfire){
if(todolodeadminfire.nombre==vinpnombre&&todolodeadminfire.clave==vpass){
window.location="index2.html";

soyadminabjto.estoylogeado=true;
}

    }


          
    for(var i in todolodeusernfire){
      if(todolodeusernfire[i].user==vinpnombre&&todolodeusernfire[i].pass==vpass){
      window.location="index2.html";
   
      soyuserobj.estoylogeado=true;
      }
      
          }
      
      


   
}

function getv(st){
   return document.getElementById(st).value;
}