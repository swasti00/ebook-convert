
let created = false;
function createbutton() {
  var btn = document.getElementById("createbtn")
  load = document.getElementById('loader')
  load.remove();
  if (!created) {
    var epub = document.createElement('button');
    epub.className = "epub"
    epub.innerHTML = ".epub"
    btn.appendChild(epub);
    epub.onclick = function timeout(){
      lod()
      var format = "epub"
      convert(format);
      setTimeout(function() {{ downloadbtn() }},30000)
    }
      var mobi = document.createElement('button');
      mobi.innerHTML = ".mobi"
      mobi.className = "mobi"
      btn.appendChild(mobi);
      mobi.onclick = function timeout(){
        lod()
        var format = "mobi"
        convert(format);
        setTimeout(function() {{ downloadbtn() }},30000)
      }
      
      var azw = document.createElement('button');
      azw.innerHTML = ".azw"
      azw.className = "azw"
      btn.appendChild(azw);
      azw.onclick = function timeout(){
        lod()
        var format = "azw3"
        convert(format);
        setTimeout(function() {{ downloadbtn() }},30000)
      }
      
      created = true;
    }
}

