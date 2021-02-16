function indexOf(text, pattern) {
  for (i = 0; (text.charAt(i))!==null; i++) {
    if((text.charAt(i))===pattern){
        console.log(i)
    }
  }
}
indexOf("is this working?", "t");
