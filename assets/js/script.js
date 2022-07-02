console.log("conetado");

const button= document.querySelector("#button")  // Selecionando boton
const box_dashed= document.querySelector(".box")  // contendor box que contiene informacion del cliente 


box_dashed.style.display = "none";  // ocultando contenido box.

 button.addEventListener('click', function(){   //   funcion anonima evento clik 

 const cantidad=document.querySelector("#cantidad").value // recogiendo  valor del inpunt #cantidad
 const color=document.querySelector("#color").value   // recogiendo  valor del inpunt #color

 box_dashed.style.display = "block"; // mostrando nuevamente informacion del usuario 
 const precio=400000;  // declarando la variable precio asignado  directo de la maqueta orginal del desafio
 const p_total = document.querySelector("#total span");  //  seleccionando p  span  #total 
 const p_cantidad = document.querySelector(".cantidad span");  //  seleccionando p  sapan #cantiddd
 const p_color = document.querySelector("#color span");   //  seleccionando span dentro  de contendo #color

 p_color.style.background = color;   //  asignado el valor del inpunt color  a p_color
const  resultado= precio *parseInt(cantidad); // operacion matematica.


 p_cantidad.innerHTML=cantidad;  // asiganado al parrafo cantidad el valor del inpunt cantidad
 p_total.innerHTML=resultado;


 })

 

 







 


