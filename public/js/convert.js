const convert = (format) => {
    var id = document.getElementById("id").value
    const inputBody = {
      input: id,
      input_format: "pdf",
      output_format: format,
    };
    var input = JSON.stringify(inputBody)
    fetch('https://api.freeconvert.com/v1/process/convert',
    {
      method: 'POST',
      body: input,
      headers: headers
    })
    .then(response => {
     return response.json()
    })
    .then (function(body) {
        t = body
        server = t["dependsOn"][0]["server"]
        basename = t["dependsOn"][0]["output"]["baseName"]
        id = t["id"]
        link = "https://"+server+"/task/"+id+"/"+basename+"."+format
        document.getElementById("btn").href =link
    });
      
}


