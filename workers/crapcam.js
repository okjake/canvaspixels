onmessage = function(event) {

  var pixels = event.data.data,
      numPixels = event.data.width * event.data.height,
      block_size = 4,
      rowLength = event.data.width;
  
  for (var i=0; i<event.data.height; i+=block_size) {
    for (var j=0; j<event.data.width; j+=block_size) {
      for (var k=0; k<block_size; k++) {
        for (var l=0; l<block_size; l++) {
          pixels[(i+k)*4*rowLength + j*4 + l*4]     = pixels[i*4*rowLength + j*4];
          pixels[(i+k)*4*rowLength + j*4 + l*4 + 1] = pixels[i*4*rowLength + j*4 + 1];
          pixels[(i+k)*4*rowLength + j*4 + l*4 + 2] = pixels[i*4*rowLength + j*4 + 2];
        }
      }
    }
  }
      
  postMessage(event.data);

}