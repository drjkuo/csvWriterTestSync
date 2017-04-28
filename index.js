var csvWriter = require('csv-write-stream')
var writer = csvWriter()
const fs = require('fs');
var mkdirp = require('mkdirp');
var path = require('path');

// writer.pipe(fs.createWriteStream('out.csv'))
// writer.write({hello: "world", foo: "bar", baz: "taco"})
// writer.end()


// Asynchronous - Opening File
// console.log("Going to open file!");
// fs.open('input.txt', 'r+', function(err, fd) {
//    if (err) {
//       return console.error(err);
//    }
//   console.log("File opened successfully!");
// });


// console.log('TEST');
// fs.openSync("out.csv", 'w+', (err, fd) => {
//   console.log('TEST');
//
//   if (err) {
//     console.log('CONDITION PASSED');
//     if (err.code === 'EEXIST') {
//       console.error('myfile already exists');
//       return;
//     }
//
//     throw err;
//   }
// });




  console.log("Going to make a folder");
  mkdirp('./tmpno/1/2', function(err) {
     if (err) {
        return console.error(err);
     }

     console.log("Folder written successfully!");
     console.log("Let's read newly written data");
    //  fs.writeFile('./tmpno/1/2/input.txt', 'Simply Easy Learning!', function (err, data) {
    //     if (err) {
    //        return console.error(err);
    //     }
    //     console.log("Asynchronous write: success" ); // + data.toString()
    //  });

     var fd = fs.createWriteStream('./tmpno/1/2/input.txt');
    //  fs.writeSync(fd, 'contents to append');

     writer.pipe(fd);
    //  console.log('FD', fd);
     writer.write({hello: "world", foo: "bar", baz: "taco"});
     writer.write({hello: "world1", foo: "bar1", baz: "taco1"});
     writer.end();


  });


  // writer.pipe(fd);
  // console.log('FD', fd);
  // writer.write({hello: "world", foo: "bar", baz: "taco"})
  // writer.end();

  // mkdirp.sync(path.join(base_path, 'content', base));
  // fs.writeFileSync(path.join(base_path, 'content', base, filename), JSON.stringify(sort(data), null, 2)+'\n');
