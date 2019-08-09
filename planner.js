var db = firebase.firestore();

var sunadd = document.getElementById('sunadd');
var monadd = document.getElementById('monadd');
var tuesadd = document.getElementById('tuesadd');
var wedadd = document.getElementById('wedadd');
var thursadd = document.getElementById('thursadd');
var friadd = document.getElementById('friadd');
var satadd = document.getElementById('satadd');

var clearsun = document.getElementById('clearsun')
var clearmon = document.getElementById('clearmon')
var cleartues = document.getElementById('cleartues')
var clearwed = document.getElementById('clearwed')
var clearthurs = document.getElementById('clearthurs')
var clearfri = document.getElementById('clearfri')
var clearsat = document.getElementById('clearsat')

var clearall = document.getElementById('clearallbutton')

sunadd.onmousedown= function(){
  var inputsun = document.getElementById('inputsun');
  var sunplan = document.getElementById('sunplan');
    sunplanChild = document.createElement('li');
  sunplanChild.innerHTML = inputsun.value;
  inputsun.value = "";
  sunplan.appendChild(sunplanChild)
};

monadd.onmousedown = function(){
  var inputmon = document.getElementById('inputmon');
  var monplan = document.getElementById('monplan');
    monplanChild = document.createElement('li');
  monplanChild.innerHTML = inputmon.value;
  inputmon.value = "";
  monplan.appendChild(monplanChild)
};
tuesadd.onmousedown = function(){
  var inputtues = document.getElementById('inputtues');
  var tuesplan = document.getElementById('tuesplan');
    tuesplanChild = document.createElement('li');
  tuesplanChild.innerHTML = inputtues.value;
  inputtues.value = "";
  tuesplan.appendChild(tuesplanChild)
};
wedadd.onmousedown = function(){
  var inputwed = document.getElementById('inputwed');
  var wedplan = document.getElementById('wedplan');
    wedplanChild = document.createElement('li');
  wedplanChild.innerHTML = inputwed.value;
  inputwed.value = "";
  wedplan.appendChild(wedplanChild)
};
thursadd.onmousedown = function(){
  var inputthurs = document.getElementById('inputthurs');
  var thursplan = document.getElementById('thursplan');
    thursplanChild = document.createElement('li');
  thursplanChild.innerHTML = inputthurs.value;
  inputthurs.value = "";
  thursplan.appendChild(thursplanChild)
};
friadd.onmousedown = function(){
  var inputfri = document.getElementById('inputfri');
  var friplan = document.getElementById('friplan');
    friplanChild = document.createElement('li');
  friplanChild.innerHTML = inputfri.value;
  inputfri.value = "";
  friplan.appendChild(friplanChild)
};
satadd.onmousedown = function(){
  var inputsat = document.getElementById('inputsat');
  var satplan = document.getElementById('satplan');
    satplanChild = document.createElement('li');
  satplanChild.innerHTML = inputsat.value;
  inputsat.value = "";
  satplan.appendChild(satplanChild)
};

clearsun.onmousedown = function(){
  document.getElementById("sunplan").innerHTML = "";

};
clearmon.onmousedown = function(){
  document.getElementById("monplan").innerHTML = "";
};
cleartues.onmousedown = function(){
  document.getElementById("tuesplan").innerHTML = "";
};
clearwed.onmousedown = function(){
  document.getElementById("wedplan").innerHTML = "";
};
clearthurs.onmousedown = function(){
  document.getElementById("thursplan").innerHTML = "";
};
clearfri.onmousedown = function(){
  document.getElementById("friplan").innerHTML = "";
};
clearsat.onmousedown = function(){
  document.getElementById("satplan").innerHTML = "";
};

clearallbutton.onmousedown = function(){
  document.getElementById("sunplan").innerHTML = "";
  document.getElementById("monplan").innerHTML = "";
  document.getElementById("tuesplan").innerHTML = "";
  document.getElementById("wedplan").innerHTML = "";
  document.getElementById("thursplan").innerHTML = "";
  document.getElementById("friplan").innerHTML = "";
  document.getElementById("satplan").innerHTML = "";
  db.collection("users").doc("li.id").delete().then(function() {
      console.log("Document successfully deleted!");
  }).catch(function(error) {
      console.error("Error removing document: ", error);
  });
};

db.collection("users").add({
    sunlist: "inputsun",
})
.then(function(docRef) {
    console.log("Document written with ID: ", docRef.id);
})
.catch(function(error) {
    console.error("Error adding document: ", error);
});

db.collection("users").add({
    monlist: "inputmon",
})
.then(function(docRef) {
    console.log("Document written with ID: ", docRef.id);
})
.catch(function(error) {
    console.error("Error adding document: ", error);
});

db.collection("users").add({
    tueslist: "inputtues",
})
.then(function(docRef) {
    console.log("Document written with ID: ", docRef.id);
})
.catch(function(error) {
    console.error("Error adding document: ", error);
});
db.collection("users").add({
    wedlist: "inputwed",
})
.then(function(docRef) {
    console.log("Document written with ID: ", docRef.id);
})
.catch(function(error) {
    console.error("Error adding document: ", error);
});

db.collection("users").add({
    thurslist: "inputthurs",
})
.then(function(docRef) {
    console.log("Document written with ID: ", docRef.id);
})
.catch(function(error) {
    console.error("Error adding document: ", error);
});

db.collection("users").add({
    frilist: "inputfri",
})
.then(function(docRef) {
    console.log("Document written with ID: ", docRef.id);
})
.catch(function(error) {
    console.error("Error adding document: ", error);
});

db.collection("users").add({
    satlist: "inputsat",
})
.then(function(docRef) {
    console.log("Document written with ID: ", docRef.id);
})
.catch(function(error) {
    console.error("Error adding document: ", error);
});

db.collection("users").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data()}`);
    });
});
window.onload = function(){

}
