let loading = false
var lod = () => {
  if (!loading) {
    l = document.getElementById("l")
    load = document.createElement("div")
    load.setAttribute("id",'loader-btn')
    load.className = "loader-btn"
    l.appendChild(load)
    loading = true
  }
}

