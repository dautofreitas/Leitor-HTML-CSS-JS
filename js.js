var artigo = document.getElementById("texto");
var leitorDeCSV = new FileReader();



function pegaCSV(inputFile) {
     var file = inputFile.files[0];
     leitorDeCSV.readAsText(file);
}


	
window.onload = function init() {
    leitorDeCSV.onload = adicionaTexto;
}



/*function leCSV(evt) {
 
  var fileArr = evt.target.result.split('\n');
  var strDiv = '<table>';
 
  for (var i=0; i<fileArr.length; i++) {
       strDiv += '<tr>';
       var fileLine = fileArr[i].split(',');
           for (var j=0; j<fileLine.length; j++) {
                strDiv += '<td>'+fileLine[j].trim()+'</td>';
      }
      strDiv += '</tr>';
  }
 
      strDiv += '</table>';
      var CSVsaida = document.getElementById('CSVsaida');
      CSVsaida.innerHTML = strDiv;
}


*/



function adicionaTexto(event)
{
 
  location.reload;

  var fileArr = retornaLinhas(event.target.result);

  for (var cont = 0;cont < fileArr.length; cont++ )
  {
    if (fileArr[cont] !== '')
    {
      var elemento  = document.createElement("p");
      elemento.innerHTML = fileArr[cont];
      artigo.appendChild(elemento);  
    }
    
  }
  
}


function retornaLinhas(file)
{
   var fileArr = file.split('\n');

  return fileArr;
}

function fechar()
{
}
