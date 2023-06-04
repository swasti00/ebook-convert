const thisform = document.getElementById('form');
thisform.addEventListener('change', async function (e) {
  //loading
  load = document.getElementById("load")
  loader = document.createElement('div')
  loader.setAttribute("id",'loader')
  loader.className = "loader"
  load.appendChild(loader)

  // Firebase Storage
  var file = e.target.files[0];
  var storageRef = firebase.storage().ref("pdf's/"+file.name);
  var collectionRef = firebase.firestore().collection("pdf's")
  var task = storageRef.put(file);
  task.on('state_changed', function progress(snapshot) {
  var percentage= (snapshot.bytesTransferred/snapshot.totalBytes) *100;
  console.log(percentage)
  },function (err) {
    console.log(err);

  },  async () => {
    const url = await storageRef.getDownloadURL();
    await collectionRef.add({ url })
  });

  e.preventDefault();
  var u = document.getElementById("url").value
  let response = await fetch(u,{
    method: 'POST',
    body: new FormData(thisform)
  });
  let result = await response.json();
  console.log(result)
  createbutton();
});
