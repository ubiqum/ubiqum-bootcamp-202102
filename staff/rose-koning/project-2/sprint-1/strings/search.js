function search(text,target){
    var lowTarget =(target.toLowerCase());
    var lowText =(text.toLowerCase());
    console.log(lowText.indexOf(lowTarget));
}

search("hello world this is rose", "rose");
search("This is a longer test to see if it is really working","if");
search("hello world this is rose","WORLD");