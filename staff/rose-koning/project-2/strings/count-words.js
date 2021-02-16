function countWords(text){
    var spaceCount = (text.split(" ").length - 1);
    var wordCount = spaceCount+1;
    console.log(wordCount);
}
countWords("is this working?");
countWords("yes this is really working look at this!");