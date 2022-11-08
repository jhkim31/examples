# kafka server, client API를 사용하기

## 1. 테스트 카프카 설치 (Mac OS)
https://www.youtube.com/watch?v=HbbI6G24LZs
```bash
brew install kafka
brew services start zookeeper
brew services start kafka

brew info kafka //kafka 설치 디렉토리 확인
cd {kafka 설치 디렉토리}/bin

./kafka-topics --bootstrap-server localhost:9092 --topic {topic 이름} --create --partitions {파티션 수} --replication-factor {복제 수}

```

## 2. 카프카 세팅

## 3. Node

### [프로듀서](/Kafka/Node/Producer.js) 실행
```bash
node Producer.js
```

### [컨슈머](/Kafka/Node/Consumer.js) 실행
```bash
node Consumer.js
```