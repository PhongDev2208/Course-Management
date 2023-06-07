const Handlebars = require('handlebars');

module.exports = {
    sum(a,b) {return a + b},
    sortable(field, sort) {
      let typeSort = sort.column === field ? sort.type : 'default'

      let types = {
        default: 'desc',
        asc: 'desc',
        desc: 'asc'
      }

      let icons = {
        default: 'oi oi-elevator',
        asc: 'oi oi-sort-ascending',
        desc: 'oi oi-sort-descending'
      }

      let icon = icons[typeSort]
      let type = types[typeSort]

      const href = Handlebars.escapeExpression(`?_sort&column=${field}&type=${type}`)
      const output = `<a href="${href}"><span class="${icon}"></span></a>`
      return new Handlebars.SafeString(output);
    }
  }