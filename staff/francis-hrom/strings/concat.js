// https://pluscoders.com/javascript/strings/challenges/concat/
function concat() {
    let str = "";
    for (var i=0; i < arguments.length; i++) {
      str += arguments[i];
    }
    return str;
  }