const fs = require('fs')

//create a folder
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
fs.readdir('example', (err, files) => {
  if(err) {
    console.log(err)
  }else {
    // console.log(files) will show the array of file names inside
    for(let file of files) {
      fs.unlink(`./example/${file}`, (err) => {
        if(err) {
          console.log(err)
        }else {
          console.log(`Successfully Deleted ${file}`)
          fs.rmdir('./example', (err) => {
            if(err) {
              console.log(err)
            }else {
              console.log('Successfully Deleted Folder')
            }
          })
        }
      })
    }
  }
})

const readStream = fs.createReadStream('./largefile.txt', 'utf8')
readStream.on('data', (chunk) => {
  console.log(chunk)
})
