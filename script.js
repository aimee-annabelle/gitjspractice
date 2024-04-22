function attachBuyEvents() {
  let buttons = document.querySelector("#products");
  
  buttons.addEventListener("click", function(evt) {
    if (evt.target.nodeName === "BUTTON") {
      console.log(evt.currentTarget);
    }
  }
  );
}
attachBuyEvents();
