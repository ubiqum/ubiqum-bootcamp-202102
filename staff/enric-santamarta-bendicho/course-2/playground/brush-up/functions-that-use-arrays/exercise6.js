debugger

function repeat(array) {
   
    for (i = 0; i <= array.length; i++) {
        var c = 0;
      
        for (o = 0; o <= array.length; o++) {
            if (array[i] == array[o]) { 
                c = c+1
            }
        }
        if (с >= 2)
        { console.log(array[i])} 
    }

}

repeat([3, 4, 5, 6, 4, 3, 7, 89, 5])