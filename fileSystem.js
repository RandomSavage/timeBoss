const fs = require('fs')

/* //create a file
fs.writeFile('example.txt', "This is an example", (err) => {
  if(err)
    console.log(err)
  else {
    console.log("File successfully created")
    fs.readFile('example.txt', 'utf8', (err,file) => {
      if(err) {
        console.log(err)
      } else {
        console.log(file)
      }
    })
  }
}) */

// rename a file
/* fs.rename('example.txt', 'example2.txt', (err) => {
  if(err) {
    console.log(err)
  } else {
    console.log('successfuly renamed the file')
  }
}) */

//add to a file
/* fs.appendFile('example2.txt', '\nSome Data being appended', (err) => {
  if(err) {
    console.log(err)
  }else {
    console.log('successfully appended data to a file')
  }
}) */

//delete a file
fs.unlink('example2.txt', (err) => {
  if(err) {
    console.log(err)
  }else {
    console.log('Successfully deleted the file.')
  }
})