



document.addEventListener("DOMContentLoaded", function() {
          
          // Retrieve existing transactions from localStorage or initialize an empty array
          var wizardData = JSON.parse(localStorage.getItem("wizardData")) ;
          var transactions = JSON.parse(localStorage.getItem("transactions")) ;
          

          var tableBody = document.querySelector("#data-table tbody");

    // Clear table body
    tableBody.innerHTML = "";

    // Loop through transactions array and create rows
    wizardData.forEach(function(data) {
        var row = document.createElement("tr");

        // Create cells for each property in the transaction object
        Object.values(data).forEach(function(value) {
            var cell = document.createElement("td");
            cell.textContent = value;
            row.appendChild(cell);
        });

        tableBody.appendChild(row);
    });
    // Retrieve data from localStorage
        //   var storedData = localStorage.getItem("formData");
        //   var parsedData = JSON.parse(storedData);
      
          // Get the table body element
        //   var tableBody = document.querySelector("#data-table tbody");
      
          // Create a row for the data
        //   var row = document.createElement("tr");
      
          // Create cells for each property in the data object
        //   var balanceCell = document.createElement("td");
        //   balanceCell.textContent = parsedData.balance;
        //   row.appendChild(balanceCell);
      
        //   var incomeCategoriesCell = document.createElement("td");
        //   var incomeCategoriesList = document.createElement("ul");
      
        //   parsedData.incomeCategories.forEach(function(category) {
        //       var listItem = document.createElement("li");
        //       listItem.textContent = category;
        //       incomeCategoriesList.appendChild(listItem);
        //   });
      
        //   incomeCategoriesCell.appendChild(incomeCategoriesList);
        //   row.appendChild(incomeCategoriesCell);
      
        //   var expensesCategoriesCell = document.createElement("td");
        //   var expensesCategoriesList = document.createElement("ul");
      
        //   parsedData.expensesCategories.forEach(function(category) {
        //       var listItem = document.createElement("li");
        //       listItem.textContent = category;
        //       expensesCategoriesList.appendChild(listItem);
        //   });
      
        //   expensesCategoriesCell.appendChild(expensesCategoriesList);
        //   row.appendChild(expensesCategoriesCell);
      
          // Add the row to the table body
        //   tableBody.appendChild(row);
});
      
      