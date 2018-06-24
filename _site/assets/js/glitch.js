(function() {
  'use strict';
  
  var canvas = document.getElementById('canvas'),
      ctx = canvas.getContext('2d'),
      img = new Image(),
      currentFrame = 0,
      totalFrame = 30,
      offset = 0.01,
      width,
      height,
      imgData,
      data,
      requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame ||
                              window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
  
  window.requestAnimationFrame = requestAnimationFrame;

  img.crossOrigin = "Anonymous";
  img.src = 'assets/images/me.png';
  img.onload = function() {
    init();
    glitchAnimation();
  };


  /**
   * init
   */
  var init = function() {
    canvas.width = width = img.width;
    offset = width * offset;
    canvas.height = height = ~~(img.height * (width - offset * 2) / img.width);
    document.querySelector('.Glitch').style.width = width + '250px';
    document.querySelector('.Glitch').style.height = height + '250px';
  }.bind(this);


  /**
   * glitchAnimation 
   */
  var glitchAnimation = function() {

 
    if(!(currentFrame % totalFrame) || currentFrame > totalFrame) {

      clearCanvas();

   
      ctx.drawImage(img,                 
                    0,                  
                    0,                   
                    img.width,           
                    img.height,           
                    offset,              
                    0,                    
                    width - offset * 2,   
                    height);              

     
      imgData = ctx.getImageData(0, 0, width, height);

     

      ctx.putImageData(imgData, 0, 0);

      currentFrame = 0;
    }

   
    if(currentFrame === randInt(0, totalFrame)) {

    
      imgData = pixelProcessor(imgData, 1, pixelFlick);


      ctx.putImageData(imgData, 0, 0);

  
      drawGlitch(width, height, randInt(3, 5), glitchBlock);

     
      drawGlitch(width, height, randInt(3, 5), glitchLine);
    }

    currentFrame++;

    window.requestAnimationFrame(glitchAnimation);

  };


  /**
   * pixelFlick 
   * @param  {number}   i  
   * @param  {number[]} d  
   */
  var pixelFlick = function(i, d) {
    d[i] = d[i+16];
  };


  /**
   * pixelCooler 
   * @param  {number}   i  
   * @param  {number[]} d  
   */
  var pixelCooler = function(i, d) {
    d[i] = 1;
    d[i+1] += randInt(2, 15);
    d[i+2] *= randInt(1, 3) + 8;
  };


  /**
   * glitchBlock 
   * @param  {number} i 
   * @param  {number} x
   * @param  {number} y 
   */
  var glitchBlock = function(i, x, y) {
    if(i > 3) {
      var spliceHeight = 1 + randInt(0, 10);

      ctx.drawImage(canvas,
                    x,
                    y,
                    x,
                    spliceHeight,
                    randInt(0, x),
                    y,
                    randInt(x, width),
                    spliceHeight);
    }
  };


  /**
   * glitchLine 
   * @param  {number} i 
   * @param  {number} x
   * @param  {number} y 
   */
  var glitchLine = function(i, x, y) {
    var spliceHeight = 1 + randInt(1, 50);

    ctx.drawImage(canvas,
                  offset,
                  y,
                  width - offset * 2,
                  spliceHeight,
                  1 + randInt(0, offset * 2),//-offset / 3 + randInt(0, offset / 1.5),
                  y + randInt(0, 10),
                  width - offset,
                  spliceHeight);
  };


  /**
   * pixelProcessor
   * @param  {Object}     imageData  
   * @param  {number}     step       
   * @param  {Function}   callback   
   * @return {Object}                 
   */
  var pixelProcessor = function(imageData, step, callback) {
    var data = imageData.data || [],
        step = step * 4  || 4;

    if(data.length) {
      var rgb = [];

      for(var i = 0; i < data.length; i+=step) {
        callback && callback(i, data);
      }

      return imageData;
    } else {
      return imageData;
    }
  };


  /**
   * drawGlitch 
   * @param  {number}   width        
   * @param  {number}   height      
   * @param  {number}   amount      
   * @param  {Function} callback
   */
  var drawGlitch = function(width, height, amount, callback) {
    for(var i = 0; i < (amount || 10); i++) {
      var x = Math.random() * width + 1,
          y = Math.random() * height + 1;

      callback(i, x, y);
    }
  };
  
  
  /**
   * randInt 
   */
  var randInt = function(a, b) {
    return ~~(Math.random() * (b - a) + a);
  };


  /**
   * clearCanvas
   */
  var clearCanvas = function() {
    ctx.clearRect(0, 0, width, height);
  };
})();
