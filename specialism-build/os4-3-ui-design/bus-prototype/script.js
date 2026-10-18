// A clickable prototype only needs to show and hide screens.
function show(id) {
  document.getElementById("home").hidden = true;
  document.getElementById("list").hidden = true;
  document.getElementById(id).hidden = false;
}
document.getElementById("go-list").addEventListener("click", function () { show("list"); });
// Make a Back button work too.
