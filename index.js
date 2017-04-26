var csvWriter = require('csv-write-stream')
var writer = csvWriter()
const fs = require('fs');

// writer.pipe(fs.createWriteStream('out.csv'))
// writer.write({hello: "world", foo: "bar", baz: "taco"})
// writer.end()


fs.openSync(`out.csv`, 'w+', (err, fd) => {
  if (err) {
    if (err.code === 'EEXIST') {
      console.error('myfile already exists');
      return;
    }

    throw err;
  }

  writer.pipe(fd);
  writer.write({hello: "world", foo: "bar", baz: "taco"})
  writer.end();
});
