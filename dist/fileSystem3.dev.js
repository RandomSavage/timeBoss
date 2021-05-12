"use strict";

var fs = require('fs'); //module for compressing files


var zlib = require('zlib'); //compressing


var gzip = zlib.createGzip(); //uncompressing

var gunzip = zlib.createGunzip();
var readStream = fs.createReadStream('./example.txt', 'utf8');
var writeStream = fs.createWriteStream('./example2.txt'); // use this version for when using transform stream 
// const writeStream = fs.createWriteStream('./example2.txt.gz')
//Using event emiitter characteristics of readStream we can read data in small chunks and write them to another file

/* readStream.on('data', (chunk) => {
  writeStream.write(chunk)
}) */
//simpler version using pipe method

readStream.pipe(writeStream); //pipes take two streams: a read stream and a write stream
//create a transform stream (pipe into gzip and compress before writing!)

readStream.pipe(gzip).pipe(writeStream); //transform a compressed source into a readable form and write it