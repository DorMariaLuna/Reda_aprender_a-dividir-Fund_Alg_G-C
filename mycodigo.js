
<style> 
  body {
    background-color: aquamarine; 
  }
</style>

{
  
  alert ("¡Hola bienvenido ¿Quieres aprender hoy?!");
}

{
  <input type= button value= atras onclick="history.go">
}

{
var preguntas=object();
var salida='';
function guardar pregunta(){  
  preguntas.preg= document.getElementById('preg').value;
  preguntas.opc 1= document.getElementById('opc 1').value;
  preguntas.opc 2= document.getElementById('opc 2').value;
  preguntas.opc 3= document.getElementById('opc 3').value;
  preguntas.opc 4= document.getElementById('opc 4').value;
  preguntas.opc 5= document.getElementById('opc 5').value;
  preguntas.RC= document.getElementById('RC').value;
  preguntas.RE=' ';
  listadospreguntas();
  limpiarcajas();
}

function limpiarCajas(){ 
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
  salida+ ='<tr><td>'+preguntas.preg+'</td><td>'+preguntas.opc 1+'</td><td>'+preguntas.opc 2+ 
      preguntas.opc 3+'</td><td>'+preguntas.opc 4+'</td><td>'+preguntas.opc 5+'</td><td>'
      + preguntas.RC+'<td></td>'+preguntas.RE+'</td></tr>';
      document.getElementById('tronco').innerHTML=salida;

}
      
}
