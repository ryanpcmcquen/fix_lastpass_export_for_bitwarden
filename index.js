const fs = require('fs')
const fileName = process.argv[2]
fs.readFile(process.argv[2], 'utf8', (err, data) => {
    if (err) {
        return console.log(err)
    }

    fs.writeFile(
        `CLEANED_${fileName}`,
        data
            .replace(/&amp;/gi, '&')
            .replace(/&gt;/gi, '>')
            .replace(/&lt;/gi, '<'),
        (err) => {
            if (err) {
                console.error('Something failed:', err)
            } else {
                console.log('It worked!')
            }
        }
    )
})
