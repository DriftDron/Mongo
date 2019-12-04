for(i = 0; i < 50; i++){
	db.students1.insertMany([
		{"name": "John", "number": 123, "score": Math.random()*10 },
		{"name": "Vika", "number": 123, "score": Math.random()*10 },
		{"name": "Ivan", "number": 123, "score": Math.random()*10 }])}

/*Для каждого поля документа создаю пару ключ - нзвание поля, значение - вместо null надо вернуть тип данных*/
function map(){
	for(var key in this) {
		emit(key, null);
	}
}
/*Для общих ключей надо возвращать тип данных вместо null*/
function reduce(key, doc){
		return null;
	}
/*Результат записываю в коллекцию*/
db.students1.mapReduce(map, reduce,{out:"students1_keys1"})
