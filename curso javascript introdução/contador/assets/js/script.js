var add = document.getElementById('adicionar');
var sub = document.getElementById('subtrair');
var currentNumberHtml = document.getElementById('currentNumber');
var currentNumber = 0;

add.addEventListener("click", function(){
    alterNumber('adicionar');
  });
sub.addEventListener("click", function(){
    alterNumber('subtrair');
  }); 

function alterNumber(op) {
    
    if(op === 'adicionar'){
      if(currentNumber >= 10) {
        add.disabled = true;
        return
      }
      sub.disabled = false;
      currentNumber ++;
    }

    if(op === 'subtrair'){
      if(currentNumber <= -10) {
        sub.disabled = true;
        return
      }
      add.disabled = false;
      currentNumber --;
    }

    currentNumberHtml.style.color = currentNumber < 0 ? 'red' : 'green';
    
    currentNumberHtml.innerText = currentNumber;

}