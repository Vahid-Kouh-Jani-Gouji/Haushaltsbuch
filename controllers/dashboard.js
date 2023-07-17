



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


// Function to filter the table based on user input
window.filterTable = function(column, value) {
    var input, filter, table, tbody, rows, cells, i, cellValue;
  
    input = value.trim().toUpperCase();
    filter = input.toUpperCase();
    table = document.getElementById("data-table");
    tbody = table.getElementsByTagName("tbody")[0];
    rows = tbody.getElementsByTagName("tr");
  
    // Validate column index
    var columnIndex = parseInt(column, 10); // Parse column value as an integer
  
    if (isNaN(columnIndex) || columnIndex < 0 || columnIndex >= table.rows[0].cells.length) {
      console.error("Invalid column index: ", column);
      return;
    }
  
    // Create a new table for filtered transactions
    var filteredTable = document.createElement("table");
    var filteredTBody = document.createElement("tbody");
    filteredTable.appendChild(filteredTBody);
  
    for (i = 0; i < rows.length; i++) {
      cells = rows[i].getElementsByTagName("td");
      cellValue = cells[columnIndex]?.textContent || cells[columnIndex]?.innerText;
  
      if (columnIndex === 2) { // Assuming the column index for 'Date' is 2
        // Perform date filtering
        var currentDate = new Date();
        var transactionDate = new Date(cellValue);
  
        // Filter for today
        if (value === "today") {
          var startOfDay = new Date();
          startOfDay.setHours(0, 0, 0, 0);
          var endOfDay = new Date();
          endOfDay.setHours(23, 59, 59, 999);
          if (transactionDate >= startOfDay && transactionDate <= endOfDay) {
            addRowToFilteredTable(filteredTBody, rows[i]);
          }
        }
        // Filter for last week
        else if (value === "lastWeek") {
          var oneWeekAgo = new Date();
          oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);
          if (transactionDate >= oneWeekAgo && transactionDate <= currentDate) {
            addRowToFilteredTable(filteredTBody, rows[i]);
          }
        }
        // Filter for last month
        else if (value === "lastMonth") {
          var oneMonthAgo = new Date();
          oneMonthAgo.setMonth(oneMonthAgo.getMonth() - 1);
          if (transactionDate >= oneMonthAgo && transactionDate <= currentDate) {
            addRowToFilteredTable(filteredTBody, rows[i]);
          }
        }
        // Filter for last year
        else if (value === "lastYear") {
          var oneYearAgo = new Date();
          oneYearAgo.setFullYear(oneYearAgo.getFullYear() - 1);
          if (transactionDate >= oneYearAgo && transactionDate <= currentDate) {
            addRowToFilteredTable(filteredTBody, rows[i]);
          }
        }
      }
    }
  
    // Replace the current table with the filtered table
    table.parentNode.replaceChild(filteredTable, table);
  };
  
  // Helper function to add a row to the filtered table
  function addRowToFilteredTable(tbody, row) {
    var newRow = row.cloneNode(true);
    tbody.appendChild(newRow);
  }
  
      
      