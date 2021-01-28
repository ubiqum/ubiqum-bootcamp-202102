function search(text,target){
    console.log(text.indexOf(target));
}

search("hello world this is rose", "rose");
search("This is a longer test to see if it is really working","if");
search("hello world this is rose","missing");