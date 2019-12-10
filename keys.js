for(i = 0; i < 10; i++){
	db.students1.insertMany([
		{"name": "John", "number": 123, "score": Math.random()*10 },
		{"name": "Vika", "number": 123, "score": Math.random()*10 },
		{"name": "Ivan", "test": 123, "score": Math.random()*10 }])}

var myCursor = db.students1.find()
while (myCursor.hasNext()){
	obj = myCursor.next();
	for (var key in obj){
		print(key, typeof obj[key]);
	}
}
db.students1.drop()

	
