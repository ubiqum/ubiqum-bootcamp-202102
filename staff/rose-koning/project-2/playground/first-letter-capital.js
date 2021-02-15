function firstCapital(x){
    debugger
    var firstLetter = (x.charAt(0));
    var capFirstLetter =(firstLetter.toUpperCase());
    var stringLeft = (x.slice(1));
    

    for(var i=0; i<x.length ; i++){
        if(i===" "){
            var firstLetterWord = (x.charAt(i));
            var capLetter =(firstLetterWord.toUpperCase());
            var restSentence =(x.slice((i+1)));
            var results = capLetter+restSentence;
    
        }
        var print = stringLeft+results;
    }
}
x = "prince of persia";
firstCapital(x);