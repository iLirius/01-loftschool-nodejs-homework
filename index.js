const {
  readdirSync,
  statSync
} = require("fs");
const {
  join
} = require("path");
const argv = require("minimist")(process.argv.slice(2));

console.log(argv);


// var dir = process.cwd();
// var files = readdirSync(dir);

// files.forEach(filename => {
//   var fullname = join(dir, filename),
//     stats = statSync(fullname);
//   if (stats.isDirectory()) {
//     console.log(filename + "\t DIR \t" + stats.mtime + "\n");
//   } else {
//     console.log(filename + "\t" + stats.size + "\t" + stats.mtime + "\n");
//   }
// });
