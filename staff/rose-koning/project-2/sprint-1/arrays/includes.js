function roseray() {
    for (var i = 0; i < arguments.length; i++)
        this[i] = arguments[i]

    this.length = arguments.length
}

roseray.prototype.includes = function (pattern){
    for (var i = 0 ; i< this.length; i++){
        if(this[i]=== pattern){return true;}
        else{return false;}
    }
    
}

var pets = new roseray ("fish","dog","cats","bird");
pets.includes("fish");