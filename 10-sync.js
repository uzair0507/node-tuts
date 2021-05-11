const { readFileSync, writeFileSync } = require('fs')

const first = readFileSync('./content/first.txt', 'utf8')
const sec = readFileSync('./content/sec.txt', 'utf8')

writeFileSync('./content/result-sync.txt',
    `Here is the result : ${first}, ${sec}`, { flag: 'a' })