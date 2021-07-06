
function longestWord(string) {
    var string2 = ''
    var array = []
  
  


    for (var i = 0; i <= string.length; i++) {
        if (string[i] ==' ' || i==string.length){
            array.push(string2)
            string2 = ''
            i++}


            string2 = string2 + string[i]
    }
            string2 =''
    for (var i = 0; i < array.length; i++) {
       

        if (array[i].length > string2.length) {
            string2 = array[i]
        }
    }

    console.log(string2)

}
longestWord('Web Development Tutorial')