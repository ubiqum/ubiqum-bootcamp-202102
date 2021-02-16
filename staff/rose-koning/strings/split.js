function split(text, pattern){

var tempArray;
for( var i=0; i<text.length ; i++){
    var splitPoint = text.indexOf(pattern);
    if (tempArray.length ===0){
        tempArray.push(text.substring(0,splitpoint))
    }
    if(splitPoint!==" "){
        tempArray.push(text.substring(i,splitPoint));
    }
}

}
split("hello world"," ");
