window.onload = (function(){    
    
   /* 
    * Setup
    */    
    var canvas       = document.getElementById('display'), 
        ctx          = canvas.getContext('2d'),
        hiddenCanvas = document.getElementById('hiddenCanvas'),
        hiddenCtx    = hiddenCanvas.getContext('2d'),
        video        = document.querySelector('video'),
        worker       = new Worker( 'workers/unprocessed.js'); 
    
   /*
    * Worker handlers
    */        
    var sendFrame = function() {
         hiddenCtx.drawImage(video, 0, 0);
         var imageData = hiddenCtx.getImageData(0, 0, video.clientWidth, video.clientHeight);    
         worker.postMessage(imageData);
    }
      
    var receiveFrame = worker.onmessage = function(event) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.putImageData(event.data, 0, 0);
        window.setTimeout(sendFrame, 1);
    }
    
   
   /*
    * Video handler - helps us to get everything the right size
    */ 
    
    document.getElementsByTagName('video')[0].addEventListener('loadedmetadata', function(e){
      canvas.width  = hiddenCanvas.width  = document.getElementsByTagName('video')[0].clientWidth;
      canvas.height = hiddenCanvas.height = document.getElementsByTagName('video')[0].clientHeight;
    }, false);
                
   /* 
    * Trigger video capture
    */
    navigator.getUserMedia_ = (navigator.getUserMedia || 
                               navigator.webkitGetUserMedia || 
                               navigator.mozGetUserMedia || 
                               navigator.msGetUserMedia);
                               
    if (!navigator.getUserMedia_) { 
        alert('getUserMedia not supported') 
    } 
    else {
        navigator.getUserMedia_({ video: true }, function(stream) {  
            video.src = window.URL.createObjectURL(stream);
            sendFrame();
        }, 
        function(e){ 
          alert( 'Something went wrong' ) 
        });
    }
          
   /* 
    * Set up page controls
    */
    var controls = document
                     .getElementById('controls')
                     .getElementsByTagName('a');
        
    for (var i=0; i<controls.length; i++) {
        controls[i].addEventListener('click', function(e) {
            document.getElementById("active").removeAttribute("id");
            this.setAttribute("id", "active");
            delete worker;
            worker = new Worker('workers/'+this.getAttribute('data-worker')+'.js');
            worker.onmessage = receiveFrame;
            e.preventDefault();
        }, false); 
    } 
})