function longestWord(string){
    var tempArray = string.split(" ");
    var longestWord = tempArray[0]
    for(i=0; i<tempArray.length ; i++){
        var currentWord = (tempArray[i]);
                if(currentWord.length>longestWord.length){
         longestWord= currentWord;
            }}
            console.log(longestWord);
}

var x = "Web Development Tutorial";

longestWord(x);