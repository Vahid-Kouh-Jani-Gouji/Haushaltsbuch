// Retrieve existing transactions from localStorage or initialize an empty array
var transactions = JSON.parse(localStorage.getItem("wizardData")) || [];
var currentTab = 0; // Current tab is set to be the first tab (0)
showTab(currentTab); // Display the current tab

function showTab(n) {
  // This function will display the specified tab of the form ...
  var x = document.getElementsByClassName("tab");
  x[n].style.display = "block";
  // ... and fix the Previous/Next buttons:
  if (n == 0) {
    document.getElementById("prevBtn").style.display = "none";
  } else {
    document.getElementById("prevBtn").style.display = "inline";
  }
  if (n == (x.length - 1)) {
    document.getElementById("nextBtn").innerHTML = "Submit";
    
  } else {
    document.getElementById("nextBtn").innerHTML = "Next";
  }
  // ... and run a function that displays the correct step indicator:
  fixStepIndicator(n)
}

function nextPrev(n) {
  // This function will figure out which tab to display
  var x = document.getElementsByClassName("tab");
  // Exit the function if any field in the current tab is invalid:
  if (n == 1 && !validateForm()) return false;
  // Hide the current tab:
  x[currentTab].style.display = "none";
  // Increase or decrease the current tab by 1:
  currentTab = currentTab + n;
  // if you have reached the end of the form... :
  if (currentTab >= x.length) {
    //...the form gets submitted:
   
    document.getElementById("regForm").submit();
    saveFormData();
      
     
          
    window.open("../view/dashboard.html");
    
    return false;
  }
  // Otherwise, display the correct tab:
  showTab(currentTab);
}

function validateForm() {
  // This function deals with validation of the form fields
  var x, y, i, valid = true;
  x = document.getElementsByClassName("tab");
  y = x[currentTab].getElementsByTagName("input");
  // A loop that checks every input field in the current tab:
  for (i = 0; i < y.length; i++) {
    // If a field is empty...
    if (y[i].value == "") {
      // add an "invalid" class to the field:
      y[i].className += " invalid";
      // and set the current valid status to false:
      valid = false;
    }
  }
  // If the valid status is true, mark the step as finished and valid:
  if (valid) {
    document.getElementsByClassName("step")[currentTab].className += " finish";
  }
  return valid; // return the valid status
}

function fixStepIndicator(n) {
  // This function removes the "active" class of all steps...
  var i, x = document.getElementsByClassName("step");
  for (i = 0; i < x.length; i++) {
    x[i].className = x[i].className.replace(" active", "");
  }
  //... and adds the "active" class to the current step:
  x[n].className += " active";
}

// Function to save the form data to localStorage
function saveFormData() {
          var balance = document.getElementById("balance").value;
          var incomeCategories = [];
          var expensesCategories = [];
      
          // Get the checked income categories
          var incomeCheckboxes = document.querySelectorAll(".tab:nth-child(3) input[type='checkbox']:checked");
          for (var i = 0; i < incomeCheckboxes.length; i++) {
              incomeCategories.push(incomeCheckboxes[i].parentNode.innerText.trim());
          }
      
          // Get the checked expenses categories
          var expensesCheckboxes = document.querySelectorAll(".tab:nth-child(4) input[type='checkbox']:checked");
          for (var i = 0; i < expensesCheckboxes.length; i++) {
              expensesCategories.push(expensesCheckboxes[i].parentNode.innerText.trim());
          }
      
          // Create the data object
          var data = {
              balance: balance,
              incomeCategories: incomeCategories,
              expensesCategories: expensesCategories
          };
      
          // Convert data object to JSON
          // var jsonData = JSON.stringify(data);
      
          // Save JSON data to localStorage
          // localStorage.setItem("formData", jsonData);

           // Add new transaction to the array
           transactions.push(data);

           // Update localStorage with the updated array data
           localStorage.setItem("wizardData", JSON.stringify(transactions));
      
          console.log("Data saved to localStorage.");
}
      