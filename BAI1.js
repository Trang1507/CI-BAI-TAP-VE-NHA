function createTable(){
    var table = document.getElementById("table");
    let column=document.getElementById("column").value
    let row1=document.getElementById("row").value
    for (let i=0;i<=row1-1;i=i+1){
        var row = table.insertRow(0);
        for (let m=0;m<=column-1;m=m+1){
        var cell = row.insertCell(m);
        
        cell.innerHTML = "<input type=text>";
        
        }
    }
  }

