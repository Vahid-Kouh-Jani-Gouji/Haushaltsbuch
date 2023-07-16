



document.addEventListener("DOMContentLoaded", function() {
          
          // Retrieve existing transactions from localStorage or initialize an empty array
          var wizardData = JSON.parse(localStorage.getItem("wizardData")) ;
          
          var expenseSum = JSON.parse(localStorage.getItem("expenseSum")) ;
          var expenseValue = parseFloat(expenseSum);
         
          var sum = 0 ;



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

        var amountValue = parseFloat(data.balance); // Parse amount as a number
                    

        // Update the sum
        sum += amountValue;

        tableBody.appendChild(row);
    });
    sum -= expenseValue ;
    // Create a new row for the sum
    var sumRow = document.createElement("tr");

    // Create an empty cell for the label
    var labelCell = document.createElement("td");
    labelCell.textContent = "Total Sum:";
    sumRow.appendChild(labelCell);

    // Create a cell for the sum value
    var sumCell = document.createElement("td");
    sumCell.textContent = sum;
    sumRow.appendChild(sumCell);

    // Append the sum row to the table body
    tableBody.appendChild(sumRow);
});
      
      