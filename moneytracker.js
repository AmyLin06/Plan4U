var total = 0;

var db = firebase.firestore();
var logo = document.getElementById('logo')

var incomeAddbutton = document.getElementById("incomebutton");
var expenseAddbutton = document.getElementById("expensebutton");
var removeAllbutton = document.getElementById("clearexpense");

logo.onmousedown = function(){
  document.location.href = "index.html";
}
incomeAddbutton.onclick = function(){
  var incomenameinput = document.getElementById("inputincome");
  var incomenamelist = document.getElementById("records");
  var incomeamountinput = document.getElementById("inputamount");
  var incomeamountlist = document.getElementById("pushprice");
  if(isNaN(incomeamountinput.value) || incomeamountinput.value == ""){
    alert("Please enter a valid amount and try again.");
  }else{
    incomenamelistChild = document.createElement("li");
    incomenamelistChild.innerHTML = incomenameinput.value;

    incomenamelist.appendChild(incomenamelistChild);
    incomenamelistChild.style.color = "#4CA64C";

    incomeamountlistChild = document.createElement("li");
    incomeamountlistChild.innerHTML ="$" + incomeamountinput.value;
    incomeamountlist.appendChild(incomeamountlistChild);
    total = total + parseInt(incomeamountinput.value);

    totalamount.innerHTML = "Total: $" + total;
    incomeamountlistChild.style.color = "#4CA64C";
  }

  if (total < 0){
    totalamount.style.color = "red";
  }

  db.collection("income").add({
      incomesourcerecord: incomenameinput.value,
      incomeamountrecord:incomeamountinput.value
  })
  .then((docRef) => {
    console.log("Document written with ID: ", docRef.id);
    incomenameinput.value = "";
    incomeamountinput.value = "";
  })
  .catch((error)=> {
      console.error("Error adding document: ", error);
      incomenameinput.value = "";
      incomeamountinput.value = "";
  });
};

expenseAddbutton.onclick = function(){
  var expensenameinput = document.getElementById("inputexpense");
  var expensenamelist = document.getElementById("records");
  var expenseamountinput = document.getElementById("expenseamount");
  var expenseamountlist = document.getElementById("pushprice");
  if(isNaN(expenseamountinput.value) || expenseamountinput.value == ""){
    alert("Please enter a valid amount and try again.");
  }else{
    expensenamelistChild = document.createElement("li");
    expensenamelistChild.innerHTML = expensenameinput.value;

    expensenamelist.appendChild(expensenamelistChild);
    expensenamelistChild.style.color = "#FF4040";

    expenseamountlistChild = document.createElement("li");
    expenseamountlistChild.innerHTML ="$" + expenseamountinput.value;
    expenseamountlist.appendChild(expenseamountlistChild);
    total = total - parseInt(expenseamountinput.value);

    totalamount.innerHTML = "Total: $" + total;
    expenseamountlistChild.style.color = "#FF4040";
  }
  if (total < 0){
    totalamount.style.color = "red";
  }
  db.collection("expense").add({
      expensesourcerecord:expensenameinput.value,
      expenseamountrecord: expenseamountinput.value,
  })
  .then((docRef) => {
    console.log("Document written with ID: ", docRef.id);
    expensenameinput.value = "";
    expenseamountinput.value = "";
  })
  .catch((error)=> {
      console.error("Error adding document: ", error);
      expensenameinput.value = "";
      expenseamountinput.value = "";
  });
};

removeAllbutton.onclick = function(){
  document.getElementById("records").innerHTML = "";
  document.getElementById("pushprice").innerHTML = "";
  db.collection("expense").get().then((querySnapshot) => {

    querySnapshot.forEach((doc) => {
      db.collection("expense").doc(doc.id).delete().then(function() {
                  console.log("Document successfully deleted!");
              }).catch(function(error) {
                  console.error("Error removing document: ", error);
              });
      });
  db.collection("income").get().then((querySnapshot) => {

    querySnapshot.forEach((doc) => {
      db.collection("income").doc(doc.id).delete().then(function() {
                  console.log("Document successfully deleted!");

              }).catch(function(error) {
                  console.error("Error removing document: ", error);
              });
      });
  var incomenamelist = document.getElementById("records");
  var incomeamountlist = document.getElementById("pushprice");
  var incomeamountinput = document.getElementById("inputamount");
  var ulrecord = document.createElement('ul');
  ulrecord.setAttribute("id", "records")
  incomenamelist.innerHTML = "<p>History:</p>";
  var ulprice = document.createElement('ul');
  ulprice.setAttribute("id", "pushprice")
  incomeamountlist.innerHTML = "<p>Amount:</p>";
  total = 0;
  totalamount.innerHTML = "Total: $" + total;
});
  });
};

db.collection("expense").get().then((querySnapshot) => {

  querySnapshot.forEach((doc) => {
  var expensenamelist = document.getElementById("records");
  var expenseamountlist = document.getElementById("pushprice");
  let dataexpense = doc.data();

  expensenamelistChild = document.createElement("li");
  expensenamelistChild.innerHTML = dataexpense.expensesourcerecord;

  expensenamelist.appendChild(expensenamelistChild);
  expensenamelistChild.style.color = "#FF4040";

  expenseamountlistChild = document.createElement("li");
  expenseamountlistChild.innerHTML ="$" + dataexpense["expenseamountrecord"];
  expenseamountlist.appendChild(expenseamountlistChild);
  total = total - parseInt(dataexpense.expenseamountrecord);

  totalamount.innerHTML = "Total: $" + total;
  expenseamountlistChild.style.color = "#FF4040";

  if (total < 0){
  totalamount.style.color = "red";
  }
  });
});
db.collection("income").get().then((querySnapshot) => {

  querySnapshot.forEach((doc) => {
    var incomenamelist = document.getElementById("records");
    var incomeamountlist = document.getElementById("pushprice");

    let dataincome = doc.data();

    incomenamelistChild = document.createElement("li");
    incomenamelistChild.innerHTML = dataincome.incomesourcerecord;

    incomenamelist.appendChild(incomenamelistChild);
    incomenamelistChild.style.color = "#4CA64C";

    incomeamountlistChild = document.createElement("li");
    incomeamountlistChild.innerHTML ="$" + dataincome["incomeamountrecord"];
    incomeamountlist.appendChild(incomeamountlistChild);
    total = total + parseInt(dataincome.incomeamountrecord);

    totalamount.innerHTML = "Total: $" + total;
    incomeamountlistChild.style.color = "#4CA64C";

    if (total < 0){
    totalamount.style.color = "red";
      console.log(doc.data());
    }
  });
});
