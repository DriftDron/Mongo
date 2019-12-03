function map(){
	for(var key in this) {
		emit(key, null);
	}
}

function reduce(key, doc){
		return null;
	}

db.students1.mapReduce(map, reduce,{out:"students1_keys1"})