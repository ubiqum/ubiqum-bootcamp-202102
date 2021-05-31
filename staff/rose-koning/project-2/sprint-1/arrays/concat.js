function roseray() {
    for (var i = 0; i < arguments.length; i++)
        this[i] = arguments[i]

    this.length = arguments.length
}

roseray.prototype.concat = function (roseray2){
debugger
for(var j=0; j<roseray2.length; j++){
    add= this.length+j;
this[add]=roseray2[j];
}
this.length= add+1;
return this;
}
a = new roseray ("a","B","C");
b = new roseray ("e","f","g");
a.concat(b);
