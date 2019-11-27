//console.log("Loading....");
window.onload = function() {
  //console.log("Hola");
  //console.log(mouses);

  dog.onclick = function() {
    // Add
    let mouses = document.querySelectorAll("div.mouse");
    for (let i = 0; i < mouses.length; i++) {
      let el = mouses[i];
      el.innerText = "Mouse" + i;
      el.style.border = "1px solid red";
      el.style.padding = "10px";
    }
  };
};
