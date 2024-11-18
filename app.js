const products = [
  { name: "Wireless Earbuds", price: 29.99 },
  { name: "Smartphone Stand", price: 12.99 },
  { name: "Bluetooth Speaker", price: 49.99 },
  { name: "Portable Charger", price: 19.99 },
  { name: "LED Desk Lamp", price: 24.99 },
  { name: "Stainless Steel Water Bottle", price: 15.99 },
  { name: "Noise Cancelling Headphones", price: 89.99 },
  { name: "Fitness Tracker", price: 39.99 },
  { name: "Electric Toothbrush", price: 59.99 },
  { name: "Smart Light Bulb", price: 9.99 },
  { name: "Wireless Keyboard", price: 34.99 },
  { name: "Stainless Steel Travel Mug", price: 14.99 },
  { name: "USB-C Hub", price: 27.99 },
  { name: "Laptop Cooling Pad", price: 22.49 },
  { name: "4K Webcam", price: 59.99 },
  { name: "Gaming Mouse", price: 29.99 },
  { name: "Eco-Friendly Notebook", price: 7.49 },
  { name: "Portable Blender", price: 39.99 },
  { name: "Phone Tripod", price: 18.99 },
  { name: "Adjustable Dumbbells", price: 89.99 },
];

let filteredProducts = products;
const containerEl = document.getElementById("container");
// const searchBtn = document.querySelector('#search-container > button');
// const inputEl = document.querySelector('#search-container > input')
// let cart = 0

function render() {
  containerEl.innerHTML = "";
  filteredProducts.forEach((student) => {
    containerEl.innerHTML += `
    <div class="student" data-name="${student.name}">
      <div>${student.name}</div>
      <div>${student.price}</div>
    </div>`;
  });
}

render();
