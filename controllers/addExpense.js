// Retrieve existing transactions from localStorage or initialize an empty array
var transactions = JSON.parse(localStorage.getItem("transactions")) || [];

document.getElementById("myForm").addEventListener("submit", function(event) {
          event.preventDefault(); // Prevent form submission
      
          // Get form values
          var amount = document.getElementById("amount").value;
          amount= -(amount);
          var date = document.getElementById("date").value;
          var repeat = document.getElementById("repeat").value;
          var category = document.getElementById("category").value;
          var comment = document.getElementById("comment").value;
      
          // Create data object
          var data = {
              amount: amount,
              date: date,
              repeat: repeat,
              category: category,
              comment: comment
          };
      
         
          
          // Add new transaction to the array
          transactions.push(data);

          // Update localStorage with the updated array data
          localStorage.setItem("transactions", JSON.stringify(transactions));
           // Clear form inputs
          document.getElementById("amount").value = "";
          document.getElementById("date").value = "";
          document.getElementById("repeat").value = "never";
          document.getElementById("category").value = "groceries";
          document.getElementById("comment").value = "";
      
          console.log("Data saved to localStorage.");
 });
 // check for saldo and add alarm lable to notification menu 
// Retrieve existing saldo from localStorage 
var saldo = JSON.parse(localStorage.getItem("saldo")) ;
var saldoValue = parseInt(saldo);
if ( saldoValue <= 200)document.getElementById("numberOfNotification").innerHTML="1";
      