const callBtn = document.querySelector(".call");

const result = document.querySelector(".result");

var URL = "https://unitube-server.herokuapp.com/playlists";

callBtn.addEventListener("click", () => {
  fetch(URL)
    .then((res) => res.json())
    .then((data) => {
      //console.log(data.success);
      if (data.success) {
        result.innerHTML = "Authorized User. As " + data.message + ".";
      } else {
        result.innerHTML = "Unauthorized User. As " + data.message + ".";
      }
    });
});
