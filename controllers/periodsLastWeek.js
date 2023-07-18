   
    var transactions = JSON.parse(localStorage.getItem("transactions")) ;
    var currentDate = new Date();
    var oneWeekAgo = new Date();
      oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);
     

          var tableBody = document.querySelector("#data-table-lastWeek tbody");

          // Clear table body
          tableBody.innerHTML = "";
        

          // Loop through transactions array and create rows

          transactions.forEach(function(transaction, index) {
                    var row = document.createElement("tr");
                    var dateObject = new Date(transaction.date);
                    if (dateObject >= oneWeekAgo && dateObject <= currentDate){
                              Object.values(transaction).forEach(function(value) {
                              var cell = document.createElement("td");
                              cell.textContent = value;
                              row.appendChild(cell);
                              });
                    }
                   
                    

                   
                    tableBody.appendChild(row);
          });