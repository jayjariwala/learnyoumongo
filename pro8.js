var url='mongodb://localhost:27017/learnyoumongo'
var mongodb=require('mongodb').MongoClient
mongodb.connect(url,function(err,db){
  if(err) throw err
  var parrots=db.collection('parrots')
  parrots.count({age :{ $gt : +process.argv[2]}},function(err,count){
    if(err) throw error;
console.log(count);
  })
db.close();
})
