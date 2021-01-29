function split(text, pattern) {
    for(i=0; i<text.length;i++){
        if(text[i] === pattern){
            text.replace(i,',');
            var print=[];
            print.push(text);
        }
        console.log(print);
        }

  /*var print = [];
  print.push(text.substr(0,(cutArray-1)));
  print.push(text.substr(...cutArray,...cutArray))
  console.log(print);*/
}
split("lots of words", "o");

