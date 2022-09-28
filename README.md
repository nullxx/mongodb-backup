# [@nullx/mongodb-backup](https://github.com/nullxx/mongodb-backup)

Backup for mongodb

## Installation

Install through NPM

```bash
npm install @nullx/mongodb-backup
```

## API

inside nodejs project
```js
var backup = require('@nullx/mongodb-backup');

backup({
  uri: 'uri', // mongodb://<dbuser>:<dbpassword>@<dbdomain>.mongolab.com:<dbport>/<dbdatabase>
  root: __dirname
});
```

### backup(options)

#### options

 - `uri` - **String** [URI](http://mongodb.github.io/node-mongodb-native/2.0/tutorials/urls/) for MongoDb connection *(default "required")*
 - `root`- **String** Path where save data *(default "required")*
 - `[parser]` - **String | Function** Data parser (bson, json) or custom *(default "bson")*
 - `[collections]` - **Array** Select which collections save *(default "disabled")*
 - `[callback]` - **Function** Callback when done *(default "disabled")*
 - `[stream]`- **Object** Send `.tar` file to Node stream *(default "disabled")*
 - `[tar]` - **String** Pack files into a .tar file *(default "disabled")*
 - `[query]` - **Object** Query that optionally limits the documents included *(default "{}")*
 - `[numCursors]` - **Number** Set number of cursor for [parallelCollectionScan](https://docs.mongodb.org/v3.0/reference/command/parallelCollectionScan) without query *(default "disabled")*
 - `[logger]` - **String** Path where save a .log file *(default "disabled")*
 - `[metadata]` - **Boolean** Save metadata of collections as Index, ecc *(default "false")*
 - `[options]` - **Object** MongoDb [options](http://mongodb.github.io/node-mongodb-native/2.0/tutorials/connecting/#toc_7) *(default)*

## Examples

Take a look at the examples folder

### [License Apache2](https://github.com/nullxx/mongodb-backup/blob/1.6/LICENSE)
