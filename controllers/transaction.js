

document.addEventListener("DOMContentLoaded", function() {
          // Retrieve data from localStorage
          // var storedData = localStorage.getItem("transactionData");
          // var parsedData = JSON.parse(storedData);
          
          // Retrieve existing transactions from localStorage or initialize an empty array
          var transactions = JSON.parse(localStorage.getItem("transactions")) ;

          var tableBody = document.querySelector("#data-table tbody");

    // Clear table body
    tableBody.innerHTML = "";

    // Loop through transactions array and create rows
//     transactions.forEach(function(transaction) {
//         var row = document.createElement("tr");
          
//         // Create cells for each property in the transaction object
//         Object.values(transaction).forEach(function(value) {
//             var cell = document.createElement("td");
//             cell.textContent = value;
//             row.appendChild(cell);
//         });

//         tableBody.appendChild(row);
//     });
          transactions.forEach(function(transaction, index) {
                    var row = document.createElement("tr");
          
                    Object.values(transaction).forEach(function(value) {
                    var cell = document.createElement("td");
                    cell.textContent = value;
                    row.appendChild(cell);
                    });
          
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

      
          
      
          // Get the table body element
          // var tableBody = document.querySelector("#data-table tbody");
      
          // Create a row for the data
          // var row = document.createElement("tr");
      
          // Create cells for each property in the data object
          // var amountCell = document.createElement("td");
          // amountCell.textContent = parsedData.amount;
          // row.appendChild(amountCell);
      
          // var dateCell = document.createElement("td");
          // dateCell.textContent = parsedData.date;
          // row.appendChild(dateCell);
      
          // var repeatCell = document.createElement("td");
          // repeatCell.textContent = parsedData.repeat;
          // row.appendChild(repeatCell);
      
          // var categoryCell = document.createElement("td");
          // categoryCell.textContent = parsedData.category;
          // row.appendChild(categoryCell);
      
          // var commentCell = document.createElement("td");
          // commentCell.textContent = parsedData.comment;
          // row.appendChild(commentCell);
      
          // Add the row to the table body
          // tableBody.appendChild(row);
 });

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
      