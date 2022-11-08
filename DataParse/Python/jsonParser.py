import json

a = {"key1" : "value1", "key2" : 2}

"""
1. json(dict) => 문자열
"""
jsonStr = json.dumps(a)
print(type(jsonStr), jsonStr)

"""
2. 문자열 => json(dict)
"""
jsonData = json.loads(jsonStr)
print(type(jsonData), jsonData)

"""
3. json(dict) => 파일(문자열)
실행 경로에 파일 생성
"""
with open('./test.test', 'w') as fp:
    json.dump(a, fp)

"""
4. 파일(문자열) => json(dict)
실행 경로에 파일 생성
"""
with open('./test.test', 'r') as fp:
    jsonData = json.load(fp)
    print(type(jsonData), jsonData)