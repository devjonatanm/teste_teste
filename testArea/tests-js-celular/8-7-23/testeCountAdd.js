let count = 0

function add(){
	count++
}

for(let i=0; i<100; i++){
	if(i%5 == 0){
		add()
	}
	//console.log(i)
}

console.log(count)