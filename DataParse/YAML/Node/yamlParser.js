const YAML = require('yaml');
const fs = require('fs');

// yaml str => json
var ymlStr = `
a: abc
b:
- arr1
- arr2
- arr3
c: 'this is

  multi line

  string'
`
var jsonObj = YAML.parse(ymlStr);


console.log(jsonObj);

// json => yamlstr
var ymlStr = YAML.stringify(jsonObj)
console.log(ymlStr);

// .yaml => json
const fileStr = fs.readFileSync('../test.yaml', 'utf8');
var jsonObj = YAML.parse(fileStr);
console.log(jsonObj);

// json => .yaml
fs.writeFileSync('../test.yaml', YAML.stringify(jsonObj), 'utf8');