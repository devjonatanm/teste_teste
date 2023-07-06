String.prototype.replaceAt = function(index, replacement) {
    if (index >= this.length) {
        return this.valueOf();
    }
 
    return this.substring(0, index) + replacement + this.substring(index + 1);
}
 
var str = "Jonatan Marques";
str = str.replaceAt(5, '_');
console.log(str);
 
/*
    Resultado: Hello_World
*/