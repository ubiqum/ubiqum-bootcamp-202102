function lowestNumber(){
    debugger
     var lowest = (numbers[0]);
     
         for(i=0; i<numbers.length ; i++){
     var currentNumber = (numbers[i]);
             if(currentNumber<lowest){
      lowest= currentNumber;
         }}
         console.log(lowest);
     return lowest;
    
    
     }
     
     var numbers= [3,6,67,6,23,11,100,8,93,0,17,24,7,1,33,45,28,33,23,12,99,100];
     
     lowestNumber(numbers);