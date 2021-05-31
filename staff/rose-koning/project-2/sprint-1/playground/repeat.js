function repeated (){
    debugger
    for(let j=0; j<numbers.length; j++){
    
        for( i=j; i<numbers.length ; i++){
            var currentNumber = numbers[j];
            var doubleNumber = numbers[(i+1)];
        if (currentNumber=== doubleNumber){
            console.log(currentNumber);
            break;
        }
        }
       }
      
        }
    var numbers = [3,6,67,6,23,11,100,8,93,0,17,24,7,1,33,45,28,33,23,12,99,100]; 
    
    repeated(numbers);