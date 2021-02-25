function roseray() {
    for (var i = 0; i < arguments.length; i++)
        this[i] = arguments[i]

    this.length = arguments.length
}

roseray.prototype.pop = function (){
    for( var i = 0 ; i< this.length; i++){
        if (i ===this.length -1){
            this=== this - (this.length -1);
        }
    }
}
var plants = ['broccoli', 'cauliflower', 'cabbage', 'kale', 'tomato'];
plants.pop();

