const str = "JavaScript";
const substr = str.substr(1, 4); // avaS
const substring = str.substring(1, 4); //ava
//verificando se substr está em substring
const result = substr.indexOf(substring);
const result2 = substring.indexOf(substr);

console.log(result)
	
	
	
	 