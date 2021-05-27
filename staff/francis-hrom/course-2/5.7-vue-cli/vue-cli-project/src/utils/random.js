if (typeof Array.prototype.random === "undefined")
  Array.prototype.random = function () {
    const index = Math.floor(Math.random() * this.length);

    return this[index];
  };
