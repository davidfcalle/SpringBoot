/**
 * función encargada de serilizar un formulario y volverlo un objeto JS
 */
$.fn.serializeObject = function()
{
   var o = {};
   var a = this.serializeArray();
   $.each(a, function() {
       if (o[this.name]) {
           if (!o[this.name].push) {
               o[this.name] = [o[this.name]];
           }
           o[this.name].push(this.value || '');
       } else {
           o[this.name] = this.value || '';
       }
   });
   return o;
};
/**
 * cambiar la configuración de XHR de Jquery
 */
$.ajaxSetup({
	  xhrFields: {
	    withCredentials: true
	  }
});
/**
 * Da el valor de llave con nombre name de los parámetros GET de la URL
 * Obtenido de http://stackoverflow.com/questions/831030/how-to-get-get-request-parameters-in-javascript  usuario Rafael
 */
function get(name){
	   if(name=(new RegExp('[?&]'+encodeURIComponent(name)+'=([^&]*)')).exec(location.search))
	      return decodeURIComponent(name[1]);
}

/**
 * Funciòn de regresa la fecha actual como una cadena
 * en formato yyyy-mm-dd
 */
function darFechaActual(){
	var fecha = new Date();
	var dd = fecha.getDate();
    var mm = fecha.getMonth()+1;
    var yyyy = fecha.getFullYear();
    return ""+yyyy+"-"+mm+"-"+dd;
}

/*
 * 
 * Función que se encarga de poner en un input type text
 * con nombre llace, el valor valor
 */
function llenarDatoFormulario(llave, valor){
	var input = $("form input[name="+ llave + "]").first();
	input.attr("value", valor);
	
}

