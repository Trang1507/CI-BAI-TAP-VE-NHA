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
 
  let max
  let min
  let array=[];
  function exportNumber(){
  
      let number_a = (document.getElementById("numbera").value)
      let number_b = (document.getElementById("numberb").value)

      if (number_a>number_b){
        max=parseInt(number_a)
        min=parseInt(number_b)
      }
      else {
        max=parseInt(number_b)
        min=parseInt(number_a)
      }
      
      for (let n = (min+1);n<max; n=n+1){
      
        let result = 0;
          for (let l=2;l<n;l=l+1){
            if (n % l === 0)
            {
            result += 1;
            }
          }
          if ((result == 0) && (n>=2)) {
            array.push(n)
          
          }
        }
        
     document.getElementById("body").innerHTML += array
  }
