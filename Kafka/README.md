# kafka Proeucer, Consumer API 사용

# 1. 테스트 카프카 설치 (Mac OS)
https://www.youtube.com/watch?v=HbbI6G24LZs
```bash
brew install kafka
brew services start zookeeper
brew services start kafka

brew info kafka //kafka 설치 디렉토리 확인
cd {kafka 설치 디렉토리}/bin

```

# 2. 운영 카프카 설치
https://www.youtube.com/watch?v=FpNhPh_VEzM&list=PLJlUnZ1kDbt6rN-pf_4jxPSWuP4BeK4pk&index=1

# 3. kafka CLI
카프카 설치 디렉토리의 /bin 디렉토리에서 실시  
(이 디렉토리에 스크립트들이 있음)

## 3.1 토픽
### 3.1.1 토픽 생성
새로운 토픽 생성
```bash
./kafka-topics --bootstrap-server localhost:9092 --topic {topic} --create --partitions {파티션 수} --replication-factor {복제 수}
./kafka-topics.sh --bootstrap-server localhost:9092 --topic {topic} --create --partitions {파티션 수} --replication-factor {복제 수}
```


### 3.1.2 토픽 조회
```bash
./kafka-topics --list --bootstrap-server localhost:9092  
./kafka-topics.sh --list --bootstrap-server localhost:9092  
```

result
```bash
topic1
topic2
topic3
...
```

### 3.1.3 토픽 상세
```bash
./kafka-topics --bootstrap-server localhost:9092 --describe --topic {topic} 
./kafka-topics.sh --bootstrap-server localhost:9092 --describe --topic {topic} 
```
result
```bash
Topic: ChangeText       TopicId: D_O6gjTHR_GzrXB9Y_5ZbA PartitionCount: 1       ReplicationFactor: 1    Configs: 
        Topic: ChangeText       Partition: 0    Leader: 0       Replicas: 0     Isr: 0
```

### 3.1.4 토픽 삭제
```bash
./kafka-topics --bootstrap-server localhost:9092 --delete --topic {topic}
./kafka-topics.sh --bootstrap-server localhost:9092 --delete --topic {topic}
```
**단 현재 토픽에 접근중인 컨슈머가 있다면 삭제되지 않는다**

## 3.2 컨슈머
### 3.2.1 컨슈머 조회
```bash
./kafka-consumer-groups --bootstrap-server localhost:9092 --list
./kafka-consumer-groups.sh --bootstrap-server localhost:9092 --list
```

result
```bash
group1
group2
group3
...
```

### 3.2.2 컨슈머 상세

```bash
./kafka-consumer-groups --bootstrap-server localhost:9092 --describe --group {consumer group} 
./kafka-consumer-groups.sh --bootstrap-server localhost:9092 --describe --group {consumer group} 
```

result
```bash
GROUP           TOPIC           PARTITION  CURRENT-OFFSET  LOG-END-OFFSET  LAG             CONSUMER-ID                                  HOST             CLIENT-ID
keti-group      ChangeText      0          2               2               0               kafkajs-075bb241-f6f2-40fc-acaa-29d3b25e17a6 /0:0:0:0:0:0:0:1 kafkajs
keti-group      kafka-test      0          189             189             0               -                                            -                -
keti-group      kafka-test      1          80              80              0               -                                            -                -
keti-group      kafka-test      2          80              80              0               -                                            -                -
```

### 3.2.3 토픽 Consume
* --from-beginning 
    * 해당 토픽을 읽은적 없는 놈이 해당 옵션을 넣으면, offset0부터 읽는다.
    * 해당 토픽을 읽은적 없는 놈이 해당 옵션을 빼면, 제일 최근 offset부터 읽는다.
    * 해당 토픽을 읽은적 있는 놈은 자기가 커밋한 offset부터 읽음.

```bash
./bin/kafka-console-consumer --bootstrap-server localhost:9092 --topic {topic} [--from-beginning] [--group {groupId}]
./bin/kafka-console-consumer.sh --bootstrap-server localhost:9092 --topic {topic} [--from-beginning]
```

### 3.2.4 컨슈머그룹 오프셋 리셋
* --topic {topic} 과 --all-topic을 사용할 수 있음.

```bash
./kafka-consumer-groups --bootstrap-server localhost:9092 --group {group} --topic {topic} --reset-offsets --to-earliest --execute
./kafka-consumer-groups.sh --bootstrap-server localhost:9092 --group {group} --topic {topic} --reset-offsets --to-earliest --execute
```

## 3.3 프로듀서
### 3.3.1 토픽 Produce
```bash
./kafka-console-producer --broker-list localhost:9092 --topic {topic}
./kafka-console-producer.sh --broker-list localhost:9092 --topic {topic}
```


# 3. Node

## [프로듀서](/Kafka/Node/Producer.js) 실행
```bash
node Producer.js
```

## [컨슈머](/Kafka/Node/Consumer.js) 실행
```bash
node Consumer.js
```