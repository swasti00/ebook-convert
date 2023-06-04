const headers = {
  "Content-Type": "application/json",
  Accept: "application/json",
  Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiZWJvb2siLCJpZCI6IjYyZmUwZDJiM2YxNTIwMDAxMzQxMGJkYyIsImludGVyZmFjZSI6ImFwaSIsInJvbGUiOiJ1c2VyIiwiZW1haWwiOiJzejIyQGdtYWlsLmNvbSIsInBlcm1pc3Npb25zIjpbXSwiaWF0IjoxNjYwODE2NzIzLCJleHAiOjIxMzQxODA3MjN9.2yeFTb1Dbe9RX0AOmszMucI-Wj-MAERzpuMKWdCwCOU`,
};

const fetchapi = () => {
    fetch("https://api.freeconvert.com/v1/process/import/upload", {
    method: "POST",
    headers: headers,
    })
    .then(function (res) {
      return res.json();
    })
    .then(function (body) {

        task = body
        url = task["result"]["form"]["url"]
        expires = task["result"]["form"]["parameters"]["expires"]
        size_limit = task["result"]["form"]["parameters"]["size_limit"]
        signature = task["result"]["form"]["parameters"]["signature"]
        id = task["id"]
        document.getElementById("expires").value = expires;
        document.getElementById("size_limit").value = size_limit;
        document.getElementById("signature").value = signature;
        document.getElementById("url").value = url;
        document.getElementById("id").value = id;
    });
}
fetchapi();

