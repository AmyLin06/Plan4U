total = 0;

var db = firebase.firestore();
var logo = document.getElementById('logo')

var incomeAddbutton = document.getElementById("incomebutton");
var expenseAddbutton = document.getElementById("expensebutton");
var removeAllbutton = document.getElementById("clearexpense");

logo.onmousedown = function(){
  document.location.href = "plannerproject.html";
}
incomeAddbutton.onmousedown = function(){
  var incomenameinput = document.getElementById("inputincome");
  var incomenamelist = document.getElementById("records");
  var incomeamountinput = document.getElementById("inputamount");
  var incomeamountlist = document.getElementById("pushprice");
  if(isNaN(incomeamountinput.value) || incomeamountinput.value == ""){
    alert("Please enter a valid amount and try again.");
  }else{
    incomenamelistChild = document.createElement("li");
    incomenamelistChild.innerHTML = incomenameinput.value;
    incomenameinput.value = "";
    incomenamelist.appendChild(incomenamelistChild);
    incomenamelistChild.style.color = "blue";

    incomeamountlistChild = document.createElement("li");
    incomeamountlistChild.innerHTML ="$" + incomeamountinput.value;
    incomeamountlist.appendChild(incomeamountlistChild);
    total = total + parseInt(incomeamountinput.value);
    incomeamountinput.value = "";
    totalamount.innerHTML = "Total: $" + total;
    incomeamountlistChild.style.color = "blue";
  }

  if (total < 0){
    totalamount.style.color = "red";
  }
};

expenseAddbutton.onmousedown = function(){
  var expensenameinput = document.getElementById("inputexpense");
  var expensenamelist = document.getElementById("records");
  var expenseamountinput = document.getElementById("expenseamount");
  var expenseamountlist = document.getElementById("pushprice");
  if(isNaN(expenseamountinput.value) || expenseamountinput.value == ""){
    alert("Please enter a valid amount and try again.");
  }else{
    expensenamelistChild = document.createElement("li");
    expensenamelistChild.innerHTML = expensenameinput.value;
    expensenameinput.value = "";
    expensenamelist.appendChild(expensenamelistChild);
    expensenamelistChild.style.color = "red";

    expenseamountlistChild = document.createElement("li");
    expenseamountlistChild.innerHTML ="$" + expenseamountinput.value;
    expenseamountlist.appendChild(expenseamountlistChild);
    total = total - parseInt(expenseamountinput.value);
    expenseamountinput.value = "";
    totalamount.innerHTML = "Total: $" + total;
    expenseamountlistChild.style.color = "red";
  }
  if (total < 0){
    totalamount.style.color = "red";
  }
};

removeAllbutton.onmousedown = function(){
  document.getElementById("records").innerHTML = "";
  document.getElementById("pushprice").innerHTML = "";
  totalamount.innerHTML = "Total: $" + 0;
  db.collection("users").doc("li.id").delete().then(function() {
                console.log("Document successfully deleted!");
            }).catch(function(error) {
                console.error("Error removing document: ", error);
            });
};

db.collection("users").add({
    expensesourcerecord:"inputexpense",
    expenseamountrecord: "expenseamount",
    incomesourcerecord: "inputamount",
    incomeamountrecord:"inputincome",
    totalmoney:"total",
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
