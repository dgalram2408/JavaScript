const textoCafe= '{"title":"Mocha","description":"For all the chocolate lovers out there, a mocha is an easy favorite. It is a chocolate espresso drink made with steamed milk and foam.","ingredients":["Espresso","Steamed milk","Chocolate"],"image":"https://images.unsplash.com/photo-1607260550778-aa9d29444ce1?auto=format&fit=crop&q=80&w=1887&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D","id":8}';
const cafe= JSON.parse(textoCafe);
console.log(cafe);

for (const clave in cafe) {
    console.log(clave+": "+cafe[clave]);   
};
const fichaCafe={
    id: cafe.id,
    nombre: cafe.title,
    ingredientes: cafe.ingredients,
    imagen: cafe.image
};
console.log(fichaCafe);
document.body.innerHTML+="<h1>"+fichaCafe.nombre+"</h1>";
document.body.innerHTML+="<img src="+fichaCafe.imagen+" height="+"200"+">";
const sinimagen=JSON.parse( 
    JSON.stringify(fichaCafe,(clave, valor) => {
        return clave === "imagen" ? undefined : valor;
    }
));
document.body.innerHTML+="<h2>Ficha en formato JSON<h2>";

document.body.innerHTML+="<pre>"+JSON.stringify(sinimagen,null,2)+"</pre>"
