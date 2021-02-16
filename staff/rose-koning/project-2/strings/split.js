function split(text, pattern){
    debugger
    var tempArray = [];
    tempArray.push(text.substring(0,text.indexOf(pattern)));
    var addCurrentString =(text.substring((text.indexOf(pattern))+1));
    
    for( var i=0; i<addCurrentString.length ; i++){
        if(i=== addCurrentString.indexOf(pattern)){
          
            tempArray.push(addCurrentString.substring(0,addCurrentString.indexOf(pattern)));
            var updatedString = (addCurrentString.substring(addCurrentString.indexOf(pattern)+1))
            tempArray.push(updatedString);
            addCurrentString=updatedString;
        }
        }
        console.log(tempArray)
    }
    
    
    split("hello world","o");
