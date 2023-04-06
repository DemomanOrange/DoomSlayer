for (i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
  
  var juice = ['milk', 'beer', 'beer', 'milk', 'milk']
  var beer = 'beer'
  var milk = 'milk'
  var i = 0
  while (i < juice.length){
    if(juice[i] === beer) console.log('bad(beer)', i);
    if(juice[i] === milk) console.log('good(milk)', i); 
    i++ 
}