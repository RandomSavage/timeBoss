"use strict";

var fs = require('fs'); //create a folder

/* fs.mkdir('tut1', (err) => {
  if(err) {
    console.log(err) 
  } else {
    console.log('Successfully created a Folder.')
  }
}) */
//Delete a Folder

/* fs.rmdir('tut1', (err) => {
  if(err) {
    console.log(err) 
  } else {
    console.log('Successfully deleted a Folder.')
  }
}) */
//Create a folder with a file that contains content within it.

/*  fs.mkdir('tutX', (err) => {
  if(err) {
    console.log(err) 
  } else {
    fs.writeFile('./tutX/example.txt', '123', (err) => {
      if(err) {
        console.log(err)
      }else {
        console.log('Successfully Created a file')
      }
    })
  }
}) */
//Delete a folder with a file in it. Must delete file first then folder in callback

/* fs.unlink('./tutX/example.txt', (err) => {
  if(err) {
    console.log(err)
  }else {
    fs.rmdir('./tutX', (err) => {
      if(err) {
        console.log(err)
      }else {
        console.log("Successfully Deleted the Folder")
      }
    })
  }
}) */
//Delete folders with multiple files
//files will be an array with name of the file


fs.readdir('example', function (err, files) {
  if (err) {
    console.log(err);
  } else {
    // console.log(files) will show the array of file names inside
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      var _loop = function _loop() {
        var file = _step.value;
        fs.unlink("./example/".concat(file), function (err) {
          if (err) {
            console.log(err);
          } else {
            console.log("Successfully Deleted ".concat(file));
            fs.rmdir('./example', function (err) {
              if (err) {
                console.log(err);
              } else {
                console.log('Successfully Deleted Folder');
              }
            });
          }
        });
      };

      for (var _iterator = files[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        _loop();
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator["return"] != null) {
          _iterator["return"]();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }
  }
});