var csvWriter = require('csv-write-stream')
var writer = csvWriter()
const fs = require('fs');

// writer.pipe(fs.createWriteStream('out.csv'))
// writer.write({hello: "world", foo: "bar", baz: "taco"})
// writer.end()


fs.open("out.csv", 'w+', (err, fd) => {
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

  // mkdirp.sync(path.join(base_path, 'content', base));
  // fs.writeFileSync(path.join(base_path, 'content', base, filename), JSON.stringify(sort(data), null, 2)+'\n');
});
