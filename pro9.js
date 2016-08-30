var url='mongodb://localhost:27017/learnyoumongo';
var mongodb=require('mongodb').MongoClient
mongodb.connect(url,function(err,db){
  if(err) throw err;
  var prices=db.collection('prices');


})
