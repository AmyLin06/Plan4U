var db = firebase.firestore();

var todoAddbutton = document.getElementById("addtodo");
var todoClearbutton = document.getElementById("cleartodo");

logo.onmousedown = function(){
  document.location.href = "index.html";
}

todoAddbutton.onclick = function(){
  var todoInput = document.getElementById("inputtodo");
  var todolist = document.getElementById("todolist");
    todolistChild = document.createElement("li");
  todolistChild.innerHTML = todoInput.value;
  todolist.appendChild(todolistChild);
  db.collection("todo").add({
      todoadd:todoInput.value,
  })
  .then((docRef) => {
    console.log("Document written with ID: ", docRef.id);
    todoInput.value = "";
    todolist.value = "";
  })
  .catch((error)=> {
      console.error("Error adding document: ", error);
      todoInput.value = "";
      todolist.value = "";
  });
}

todoClearbutton.onclick = function(){
    document.getElementById("todolist").innerHTML = "";
    db.collection("todo").get().then((querySnapshot) => {

      querySnapshot.forEach((doc) => {
        db.collection("todo").doc(doc.id).delete().then(function(){
          console.log("Document successfully deleted!");
        }).catch(function(error){
          console.error("Error removing document:", error);
        });
      });
    });
  };

var reminderAddbutton = document.getElementById("addreminder");
var reminderClearbutton = document.getElementById("clearreminder");

reminderAddbutton.onclick = function(){
  var remindersInput = document.getElementById("inputreminder");
  var reminderlist = document.getElementById("reminderlist");
    reminderlistChild = document.createElement("li");
  reminderlistChild.innerHTML = remindersInput.value;
  reminderlist.appendChild(reminderlistChild);
  db.collection("reminder").add({
      reminderadd:remindersInput.value,
  })
  .then((docRef) => {
    console.log("Document written with ID: ", docRef.id);
    remindersInput.value = "";
    reminderlist.value = "";
  })
  .catch((error)=> {
      console.error("Error adding document: ", error);
      remindersInput.value = "";
      reminderlist.value = "";
  });
}
reminderClearbutton.onmousedown = function(){
  document.getElementById("reminderlist").innerHTML = "";
  db.collection("reminder").get().then((querySnapshot) => {

    querySnapshot.forEach((doc) => {
      db.collection("reminder").doc(doc.id).delete().then(function(){
        console.log("Document successfully deleted!");
      }).catch(function(error){
        console.error("Error removing document:",error);
      });
  });
});
}

db.collection("todo").get().then((querySnapshot) => {

  querySnapshot.forEach((doc) => {
  var todoInput = document.getElementById("inputtodo");
  var todolist = document.getElementById("todolist");
  let datatodo = doc.data();

  todolistChild = document.createElement("li");
  todolistChild.innerHTML = datatodo.todoadd;

  todolist.appendChild(todolistChild);

  });
});

db.collection("reminder").get().then((querySnapshot) => {

  querySnapshot.forEach((doc) => {
  var remindersInput = document.getElementById("inputreminder");
  var reminderlist = document.getElementById("reminderlist");
  let datareminder = doc.data();

  reminderlistChild = document.createElement("li");
  reminderlistChild.innerHTML = datareminder.reminderadd;

  reminderlist.appendChild(reminderlistChild);

  });
});

var text = "It's all in the details";

var chars = text.split('');
var container = document.getElementById("slogan");
var ii = 0;
setInterval(function () {
  if (ii < chars.length) {
    container.innerHTML += chars[ii++];
       } else {
           ii = 0;
           container.innerHTML = "";
       }
   }, 80);
