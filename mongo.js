var MongoClient = require('mongodb').MongoClient,
	settings = require('./settings');

MongoClient.connect('mongodb://localhost/' + settings.db,function(err,db) {
	if(err) {return console.dir(err);}
	
	console.log('connected to db');
	
	db.collection('users', function(err, collection){
		var docs = [
			{name: "kame", score:90},
			{name: "ka", score:60},
			{name: "kamem", score:40}
		];
		
		/*
		collection.insert(docs, function(err, result){
			console.dir(result);
		});
		*/
		
		/*
		collection.find().toArray(function(err, items) {
			console.log(items)
		}) 
		*/
		
		var stream =collection.find().stream();
		stream.on("data",function(item) {
			console.log(item);
		});
		
		stream.on("end",function() {
			console.log("finished.");
		});
	});
		
})