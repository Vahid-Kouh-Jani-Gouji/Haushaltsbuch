// Retrieve existing transactions from localStorage or initialize an empty array
var transactions = JSON.parse(localStorage.getItem("transactions")) ;

document.addEventListener("DOMContentLoaded", function() {
          
          
          

          var tableBody = document.querySelector("#data-table tbody");

          // Clear table body
          tableBody.innerHTML = "";
          var sum = 0;

          // Loop through transactions array and create rows

          transactions.forEach(function(transaction, index) {
                    var row = document.createElement("tr");
          
                    Object.values(transaction).forEach(function(value) {
                    var cell = document.createElement("td");
                    cell.textContent = value;
                    row.appendChild(cell);
                    });
                    
                    var amountValue = parseFloat(transaction.amount); // Parse amount as a number
                    

                    // Update the sum
                    sum += amountValue;
                    localStorage.setItem("expenseSum", JSON.stringify(sum));
          
                    // Create actions cell
                    var actionsCell = document.createElement("td");
          
                    // Create edit button
                    var editButton = document.createElement("button");
                    editButton.textContent = "Edit";
                    editButton.addEventListener("click", function() {
                    openEditModal(index);
                    });
                    actionsCell.appendChild(editButton);
          
                    // Create delete button
                    var deleteButton = document.createElement("button");
                    deleteButton.textContent = "Delete";
                    deleteButton.addEventListener("click", function() {
                    deleteTransaction(index);
                    });
                    actionsCell.appendChild(deleteButton);
          
                    row.appendChild(actionsCell);
          
                    tableBody.appendChild(row);
          });

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




// Function to edit a transaction
 function openEditModal(index) {
          var modal = document.getElementById("editModal");
          var closeBtn = document.getElementsByClassName("close")[0];
          var editForm = document.getElementById("editForm");
      
          // Fill the edit form with transaction data
          var transaction = transactions[index];
          document.getElementById("editAmount").value = transaction.amount;
          document.getElementById("editDate").value = transaction.date;
          document.getElementById("editRepeat").value = transaction.repeat;
          document.getElementById("editCategory").value = transaction.category;
          document.getElementById("editComment").value = transaction.comment;
      
          // Show the modal
          modal.style.display = "block";
      
          // Close the modal when the close button is clicked
          closeBtn.onclick = function() {
              modal.style.display = "none";
          };
      
          // Close the modal when the user clicks outside the modal
          window.onclick = function(event) {
              if (event.target == modal) {
                  modal.style.display = "none";
              }
          };
      
          // Submit the edit form
          editForm.onsubmit = function(event) {
              event.preventDefault(); // Prevent form submission
      
              // Update the transaction data in the array
              transaction.amount = document.getElementById("editAmount").value;
              transaction.date = document.getElementById("editDate").value;
              transaction.repeat = document.getElementById("editRepeat").value;
              transaction.category = document.getElementById("editCategory").value;
              transaction.comment = document.getElementById("editComment").value;
      
              // Update localStorage with the updated array data
              localStorage.setItem("transactions", JSON.stringify(transactions));
      
          
                    // Call the displayTransactions function to update the table
                    
                    location.reload();
      
              // Close the modal
              modal.style.display = "none";
      
              // Reset the form
              editForm.reset();
          };
          
}
      
      
      // Function to delete a transaction
      function deleteTransaction(index) {
          // Remove the transaction from the array
          transactions.splice(index, 1);
      
          // Update localStorage with the updated array data
          localStorage.setItem("transactions", JSON.stringify(transactions));
      
          // Display the updated transactions in the table
          location.reload();
}




// Function to filter the table based on user input
window.filterTable = function(column, value) {
          var input, filter, table, tbody, rows, cells, i, cellValue;
        
          input = value.trim().toUpperCase();
          filter = input.toUpperCase();
          table = document.getElementById("data-table");
          tbody = table.getElementsByTagName("tbody")[0];
          rows = tbody.getElementsByTagName("tr");
        
          // Validate column index
          var columnIndex = Array.from(table.rows[0].cells).findIndex(function(cell) {
            var cellContent = cell.querySelector('select') ? cell.querySelector('select').value.trim().toLowerCase() : cell.textContent.trim().toLowerCase();
            return cellContent === String(column).toLowerCase(); // Ensure column is treated as a string
          });
        
          if (columnIndex === -1) {
            console.error("Invalid column name: ", column);
            return;
          }
        
          for (i = 0; i < rows.length; i++) {
            cells = rows[i].getElementsByTagName("td");
            cellValue = cells[columnIndex]?.textContent || cells[columnIndex]?.innerText;
        
            // Perform regular text filtering
            if (cellValue && cellValue.toUpperCase().indexOf(filter) > -1) {
              rows[i].style.display = "";
            } else {
              rows[i].style.display = "none";
            }
          }
        };
        


        
      
      
      