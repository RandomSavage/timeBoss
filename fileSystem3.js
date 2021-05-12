const fs = require('fs')

//module for compressing files
const zlib = require('zlib')

//compressing
const gzip = zlib.createGzip()

//uncompressing
const gunzip = zlib.createGunzip()

const readStream = fs.createReadStream('./example.txt', 'utf8')
const writeStream = fs.createWriteStream('./example2.txt')

// use this version for when using transform stream 
// const writeStream = fs.createWriteStream('./example2.txt.gz')


//Using event emiitter characteristics of readStream we can read data in small chunks and write them to another file
/* readStream.on('data', (chunk) => {
  writeStream.write(chunk)
}) */

//simpler version using pipe method
readStream.pipe(writeStream);

//pipes take two streams: a read stream and a write stream

//create a transform stream (pipe into gzip and compress before writing!)
readStream.pipe(gzip).pipe(writeStream)

//transform a compressed source into a readable form and write it
const readStream = fs.createReadStream('./example.txt.gz')

readStream.pipe(gunzip).pipe(writeStream)