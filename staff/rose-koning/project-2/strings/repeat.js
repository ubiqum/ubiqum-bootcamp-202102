function repeat(text,x){
    var print=[];
    for(i=x; i!==0;i--){
       print.push(text);
    }
  console.log(print.join(''))
}

repeat("Is this working?",2);
repeat("yes it is!",5);