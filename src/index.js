const censor = require('./censor.json')
const keys = Object.keys(censor)
module.exports = text => keys.reduce((p, categoryName) => censor[categoryName].words.reduce(((p, n) => p.input.includes(n) ? {
    filtered: true,
    filters: {
        ...p.filters, ...{
            [categoryName]: [...p.input.matchAll(new RegExp(n, 'gi'))].map(i => ({
                word: text.substring(i.index, i.index + n.length),
                from: i.index,
                to: i.index + n.length - 1
            }))
        }
    },
    input: p.input.replaceAll(n, '')
} : p), {
    filtered: p.filtered,
    filters: p.filters,
    input: (censor[categoryName].excludes || []).reduce((p, n) => p.replace(n, ''), text.toLowerCase())
}), {
    filtered: false,
    filters: [],
    input: text.toLowerCase()
})