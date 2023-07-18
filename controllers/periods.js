   
    var transactions = JSON.parse(localStorage.getItem("transactions")) ;

    var startOfDay = new Date();
          startOfDay.setHours(0, 0, 0, 0);
          var endOfDay = new Date();
          endOfDay.setHours(23, 59, 59, 999);
          // return transactionDate >= startOfDay && transactionDate <= endOfDay;

          var tableBody = document.querySelector("#data-table-today tbody");

          // Clear table body
          tableBody.innerHTML = "";
        

          // Loop through transactions array and create rows

          transactions.forEach(function(transaction, index) {
                    var row = document.createElement("tr");
                    var dateObject = new Date(transaction.date);
                    if (dateObject >= startOfDay && dateObject <= endOfDay){
                              Object.values(transaction).forEach(function(value) {
                              var cell = document.createElement("td");
                              cell.textContent = value;
                              row.appendChild(cell);
                              });
                    }
                   
                    

                   
                    tableBody.appendChild(row);
          });