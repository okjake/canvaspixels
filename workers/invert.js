onmessage = function(event) {

  var pixels = event.data.data,
      numPixels = event.data.width * event.data.height;
           
  for (var i = 0; i < numPixels; i++) {
      pixels[i*4]   = 255-pixels[i*4];
      pixels[i*4+1] = 255-pixels[i*4+1]; 
      pixels[i*4+2] = 255-pixels[i*4+2];
  }  
  
  postMessage(event.data);

}