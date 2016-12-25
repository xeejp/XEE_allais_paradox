export function ReadJSON(filename = './language.json') {
  var text = require('json!' + filename)
  return text
}