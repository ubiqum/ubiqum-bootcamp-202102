function roseray() {
    for (var i = 0; i < arguments.length; i++)
        this[i] = arguments[i]

    this.length = arguments.length
}

roseray.prototype.indexOf = function (pattern){
for (var i =0; i<this.length ; i++){
    if(this[i]===pattern){
return i;
    }
    else{
        return -1;
    }
}
}
var animals = new roseray("bunnies","butterflies","geckos", "giraffes")
animals.indexOf("butter");