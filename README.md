# canvaspixels

![canvaspixels example image](http://38.media.tumblr.com/93d17094eb96fd330bd162507722ade9/tumblr_ncm2vkqMHE1rnnjfzo1_500.jpg)

Experiments and examples manipulating getUserMedia video feed pixels, using web workers.

[Demo](http://okjake.github.com/canvaspixels)

## Adding new workers 
Can be used as boilerplate code for testing pixel processing algorithms and effects. 

1. Copy and rename existing worker (invert.js is a good example)
2. Add an li element to the controls ul in index.html to select it. Set the data-worker attribute to the worker filename.
3. That's it.

## Not working?
>Uncaught Error: SecurityError: DOM Exception 18 

Chrome won't let you open the camera feed if you open index.html using the file:// URI scheme (eg, double clicking it). If you run it from a local server it should work OK. 

## License
MIT