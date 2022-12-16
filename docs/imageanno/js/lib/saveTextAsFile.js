  function saveTextAsFile(tosave,fileext,filename)
  {
      var a = document.createElement('a');
      a.style = "display: none";  
      var blob= new Blob([tosave], {type:'text/plain'});
      var url = window.URL.createObjectURL(blob);
      var filename = filename+fileext;
      a.href = url;
      a.download = filename;
      document.body.appendChild(a);
      a.click();
      setTimeout(function(){
          document.body.removeChild(a);
          window.URL.revokeObjectURL(url);  
      }, 1000);
  }