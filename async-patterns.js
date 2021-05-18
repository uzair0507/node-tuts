const { readFile, writeFile } = require('fs').promises

const start = async() => {
    try {
        const first = await readFile('./content/first.txt', 'utf8')
        const second = await readFile('./content/sec.txt', 'utf8')
        await writeFile('./content/newfile.txt',
            `This is Awesome: ${first}, ${second}`)
        console.log(first, second)
    } catch (error) {
        console.log(error)
    }

}
start()