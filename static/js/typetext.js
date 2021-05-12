var TypeTxt = function(elem, toTypewrite) {
  this.toTypewrite = toTypewrite;
  this.elem = elem;
  this.txt = '';
  this.tick();
};
  
TypeTxt.prototype.tick = function() {

  // Set txt to substring of full string
  this.txt = this.toTypewrite.substring(0, this.txt.length + 1);

  // Set text in span
  this.elem.textContent = this.txt;

  var that = this;

  // Random delay to simulate real typing (in ms)
  var delta = 300 - Math.random() * 100;

  // End once full text has been written
  if(this.txt === this.toTypewrite) {
    return;
  }

// Call tick after delta time has passed
setTimeout(function() {
    that.tick();
  }, delta);
};
  
window.onload = function() {
  setTimeout(function() {
    // Get every element to animate and loop through them
    var elements = document.getElementsByClassName('txt-typewriter');
    for (var i=0; i<elements.length; i++) {

      // Get text to animate
      var toTypewrite = elements[i].getAttribute('data-typewrite');

      if (toTypewrite) {
        new TypeTxt(elements[i], toTypewrite);
      }
    }
  }, 1000)
};