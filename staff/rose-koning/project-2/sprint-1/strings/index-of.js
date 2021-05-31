function indexOf(text, pattern) {
    count=0;
    detection=false;
    for (var i = 0; i<text.length ; i++) {
        if(text.charAt(i)===pattern.charAt(count)) {
            count ++;
            detection=true;
        }
        if(detection = true && count===pattern.length){
            var print =((i-count)+1);
            console.log(print);
            return print

        }
            
        }
        
    }

  indexOf("is this working?", "work");