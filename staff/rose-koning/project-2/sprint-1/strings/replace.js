function replace(text,pattern,replacement){
    var detection= false;
    var count = 0;
    var tempArray=[];
    for (var i = 0; i<text.length ; i++) {
        if(text.charAt(i)===pattern.charAt(count)) {
            count ++;
            detection=true;
        }
        if(detection = true && count===pattern.length){  
            var firstPart =text.slice(0, (i-count));
            tempArray.push(firstPart);
            var secondPart = text.slice(i+1);
            tempArray.push(replacement);
            tempArray.push(secondPart);
            break;
} 
    }
    
    console.log(tempArray.join(" "));

}
replace("bunnies like carrots", "carrots", "dandilions");