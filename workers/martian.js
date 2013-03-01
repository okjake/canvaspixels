onmessage = function(event) {

  var pixels = event.data.data,
      numPixels = event.data.width * event.data.height;
           
  for (var i = 0; i < numPixels; i++) {
      var tmp = pixels[i*4+2];
      pixels[i*4+2] = pixels[i*4+1];
      pixels[i*4+1] = pixels[i*4];
      pixels[i*4] = tmp;
  }  
  
  postMessage(event.data);

}