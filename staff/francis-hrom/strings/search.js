// https://pluscoders.com/javascript/strings/challenges/search/
function search(text, pattern) {
  var regexp = new RegExp(pattern);
  var match = regexp.exec(text);
  if (match) {
      return match.index;
  } else {
    return -1;
    }
}

/* solution with String.prototype.search()
function search(text, pattern) {
  return text.search(pattern);
}
*/
