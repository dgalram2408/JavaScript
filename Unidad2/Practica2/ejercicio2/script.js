const radio=3.5;
const pi= Math.round(Math.PI*Math.pow(10,4))/Math.pow(10,4);
let area= pi*(radio**2);
//a
console.log(area);
//b
area= area.toString();
console.log(area);
//c
console.log((Math.round(area*Math.pow(10,3))/Math.pow(10,3)).toString());
//d
area= Number.parseInt(area);
console.log(area);
//e
area= Math.round(area);
console.log(area);
//f
const aleatorio=Math.floor(Math.random()*19)+1;
console.log(area*aleatorio);
//g
if(Number.isFinite(radio)){
area=(pi*(radio**2));
console.log(area);
}
