var db = firebase.firestore();

logo.onmousedown = function(){
  document.location.href = "index.html";
}

var sunadd = document.getElementById('sunadd');
var monadd = document.getElementById('monadd');
var tuesadd = document.getElementById('tuesadd');
var wedadd = document.getElementById('wedadd');
var thursadd = document.getElementById('thursadd');
var friadd = document.getElementById('friadd');
var satadd = document.getElementById('satadd');

var clearsun = document.getElementById('clearsun');
var clearmon = document.getElementById('clearmon');
var cleartues = document.getElementById('cleartues');
var clearwed = document.getElementById('clearwed');
var clearthurs = document.getElementById('clearthurs');
var clearfri = document.getElementById('clearfri');
var clearsat = document.getElementById('clearsat');

var clearall = document.getElementById('clearallbutton');

sunadd.onclick = function(){
  var inputsun = document.getElementById('inputsun');
  var sunplan = document.getElementById('sunplan');
    sunplanChild = document.createElement('li');
  sunplanChild.innerHTML = inputsun.value;
  sunplan.appendChild(sunplanChild)
  db.collection("sun").add({
     sunpush:inputsun.value
   })
   .then((docRef) => {
     console.log("Document written with ID: ", docRef.id);
     inputsun.value = ""
   })
   .catch((error)=> {
       console.error("Error adding document: ", error);
       inputsun.value = ""
   });
 }


monadd.onclick = function(){
  var inputmon = document.getElementById('inputmon');
  var monplan = document.getElementById('monplan');
    monplanChild = document.createElement('li');
  monplanChild.innerHTML = inputmon.value;
  monplan.appendChild(monplanChild)
  db.collection("mon").add({
       monpush:inputmon.value
   })
   .then((docRef) => {
     console.log("Document written with ID: ", docRef.id);
     inputmon.value = ""
   })
   .catch((error)=> {
       console.error("Error adding document: ", error);
       inputmon.value = ""
   });
 }

tuesadd.onclick = function(){
  var inputtues = document.getElementById('inputtues');
  var tuesplan = document.getElementById('tuesplan');
    tuesplanChild = document.createElement('li');
  tuesplanChild.innerHTML = inputtues.value;
  tuesplan.appendChild(tuesplanChild)

  db.collection("tues").add({
     tuespush:inputtues.value
 })
 .then((docRef) => {
   console.log("Document written with ID: ", docRef.id);
   inputtues.value = ""
 })
 .catch((error)=> {
     console.error("Error adding document: ", error);
     inputtues.value = ""
 });
}
wedadd.onclick = function(){
  var inputwed = document.getElementById('inputwed');
  var wedplan = document.getElementById('wedplan');
    wedplanChild = document.createElement('li');
  wedplanChild.innerHTML = inputwed.value;
  wedplan.appendChild(wedplanChild)
  db.collection("wed").add({
     wedpush:inputwed.value
   })
   .then((docRef) => {
     console.log("Document written with ID: ", docRef.id);
     inputwed.value = ""
   })
   .catch((error)=> {
       console.error("Error adding document: ", error);
       inputwed.value = ""
   });
}
thursadd.onclick = function(){
  var inputthurs = document.getElementById('inputthurs');
  var thursplan = document.getElementById('thursplan');
    thursplanChild = document.createElement('li');
  thursplanChild.innerHTML = inputthurs.value;
  thursplan.appendChild(thursplanChild)

  db.collection("thurs").add({
     thurspush:inputthurs.value
 })
 .then((docRef) => {
   console.log("Document written with ID: ", docRef.id);
   inputthurs.value = ""
 })
 .catch((error)=> {
     console.error("Error adding document: ", error);
     inputthurs.value = ""
 });
}
friadd.onclick = function(){
  var inputfri = document.getElementById('inputfri');
  var friplan = document.getElementById('friplan');
    friplanChild = document.createElement('li');
  friplanChild.innerHTML = inputfri.value;
  friplan.appendChild(friplanChild)
  db.collection("fri").add({
     fripush:inputfri.value
 })
 .then((docRef) => {
   console.log("Document written with ID: ", docRef.id);
   inputfri.value = ""
 })
 .catch((error)=> {
     console.error("Error adding document: ", error);
     inputfri.value = ""
 });
}
satadd.onclick = function(){
  var inputsat = document.getElementById('inputsat');
  var satplan = document.getElementById('satplan');
    satplanChild = document.createElement('li');
  satplanChild.innerHTML = inputsat.value;
  satplan.appendChild(satplanChild)
  db.collection("sat").add({
     satpush:inputsat.value,
 })
 .then((docRef) => {
   console.log("Document written with ID: ", docRef.id);
   inputsat.value = ""
 })
 .catch((error)=> {
     console.error("Error adding document: ", error);
     inpursat.value = ""
  });
}

clearsun.onclick = function(){
  document.getElementById("sunplan").innerHTML = "";
  db.collection("sun").get().then((querySnapshot) => {

    querySnapshot.forEach((doc) => {
      db.collection("sun").doc(doc.id).delete().then(function(){
        console.log("Document successfully deleted!");
      }).catch(function(error){
        console.error("Error removing document:", error);
      });
    });
  });
};

clearmon.onclick = function(){
  document.getElementById("monplan").innerHTML = "";
  db.collection("mon").get().then((querySnapshot) => {

    querySnapshot.forEach((doc) => {
      db.collection("mon").doc(doc.id).delete().then(function(){
        console.log("Document successfully deleted!");
      }).catch(function(error){
        console.error("Error removing document:", error);
      });
    });
  });
};
cleartues.onclick = function(){
  document.getElementById("tuesplan").innerHTML = "";
  db.collection("tues").get().then((querySnapshot) => {

    querySnapshot.forEach((doc) => {
      db.collection("tues").doc(doc.id).delete().then(function(){
        console.log("Document successfully deleted!");
      }).catch(function(error){
        console.error("Error removing document:", error);
      });
    });
  });
};
clearwed.onclick = function(){
  document.getElementById("wedplan").innerHTML = "";
  db.collection("wed").get().then((querySnapshot) => {

    querySnapshot.forEach((doc) => {
      db.collection("wed").doc(doc.id).delete().then(function(){
        console.log("Document successfully deleted!");
      }).catch(function(error){
        console.error("Error removing document:", error);
      });
    });
  });
};
clearthurs.onclick = function(){
  document.getElementById("thursplan").innerHTML = "";
  db.collection("thurs").get().then((querySnapshot) => {

    querySnapshot.forEach((doc) => {
      db.collection("thurs").doc(doc.id).delete().then(function(){
        console.log("Document successfully deleted!");
      }).catch(function(error){
        console.error("Error removing document:", error);
      });
    });
  });
};
clearfri.onclick = function(){
  document.getElementById("friplan").innerHTML = "";
  db.collection("fri").get().then((querySnapshot) => {

    querySnapshot.forEach((doc) => {
      db.collection("fri").doc(doc.id).delete().then(function(){
        console.log("Document successfully deleted!");
      }).catch(function(error){
        console.error("Error removing document:", error);
      });
    });
  });
};
clearsat.onclick = function(){
  document.getElementById("satplan").innerHTML = "";
  db.collection("sat").get().then((querySnapshot) => {

    querySnapshot.forEach((doc) => {
      db.collection("sat").doc(doc.id).delete().then(function(){
        console.log("Document successfully deleted!");
      }).catch(function(error){
        console.error("Error removing document:", error);
      });
    });
  });
};

clearall.onclick = function(){
  document.getElementById("sunplan").innerHTML = "";
  document.getElementById("monplan").innerHTML = "";
  document.getElementById("tuesplan").innerHTML = "";
  document.getElementById("wedplan").innerHTML = "";
  document.getElementById("thursplan").innerHTML = "";
  document.getElementById("friplan").innerHTML = "";
  document.getElementById("satplan").innerHTML = "";
  document.getElementById("sunplan").innerHTML = "";

     db.collection("sun").get().then((querySnapshot) => {

       querySnapshot.forEach((doc) => {
         db.collection("sun").doc(doc.id).delete().then(function(){
           console.log("Document successfully deleted!");
         }).catch(function(error){
           console.error("Error removing document:", error);
         });
       });
     });

     document.getElementById("monplan").innerHTML = "";
     db.collection("mon").get().then((querySnapshot) => {

      querySnapshot.forEach((doc) => {
         db.collection("mon").doc(doc.id).delete().then(function(){
           console.log("Document successfully deleted!");
         }).catch(function(error){
           console.error("Error removing document:", error);
         });
       });
     });

     document.getElementById("tuesplan").innerHTML = "";
     db.collection("tues").get().then((querySnapshot) => {

       querySnapshot.forEach((doc) => {
         db.collection("tues").doc(doc.id).delete().then(function(){
           console.log("Document successfully deleted!");
         }).catch(function(error){
           console.error("Error removing document:", error);
         });
       });
     });

     document.getElementById("wedplan").innerHTML = "";
     db.collection("wed").get().then((querySnapshot) => {

       querySnapshot.forEach((doc) => {
         db.collection("wed").doc(doc.id).delete().then(function(){
           console.log("Document successfully deleted!");
         }).catch(function(error){
           console.error("Error removing document:", error);
         });
       });
     });

     document.getElementById("thursplan").innerHTML = "";
     db.collection("thurs").get().then((querySnapshot) => {

       querySnapshot.forEach((doc) => {
         db.collection("thurs").doc(doc.id).delete().then(function(){
           console.log("Document successfully deleted!");
         }).catch(function(error){
           console.error("Error removing document:", error);
         });
       });
     });

     document.getElementById("friplan").innerHTML = "";
     db.collection("fri").get().then((querySnapshot) => {

       querySnapshot.forEach((doc) => {
         db.collection("fri").doc(doc.id).delete().then(function(){
           console.log("Document successfully deleted!");
         }).catch(function(error){
           console.error("Error removing document:", error);
         });
       });
     });

     document.getElementById("satplan").innerHTML = "";
     db.collection("sat").get().then((querySnapshot) => {

      querySnapshot.forEach((doc) => {
         db.collection("sat").doc(doc.id).delete().then(function(){
           console.log("Document successfully deleted!");
         }).catch(function(error){
           console.error("Error removing document:", error);
         });
       });
     });

};

db.collection("sun").get().then((querySnapshot) => {

  querySnapshot.forEach((doc) => {
  var inputsun = document.getElementById('inputsun');
  var sunplan = document.getElementById('sunplan');
  let sunplanner = doc.data();

  sunplanChild = document.createElement("li");
  sunplanChild.innerHTML = sunplanner.sunpush;

  sunplan.appendChild(sunplanChild);

  });
});

db.collection("mon").get().then((querySnapshot) => {

  querySnapshot.forEach((doc) => {
  var inputmon = document.getElementById('inputmon');
  var monplan = document.getElementById('monplan');
  let monplanner = doc.data();

  monplanChild = document.createElement("li");
  monplanChild.innerHTML = monplanner.monpush;

  monplan.appendChild(monplanChild);

  });
});

db.collection("tues").get().then((querySnapshot) => {

  querySnapshot.forEach((doc) => {
  var inputtues = document.getElementById('inputtues');
  var tuesplan = document.getElementById('tuesplan');
  let tuesplanner = doc.data();

  tuesplanChild = document.createElement("li");
  tuesplanChild.innerHTML = tuesplanner.tuespush;

  tuesplan.appendChild(tuesplanChild);

  });
});

db.collection("wed").get().then((querySnapshot) => {

  querySnapshot.forEach((doc) => {
  var inputwed = document.getElementById('inputwed');
  var wedplan = document.getElementById('wedplan');
  let wedplanner = doc.data();

  wedplanChild = document.createElement("li");
  wedplanChild.innerHTML = wedplanner.wedpush;

  wedplan.appendChild(wedplanChild);

  });
});

db.collection("thurs").get().then((querySnapshot) => {

  querySnapshot.forEach((doc) => {
  var inputthurs = document.getElementById('inputthurs');
  var thursplan = document.getElementById('thursplan');
  let thursplanner = doc.data();

  thursplanChild = document.createElement("li");
  thursplanChild.innerHTML = thursplanner.thurspush;

  thursplan.appendChild(thursplanChild);

  });
});

db.collection("fri").get().then((querySnapshot) => {

  querySnapshot.forEach((doc) => {
  var inputfri = document.getElementById('inputfri');
  var friplan = document.getElementById('friplan');
  let friplanner = doc.data();

  friplanChild = document.createElement("li");
  friplanChild.innerHTML = friplanner.fripush;

  friplan.appendChild(friplanChild);

  });
});

db.collection("sat").get().then((querySnapshot) => {

  querySnapshot.forEach((doc) => {
  var inputsat = document.getElementById('inputsat');
  var satplan = document.getElementById('satplan');
  let satplanner = doc.data();

  satplanChild = document.createElement("li");
  satplanChild.innerHTML = satplanner.satpush;

  satplan.appendChild(satplanChild);

  });
});
