const fs = require('fs');

const originData = {
    param1 : 1,
    param2 : [1,2,3],
    param3 : {
        param4 : 1234
    }
}

// json 2 str
const strJsonData = JSON.stringify(originData, null, 4);        // 들여쓰기를 위해
console.log(strJsonData)

// str 2 json
const jsonData = JSON.parse(strJsonData);
console.log(jsonData)

// json 2 file | str 형식의 데이터를 을 .json파일로 쓰기
fs.writeFileSync('../test.json', strJsonData, 'utf8')


// file 2 json  | .json파일을 읽어와 json 형식으로 리턴.
const file = fs.readFileSync('../test.json', 'utf8');
console.log(typeof(file));
