function roseray() {
    for (var i = 0; i < arguments.length; i++)
        this[i] = arguments[i]

    this.length = arguments.length
}

roseray.prototype.push = function (...newElement){
    debugger
      for(var j=0; j<newElement.length; j++){
          add= this.length+j;
    this[add]=newElement[j];
    }
  this.length= add+1;

    return this;
}

a= new roseray("i", "like","cookies");
a.push("and","cake");