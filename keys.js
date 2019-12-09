for(i = 0; i < 50; i++){
	db.students1.insertMany([
		{"name": "John", "number": 123, "score": Math.random()*10 },
		{"name": "Vika", "number": 123, "score": Math.random()*10 },
		{"name": "Ivan", "number": 123, "score": Math.random()*10 }])}

var check = db.students1.findOne()
for (var key in check){
	print(key, typeof check[key]);
}
