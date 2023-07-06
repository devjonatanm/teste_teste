const n = [10, 30, 15, 25, 50, 40, 5]

let a = function(x){
	if(x%2 === 1){
		return x
	}
}

console.log(n.filter(a))

