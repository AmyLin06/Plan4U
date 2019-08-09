var db = firebase.firestore();

var todoAddbutton = document.getElementById("addtodo");
var todoClearbutton = document.getElementById("cleartodo");

logo.onmousedown = function(){
  document.location.href = "plannerproject.html";
}

todoAddbutton.onmousedown = function(){
  var todoInput = document.getElementById("inputtodo");
  var todolist = document.getElementById("todolist");
    todolistChild = document.createElement("li");
  todolistChild.innerHTML = todoInput.value;
  todoInput.value = "";
  todolist.appendChild(todolistChild);
}

todoClearbutton.onmousedown = function(){
    document.getElementById("todolist").innerHTML = "";
}

var reminderAddbutton = document.getElementById("addreminder");
var reminderClearbutton = document.getElementById("clearreminder");

reminderAddbutton.onmousedown = function(){
  var remindersInput = document.getElementById("inputreminder");
  var reminderlist = document.getElementById("reminderlist");
    reminderlistChild = document.createElement("li");
  reminderlistChild.innerHTML = remindersInput.value;
  remindersInput.value = "";
  reminderlist.appendChild(reminderlistChild);
}
reminderClearbutton.onmousedown = function(){
  document.getElementById("resminderlist").innerHTML = "";
}


db.collection("users").add({
    todo:"todoInput",
    reminder:"remindersInput",
})
.then(function(docRef) {
    console.log("Document written with ID: ", docRef.id);
})
.catch(function(error) {
    console.error("Error adding document: ", error);
});

db.collection("users").get().then((querySnapshot) => {
  querySnapshot.forEach((doc) => {
    console.log('${doc.id} => ${doc.data()}');
  });
});
