window.onload = function() {
  let i = 0;
  addmouse.onclick = function() {
    // Get the current value and delete it
    let nameInput = window.nombre;
    let name = nameInput.value;
    if (name.length < 2) {
      let msg = "Tienes que poner un nombre al raton de dos letras minimo";
      console.error(msg);
      //alert(msg); //warning, alert para JS
      return;
    }

    nameInput.value = "";

    // Create an element outside DOM
    let mouse = document.createElement("div");
    mouse.className = "mouse";
    mouse.innerText = "Raton " + i + " - " + name;

    let container = document.getElementsByClassName("container")[0];

    // Delete event
    let j = i;
    mouse.onclick = function(e) {
      console.log(e);
      console.log("Elimina el mouse: " + j);
      //container.childNodes[j].remove();
      e.target.remove();
    };

    // Add element to container
    container.prepend(mouse);
    console.log("added mouse", mouse);

    i++;
  };
};
