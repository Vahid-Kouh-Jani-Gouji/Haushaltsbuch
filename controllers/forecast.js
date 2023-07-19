var lastWeekSumValueForecast = JSON.parse(localStorage.getItem("lastWeekSumValue")) ;
var lastWeekSumValueForecastFloat = parseFloat(lastWeekSumValueForecast); 
// console.log(typeof lastWeekSumValueForecastFloat, lastWeekSumValueForecastFloat);

var lastWeek = new Date();
lastWeek.setDate(lastWeek.getDate() - 7);

// Select the table body
var tableBody = document.querySelector('#nextWeekForecastTable tbody');

// Current value 
var currentData =[ {date: "your expense for last Week : ", amount: lastWeekSumValueForecastFloat }];

currentData.forEach(function (data) {
          var row = document.createElement('tr');
        
          // Create cells for each property in the data object
          Object.values(data).forEach(function (value) {
            var cell = document.createElement('td');
            cell.textContent = value;
            row.appendChild(cell);
          });
        
          tableBody.appendChild(row);
        
          
        });// End foreach for current Data


        
var oneWeekAfter = new Date();
oneWeekAfter.setDate(oneWeekAfter.getDate() + 7);
var formattedDate = oneWeekAfter.toLocaleDateString("en-US", {
day: "2-digit",
month: "2-digit",
year: "numeric"
});


// Forecast data 
var forecastData = [
          { date: "Forecast in next Week: "+`${formattedDate}`, amount: lastWeekSumValueForecastFloat+1000   },
          ];  
          

// Generate rows for forecast data
forecastData.forEach(function (data) {
          var row = document.createElement('tr');
        
          // Create cells for each property in the data object
          Object.values(data).forEach(function (value) {
            var cell = document.createElement('td');
            cell.textContent = value;
            row.appendChild(cell);
          });
        
          tableBody.appendChild(row);
          var isCurrentValue = true;
          if (isCurrentValue) {
                    row.classList.add('current-value');
                  }
        });// End foreach for forecast


        
        // Highlight the row with the current value
//         var rows = tableBody.querySelectorAll('tr');
//         rows.forEach(function (row) {
//           var cells = row.querySelectorAll('td');
//           var isCurrentValue = true;
//           // Object.entries(currentValue).forEach(function ([key, value], index) {
//           //   if (cells[index].textContent !== String(value)) {
//           //     isCurrentValue = false;
//           //   }
//           // });
        
//           if (isCurrentValue) {
//             row.classList.add('current-value');
//           }

//        });// End foreach for forecast

// var amountValue = parseFloat(transaction.amount); // Parse amount as a number
//                     // Check if value is positive or negative and apply corresponding class
                    
//                     if (amountValue > 0) {
//                               row.classList.add('positive-row');
//                               } else if (amountValue < 0) {
//                               row.classList.add('negative-row');
//                               }

var sumRow = document.createElement("tr");
          // Create an empty cell for the label
          var labelCell = document.createElement("td");
          labelCell.textContent = "Trend your expense in next Week :";
          sumRow.appendChild(labelCell);

          // Create a cell for the sum value
          var sumCell = document.createElement("td");
          var trend= (forecastData[0].amount)-(currentData[0].amount)
          sumCell.textContent = trend;
          sumRow.appendChild(sumCell);
          // Append the sum row to the table body
          tableBody.appendChild(sumRow);
          if (trend < 0) {
                    sumRow.classList.add('positive-row');
                    } else if (trend > 0) {
                              sumRow.classList.add('negative-row');
          }


        