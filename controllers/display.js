export function displayTransactions() {
          var transactions = JSON.parse(localStorage.getItem("transactions")) || [];
          var tableBody = document.querySelector("#data-table tbody");
      
          // Clear table body
          tableBody.innerHTML = "";
      
          // Loop through transactions array and create rows
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
}
      

