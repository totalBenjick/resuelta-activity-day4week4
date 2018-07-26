/**
 * TASK 1: Add an event listener to the `<button class="rte-italics">`.
 *
 *         When user clicks, it should toggle the `fontStyle` property
 *         value of the `<p class="textbox"></p>` to «italic».
 */

var btn = document.querySelector(".rte-italics")
var textbox1 = document.querySelector(".textbox")
//var textContenido = textbox1.textContent

//console.log(textbox1);

btn.addEventListener('click', function() {
  var estilosPorDefecto = window.getComputedStyle(textbox1)
  if (estilosPorDefecto.fontStyle=== "normal"){
 	 textbox1.style.fontStyle = "italic"; 	
  } else{
  	 textbox1.style.fontStyle = "normal";
  }

 


});




/**
 * TASK 2: Add an event listener to the `<button class="rte-bold"></button>`.
 *
 *         When user clicks, it should toggle the `fontWeight` property
 *         value of the `<p class="textbox"></p>` to 700.
 */

var btnBold = document.querySelector(".rte-bold")


btnBold.addEventListener('click', function() {
  var estilosPorDefecto = window.getComputedStyle(textbox1)
   //console.log(typeof estilosPorDefecto.fontWeight)
  if (estilosPorDefecto.fontWeight=== "400"){
 	 textbox1.style.fontWeight = "700"; 	
  } else{
  	 textbox1.style.fontWeight = "400";
  }

})
/**
 * TASK 3:
 * Add event listeners to the `<button class="rte-fontsize"></button>` elements.
 *
 *         When user clicks, it should change the `fontSize` property of the
 *         `<p class="textbox"></p>` to the value of the button that was clicked.
 */

var btnsCambio = document.querySelectorAll(".rte-fontsize")
//console.log(btnsCambio);

btnsCambio.forEach(function(boton){
	boton.addEventListener("click", function(event){
	var contenido = event.target;
	textbox1.style.fontSize  = contenido.textContent;

	})
})

/**
 * TASK 4:
 * Add event listener to the `<button class="rte-fontcolor"></button>` elements.
 *
 *         When user clicks, it should take the value from the `data-color`
 *         attribute and set the `color` property of the `<p class="textbox"></p>`
 *
 *         To access data-* attributes
 *         https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes
 */

 var btnsCambioColor = document.querySelectorAll(".rte-fontcolor")
//console.log(btnsCambioColor);

btnsCambioColor.forEach(function(boton){
	boton.addEventListener("click", function(event){
	var contenido = event.target;
	//var estilosPorDefecto = window.getComputedStyle()
	console.log(contenido.dataset.color);
	var color1 = contenido.dataset.color;
	textbox1.style.color = color1

	})
})


