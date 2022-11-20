# Data Parse
데이터를 파싱하는 방법에 대해 다룹니다.

## 1. [JSON](/DataParse/JSON/)
json을 파싱하는 방법에 대해 다룹니다.

### 1.1 [Python](/DataParse/JSON/Python/jsonParser.py)
* json(dict) <=> 문자열
* json(dict) <=> 파일

### 1.2 [Node](/DataParse/JSON/Node/jsonParser.js)
* json(dict) <=> 문자열
* json(dict) <=> 파일


## 2. [YAML](/DataParse/YAML/)
yaml 파일을 파싱하는 방법에 대해 다룹니다.
### 2.1 YAML 파일 작성법

#### 2.1.1 자료형

1. 스칼라 (문자열, 숫자, boolean)
2. 시퀀스
3. map(key - value)

#### 2.1.2 문법

1. 들여쓰기

yml은 들여쓰기로 구분
##### yaml
```yaml
a:
  b:
    c: d
```
##### json
```json
{
  "a": {
    "b": {
      "c": "d"
    }
  }
}
```

2. 시퀀스
시퀀스는 '-' 기호를 통해 표현
##### yaml
```yaml
a:
  - b
  - c
  - d
```
##### json
```json
{
    "a" [
        "b",
        "c",
        "d"
    ]
}
```

3. 스칼라값 표현
##### yaml
```yaml
string: "string"
number: 1234
bool: true
bool2: True
bool3: TRUE
```
##### json
```json
{
  "string": "string",
  "number": 1234,
  "bool": true,
  "bool2": true,
  "bool3": true
}
```

4. 여러줄 표현
여러줄을 표현하는 방법으로는
* '>' : 중간 개행문자 제외, 마지막 개행문자 포함
* '|' : 중간 개행문자 포함, 마지막 개행문자 포함
* '>-' : 중간 개행문자 제외, 마지막 개행문자 제외
* '|-' : 중간 개행문자 포함, 마지막 개행문자 제외

##### yaml
```yaml
">": >
  abc
  abcde

  abcdef
"|": |
  abc
  abcde

  abcdef
">-": >-
  abc
  abcde

  abcdef

"|-": |-
  abc
  abcde

  abcdef
```

##### json
```json
{
  ">": "abc abcde\nabcdef\n",
  "|": "abc\nabcde\n\nabcdef\n",
  ">-": "abc abcde\nabcdef",
  "|-": "abc\nabcde\n\nabcdef"
}
```


### 2.2 [Python](/DataParse/YAML/Python/ymlParser.py)
* yaml <=> json
* .yaml <=> json
### 2.3 [Node](/DataParse/YAML/Node/yamlParser.js)
* yaml <=> json
* .yaml <=> json