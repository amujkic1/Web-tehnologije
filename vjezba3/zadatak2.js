/* Wrapping  this code in an event listener ensures that
the JavaScript code is executed after the DOM has been fully loaded*/ 
document.addEventListener('DOMContentLoaded', function() {

    var rows;
    var cols;

    function createTable(rows, cols) {
      
    var table = document.createElement('table');

    table.setAttribute('border', '1');

    for (let i = 0; i <= rows; i++) {

        var tRow = document.createElement('tr');

        for (let j = 0; j <= cols; j++) {

        var tData = document.createElement('td');

        if(i==0 && j==0)
            tData.textContent = "X";
        else if(i==0 && j!=0)
            tData.textContent = j;
        else if(i!=0 && j==0)
            tData.textContent = i;
        else
            tData.textContent = i*j;

        tRow.appendChild(tData);
        }
        table.appendChild(tRow);
    }

    document.body.appendChild(table);
        
    }

    createTable(10, 10);
});
