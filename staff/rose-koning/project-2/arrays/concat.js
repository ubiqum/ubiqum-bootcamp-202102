function roseray() {
    for (var i = 0; i < arguments.length; i++)
        this[i] = arguments[i]

    this.length = arguments.length
}

roseray.prototype.concat = function (roseray2){
    debugger
newRay= new roseray;
for(var i=0; i<this.length; i++){
  newRay[i]=this[i];
}
for(var j=0; j<roseray2.length; j++){
    var add = (roseray2.length+j+1);
    newRay[add]=roseray2[j];
}
newRay.length= j+i;
return newRay;
}
a = new roseray ("a","B","C");
b = new roseray ("e","f","g");
a.concat(b);
