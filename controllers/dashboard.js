



document.addEventListener("DOMContentLoaded", function() {
          
          // Retrieve existing transactions from localStorage or initialize an empty array
          var wizardData = JSON.parse(localStorage.getItem("wizardData")) ;
          
          var transactionSum = JSON.parse(localStorage.getItem("transactionSum")) ;
          var transactionValue = parseFloat(transactionSum);
         
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
       
        localStorage.setItem("saldo", JSON.stringify(sum));
        tableBody.appendChild(row);
    });
    sum += transactionValue ;
    // Create a new row for the sum
    var sumRow = document.createElement("tr");

    // Create an empty cell for the label
    var labelCell = document.createElement("td");
    labelCell.textContent = "Total Sum:";
    sumRow.appendChild(labelCell);

    // Create a cell for the sum value
    var sumCell = document.createElement("td");
    if (!isNaN(sum)) {
        var parsedSum = parseFloat(sum);
        sumCell.textContent = parsedSum;
      } else {
        sumCell.textContent = "Invalid sum";
      }
      
    
    sumRow.appendChild(sumCell);

    // Append the sum row to the table body
    tableBody.appendChild(sumRow);

    // if(sum <= 200) {
    //     var warningInfo="Your Balance is below than 200 EUR";
    //     alert(warningInfo);
    //     }  
});



  
 
  
      
      