const { html2 } = require('./base');

console.log(html2.match(/<(\w+)([\s\S]*?)>([\s\S]*?)<\/\1>/g)); 