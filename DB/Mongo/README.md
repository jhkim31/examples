# MongoDB

몽고DB는 NoSQL 데이터 베이스로 key-value 형태로 자료를 저장하는 데이터 베이스다.

# 1. Terminology

## 1.1 Database
다른 RDB의 데이터베이스와 유사함.

## 1.2 Collection
다른 RDB의 테이블과 유사하다.

## 1.3 Document
다른 RDB의 레코드와 유사하다.

Document는 json 형식으로 표현되며 이 Document들은 내부의 _id라는 필드를 가진다.  
이 _id는 유일한 값을 가지며 각 Document를 구분하는 역할을 하고, Document를 찾는 **key** 로 사용된다.

# 2. 설치
설치는 Docker로 진행한다.

```bash
docker run --name {somename} -p 27017:27017 -d mongo
```
몽고 DB컨테이너 내 커멘드라인 접속
```bash
root@{containerid}:/$ mongosh
```

root유저 생성
```bash
use admin
db.createUser({user: 'username', pwd: 'password', roles: ['root']})
```
이후 username과, password는 로그인할때 사용된다.

# 3. 간단한 커멘드

## 3.1 Database

### 3.1.1 Create
기존 데이터베이스가 있다면 해당 데이터베이스를 사용하게 되고, 없다면 새로운 데이터베이스가 생긴다.
```bash
use test_db
```

### 3.1.2 Drop
특정 데이터베이스를 사용중이면서 해당 명령을 통해 데이터베이스를 Drop할 수 있음.
```bash
db.dropDatabase();     
```

## 3.2 Collection 명령

### 3.2.1 Create
```bash
db.createCollection('collectionName', [options])
```
이떄 들어갈 옵션들은 다음과 같다.
* capped: true,  // 컬렉션의 최대 사이즈를 설정함, default : false
* size: number, // 컬렉션의 최대 사이즈(bytes)를 지정한다, capped : true일때만
* max: number  //컬렉션의 최대 document를 지정함.


```bash
db.createCollection('test', {
    capped: true,
    size: 1000000,
    max: 1000
})
```

### 3.2.2 조회
```bash
show collections
```

### 3.2.3 Drop
```bash
db.collectionName.drop()
```

## 3.3 Document 명령
Document에 관련된 명령이다.


### 3.3.1 Create
```bash
db.collection.insert({document})            // deprecated
db.collection.insertOne({document})
db.collection.insertMany([{document}, ...])
```
insert시 collection이 생성되어있지 않아도 추가할 수 있다.  
<<추가바람>>  collection이름이 복수형으로 저장되는 경우가 있는데, 이때는 언제 이렇게 되는지 모르겠음.

_id는 따로 지정하지 않는이상, 자동으로 부여된다.

```bash
db.person.insertOne({
    name: 'kim',
    age: 25
})
```


### 3.3.2 Read
```bash
db.collection.find({})
```