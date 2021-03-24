function stringToArray(text) {
    let array = [];
    for (var i=0; i < text.length; i++) {
      array.splice(array.length,0,text[i]);
    }  
    return array;
  } 