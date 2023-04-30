const { log } = require('console');
const path = require('path');

// path.sep is a property of the path module in Node.js that returns the platform - specific path segment separator.On Windows, the separator is a backslash(), while on Unix - based systems(including macOS and Linux), it is a forward slash(/).
console.log(path.sep);

const filePath = path.join('/content', 'subfolder', 'test.txt')
console.log(filePath);

const base = path.basename(filePath)
console.log(base);

// 'path.resolve()' is used To get the absolute path of a file by resolving it against the current directory.
const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt')
console.log(absolute);

const exten = path.extname(filePath)
console.log(exten);