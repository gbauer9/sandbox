var TypeTxt = function(elem, toTypewrite, period) {
  this.toTypewrite = toTypewrite;
  this.elem = elem;
  this.period = parseInt(period, 10) || 2000;
  this.txt = '';
  this.tick();
};
  
TypeTxt.prototype.tick = function() {

  // Set txt to substring of full string
  this.txt = this.toTypewrite.substring(0, this.txt.length + 1);

  this.elem.innerHTML = '<span class="wrap">'+this.txt+'</span>';

  var that = this;
  var delta = 300 - Math.random() * 100;

  if(this.txt === this.toTypewrite) {
    return;
  }

setTimeout(function() {
    that.tick();
  }, delta);
};
  
window.onload = function() {
  setTimeout(function() {
    var elements = document.getElementsByClassName('txt-typewriter');
    for (var i=0; i<elements.length; i++) {
      var toTypewrite = elements[i].getAttribute('data-typewrite');
      var period = elements[i].getAttribute('data-period');
      if (toTypewrite) {
        new TypeTxt(elements[i], toTypewrite, period);
      }
    }
  }, 1000)
};