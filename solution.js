var url='mongodb://localhost:27017/learnyoumongo';

//connect database


var mongo=require('mongodb').mongoClientmongo.connect(url,function(err,db){

var collection=db.collection('parrots');

collection.find()

})
