
<style> 
  body {
    background-color: aquamarine; 
  }
</style>

{
  
  alert ("¡Hola bienvenido ¿Quieres aprender hoy?!");
}

{
  <input type=button value=atras onclick="history.go">
}


{
var preguntas=object();
var salida='';
function guardar pregunta(){  
  preguntas.preg= document.getElementById('preg').value;
  preguntas.opc1= document.getElementById('opc 1').value;
  preguntas.opc2= document.getElementById('opc 2').value;
  preguntas.opc3= document.getElementById('opc 3').value;
  preguntas.opc4= document.getElementById('opc 4').value;
  preguntas.opc5= document.getElementById('opc 5').value;
  preguntas.RC= document.getElementById('RC').value;
  preguntas.RE=' ';
  listadospreguntas();
  limpiarcajas
}

function limpiarcajas(){ 
   document.getElementById('preg').value='';
   document.getElementById('opc 1').value='';
   document.getElementById('opc 2').value='';
   document.getElementById('opc 3').value='';
   document.getElementById('opc 4').value='';
   document.getElementById('opc 5').value='';
   document.getElementById('RC').value='';
   document.getElementById('preg').focus();
}

function listadospreguntas(){
      salida+='<tr> <td>'+
 }



}
