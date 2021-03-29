// https://pluscoders.com/javascript/strings/challenges/split/
function split(text, pattern) {
  var arr = [];
  var pos = 0;

  for (var i=0; i < text.length; i++) {
      if (text.substring(i,i+pattern.length) == pattern) {
          arr.push(text.substring(pos,i));
          pos = i + pattern.length;
      }
  }    
  
  arr.push(text.substring(pos,text.length));
  return arr;
} 
