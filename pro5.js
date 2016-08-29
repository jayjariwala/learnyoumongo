var url='mongodb://localhost:27017/learnyoumongo';
var mongodb=require('mongodb').MongoClient
mongodb.connect(url,function(err,db){
  if(err)throw err;
  var learnyoumongo=db.collection('learnyoumongo');
  var obj={firstName:process.argv[2],lastName:process.argv[3]};
  learnyoumongo.insert(obj,function(err,data){
    if(err) throw err;
console.log(JSON.stringify(obj));

  });
db.close();
})
