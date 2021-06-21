function isMissedShipShot(cell, shotsPerBoat) {
    var keys = Object.keys(shotsPerBoat);

       if(keys.length!= 0 && shotsPerBoat["missed shots"].includes(cell)){
           return true;
       }
    }