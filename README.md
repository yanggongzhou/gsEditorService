## Description

[Nest](https://github.com/nestjs/nest) 

Only Used to Study

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## 服务启动

```bash
# To run MongoDB (i.e. the mongod process) as a macOS service, run:
$ brew services start mongodb-community@5.0

# To stop a mongod running as a macOS service, use the following command as needed:
$ brew services stop mongodb-community@5.0

# To run MongoDB (i.e. the mongod process) manually as a background process, run:
#For macOS running on Apple M1 processors:
$ mongod --config /opt/homebrew/etc/mongod.conf --fork

```

## Other
#### 一、什么是DTO？
参考文献 https://zhuanlan.zhihu.com/p/381739245

数据传输对象（DTO)(Data Transfer Object)，是一种设计模式之间传输数据的软件应用系统。
数据传输目标往往是数据访问对象从数据库中检索数据。
数据传输对象与数据交互对象或数据访问对象之间的差异是一个以不具有任何行为除了存储和检索的数据（访问和存取器）。

官方说明： https://nestjs.bootcss.com/controllers

nestjs支持interface定义，但更推荐试用dto模式类。与ts的interface类似，但ts在转义后会被移除，而基于es6的类dto会被保留为实体。
