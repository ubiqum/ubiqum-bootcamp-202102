function stringToArray(text) {
    let array = [];
    for (var i=0; i < text.length; i++) {
      array = array.concat(text[i]);
    }  
    return array;
  } 