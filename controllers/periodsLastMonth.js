   
    var transactions = JSON.parse(localStorage.getItem("transactions")) ;
    var currentDate = new Date();
    var oneMonthAgo = new Date();
      oneMonthAgo.setMonth(oneMonthAgo.getMonth() - 1);
      
     

          var tableBody = document.querySelector("#data-table-lastMonth tbody");

          // Clear table body
          tableBody.innerHTML = "";
        

          // Loop through transactions array and create rows

          transactions.forEach(function(transaction, index) {
                    var row = document.createElement("tr");
                    var dateObject = new Date(transaction.date);
                    if (dateObject >= oneMonthAgo && dateObject <= currentDate){
                              Object.values(transaction).forEach(function(value) {
                              var cell = document.createElement("td");
                              cell.textContent = value;
                              row.appendChild(cell);
                              });
                    }
                   
                    

                   
                    tableBody.appendChild(row);
          });