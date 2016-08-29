var url='mongodb://localhost:27017/'+process.argv[2];
var mongodb=require('mongodb').MongoClient
mongodb.connect(url,function(err,db){
if(err)throw err;
var userCollection=db.collection('users');

userCollection.update({age:30},{ $set:{ age:40}})
db.close();
});
