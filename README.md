# [mongodb-backup](http://supergiovane.tk/#/mongodb-backup)

[![NPM version](https://badge.fury.io/js/mongodb-backup.svg)](http://badge.fury.io/js/mongodb-backup)
[![Build Status](https://travis-ci.org/hex7c0/mongodb-backup.svg)](https://travis-ci.org/hex7c0/mongodb-backup)
[![Dependency Status](https://david-dm.org/hex7c0/mongodb-backup/status.svg)](https://david-dm.org/hex7c0/mongodb-backup)

Backup for mongodb

Look at [`mongodb-backup-cli`](https://github.com/hex7c0/mongodb-backup-cli) for command line usage, similar to [mongodump](http://docs.mongodb.org/manual/reference/program/mongodump/)

Look at [`mongodb-restore`](https://github.com/hex7c0/mongodb-restore) for restore data

## Installation

Install through NPM

```bash
npm install mongodb-backup
```
or
```bash
git clone git://github.com/hex7c0/mongodb-backup.git
```

## API

inside nodejs project
```js
var backup = require('mongodb-backup');
```

### backup(options)

#### options

 - `uri` - **String** [URI](http://mongodb.github.io/node-mongodb-native/2.0/tutorials/urls/) for MongoDb connection *(default "required")*
 - `root`- **String** Path where save data *(default "required")*
 - `[parser]` - **String | Function** Data parser (bson, json) or custom *(default "bson")*
 - `[collections]` - **Array** Select which collections save *(default "disabled")*
 - `[callback]` - **Function** Callback when done *(default "disabled")*
 - `[tar]` - **String** Pack files into a .tar file *(default "disabled")*
 - `[query]` - **Object** Query that optionally limits the documents included *(default "{}")*
 - `[logger]` - **String** Path where save a .log file *(default "disabled")*
 - `[metadata]` - **Boolean** Save metadata of collections as Index, ecc *(default "false")*
 - `[options]` - **Object** MongoDb [options](http://mongodb.github.io/node-mongodb-native/2.0/tutorials/connecting/#toc_7) *(default)*

## Examples

Take a look at my [examples](https://github.com/hex7c0/mongodb-backup/tree/master/examples)

### [License GPLv3](http://opensource.org/licenses/GPL-3.0)
