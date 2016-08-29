var url='mongodb://localhost:27017/learnyoumongo';
var mongo=require('mongodb').MongoClient
mongo.connect(url,function(err,db){
  if(err) throw err;
  var parrots = db.collection('parrots');
  parrots.find({
    age: { $gt : +process.argv[2]} },{
      name:1,
      age :1,
      _id:0
  }).toArray(function(err,doc){
    if(err) throw doc;
    console.log(doc);
  })

db.close();


})
