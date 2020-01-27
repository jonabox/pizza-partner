const menu = require("./menu copy.json");
let realMenu = {};
for (category in menu) {
  let items = menu[category];
  for (item of items) {
    realItem = {};
    let name = Object.keys(item)[0];
    let code = item[name];
    let url =
      "https://cache.dominos.com/olo/6_9_2/assets/build/market/US/_en/images/img/products/larges/" +
      code +
      ".jpg";
    // realMenu[category].push({"name": name, "code": code, "imageURL": url }); //use this for menu.json
    realMenu[code] = { name: name, code: code, price: 5, count: 0 }; //use this for cart.json
  }
}

console.log(JSON.stringify(realMenu));
