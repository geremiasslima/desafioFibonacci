let fibonacciArrays = new Array();

  function fibonacci(picture, text) {
    var number = 0;
    var nextNumber = 1;
    var sequence;

    while (number <= text.value) {
      picture.value += number + ", ";
      sequence = nextNumber;
      nextNumber = nextNumber + number;
      number = sequence;
      fibonacciArrays.push(number);       

    }
    
    function checkNumberIsFibonacci (value) {
      if (value == text.value) 
      return true;    
    }
    let fibonacciArray = fibonacciArrays.filter(checkNumberIsFibonacci);
  
    if (fibonacciArray.length !== 0) {
      document.getElementById("output").innerHTML="Esse número é Fibonacci"
    }else {
      document.getElementById("output").innerHTML="Esse número não é Fibonacci"
    }

    console.log(fibonacciArray)
      
    };
  