

function repeat(array) {
    var array3 = [];

    for (i = 0; i <= array.length; i++) {
        var c = 0;

        for (o = 0; o <= array.length; o++) {
            if (array[i] == array[o]) {
                c = c + 1
            }
        }
        if (c >= 2) {
            if (array3.includes(array[i]))
            { continue;         }
       // TODO mirar array prototype includes   
             else array3.push(array[i])
        }
    }

    console.log(array3)
}

repeat([3, 4, 5, 6, 4, 3, 7, 89, 5, 9, 9, 10, 23, 56, 56])

