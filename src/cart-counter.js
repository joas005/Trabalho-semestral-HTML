const addToCart = () => {
  const addButton = document.querySelectorAll(".addToCart");
  const removeButton = document.querySelector(".remove__button");
  const value = document.querySelector(".cart__item-counter");
  const cart = document.querySelector(".cart");
  const modal = document.querySelector("dialog");
  const modalButton = document.querySelector(".close__modal");

  let count = 0;

  addButton.forEach((button) => {
    button.addEventListener("click", () => {
      count += 1;
      updateValue();
      modal.showModal();
      cart.style.position = "fixed";
      cart.style.right = "80px";
      cart.style.boxShadow = "4px 4px 5px 0px rgba(235,68,90,1";
      if (modal.showModal) {
        setTimeout(() => {
            modal.close();
          }, 3000);
      } 
    });
  });

  removeButton.addEventListener("click", () => {
    count -= 1;
    updateValue();
    modal.close();
  });

  const updateValue = () => {
    value.innerHTML = count;
  };

  modalButton.addEventListener("click", () => {
    modal.close();
  });
};

export default addToCart;
