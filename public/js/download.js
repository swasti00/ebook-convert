let download = false;
var downloadbtn = function() {
  ld = document.getElementById("loader-btn")
  ld.remove();
  const btn = document.getElementById("btn");
  if (!download) {
      var button = document.createElement('button');
      button.innerHTML = "Download"
      button.id = "down"
      button.className = "downloadbtn"
      btn.appendChild(button);
    }
    download=true
}
