onmessage = function(event) {

  var pixels = event.data.data,
      numPixels = event.data.width * event.data.height;
           
  for (var i = 0; i < numPixels; i++) {
      var rand = (Math.floor(Math.random() * 20) - 10),
          bHoriz = (Math.random() >= 0.5), // bool
          rowLength = event.data.width;
                
      pixels[i*4]   = bHoriz ? pixels[(i+rand)*4] : pixels[(i+(rand*rowLength))*4];
      pixels[i*4+1] = bHoriz ? pixels[(i+rand)*4] : pixels[(i+(rand*rowLength))*4 + 1];
      pixels[i*4+2] = bHoriz ? pixels[(i+rand)*4] : pixels[(i+(rand*rowLength))*4 + 2];  
  }  
  
  postMessage(event.data);

}