# canvaspixels
I've seen a lot of examples of CSS filters applied to getUserMedia video, but these examples are manipulating pixels directly using web workers.

### Adding new workers 
This could serve as useful boilerplate for testing pixel processing algorithms and effects. 

1. Copy and rename existing worker (invert.js is a good example)
2. Add an li element to the controls ul in index.html to select it. Set the data-worker attribute to the worker filename.
3. That's it.

### Its not working?
>Uncaught Error: SecurityError: DOM Exception 18 
Chrome won't let you open the camera feed if you open index.html using the file:// URI scheme (eg, double clicking it). If you run it from a local server it should work OK. 

### License
MIT