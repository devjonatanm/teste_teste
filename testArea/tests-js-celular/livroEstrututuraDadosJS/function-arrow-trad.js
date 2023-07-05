//pag 56
// comparação function arrow e a tradicional

var circleAreaES5 = function circleArea(r) {
 var PI = 3.14;
 var area = PI * r * r;
 return area;
};
console.log(circleAreaES5(2));

const circleArea = r => { // {1}
  const PI = 3.14;
  const area = PI * r * r;
  return area;
};
console.log(circleArea(2));
