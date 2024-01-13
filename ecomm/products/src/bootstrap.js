import faker from "faker";

const mount = (el) => {
  let products = "";

  for (let i = 0; i < 3; i++) {
    const name = faker.commerce.productName();

    products += `<div>${name}</div>`;
  }

  el.innerHTML = products;
};

// context #1
// running this file in dev in isolation
// we are using our local index.html file
// which definitely has an element with an id of 'dev-products'
// we want to immediately render our app into that element
if (process.env.NODE_ENV === "development") {
  const el = document.querySelector("#dev-products");

  // assuming our container doesnt have an element with id 'dev-products'...
  if (el) {
    // we are probably running in isolation
    mount(el);
  }
}
// context #2
// we are running this file in development or production
// through the CONTAINER app
// no guarantee that an element with an id of 'dev-products' exists
// we DO NOT WANT try to immediately render the app
export { mount };
