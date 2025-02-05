// Sandal
const sandal = [
  {
    title: "Sandal Colorful",
    sourceImg: "../img/product-10-1.jpg",
    sourceImg_2: "../img/product-10-2.jpg",
    price: 25,
    old_price: 100,
    off: 25,
    Availability: 25,
  },
  {
    title: "Sandal Bluey",
    sourceImg: "../img/sandal/s-1.jpg",
    sourceImg_2: "../img/sandal/s-2.jpg",
    price: 75,
    old_price: 300,
    off: 25,
    Availability: 25,
  },
  {
    title: "Sandal dbaba",
    sourceImg: "../img/sandal/s-2.jpg",
    sourceImg_2: "../img/sandal/s-3.jpg",
    price: 32.5,
    old_price: 125,
    off: 25,
    Availability: 25,
  },
  {
    title: "Blacky Sandal ",
    sourceImg: "../img/sandal/s-3.jpg",
    sourceImg_2: "../img/sandal/s-4.jpg",
    price: 45,
    old_price: 244,
    off: 25,
    Availability: 25,
  },
  {
    title: "Very Blacky Sandal ",
    sourceImg: "../img/sandal/s-4.jpg",
    sourceImg_2: "../img/sandal/s-5.jpg",
    price: 30,
    old_price: 120,
    off: 25,
    Availability: 25,
  },
  {
    title: "Normal Sandal ",
    sourceImg: "../img/sandal/s-5.jpg",
    sourceImg_2: "../img/sandal/s-6.jpg",
    price: 26.9,
    old_price: 99,
    off: 25,
    Availability: 25,
  },
  {
    title: "Fashion Sandal ",
    sourceImg: "../img/sandal/s-6.jpg",
    sourceImg_2: "../img/sandal/s-7.jpg",
    price: 22.5,
    old_price: 88,
    off: 25,
    Availability: 25,
  },
  {
    title: "Pro Sandal",
    sourceImg: "../img/sandal/s-7.jpg",
    sourceImg_2: "../img/sandal/s-8.jpg",
    price: 20,
    old_price: 80,
    off: 25,
    Availability: 25,
  },
  {
    title: "Pro Max Sandal ",
    sourceImg: "../img/sandal/s-8.jpg",
    sourceImg_2: "../img/sandal/s-9.jpg",
    price: 55,
    old_price: 225,
    off: 25,
    Availability: 25,
  },
  {
    title: "Sandalyta",
    sourceImg: "../img/sandal/s-9.jpg",
    sourceImg_2: "../img/sandal/s-8.jpg",
    price: 40,
    old_price: 180,
    off: 25,
    Availability: 25,
  },
];

const container = document.getElementById("container")
sandal.forEach(product => {
  container.innerHTML += `
            <a class="col-md-3" href="/cetegories/Hats.html">
            <div class="card text-start">
              <img
                class="card-img-top"
                src="${product.sourceImg}"
                alt="Title"
              />
              <div class="card-body">
                <p>Clothing</p>
                <h4 class="card-title">${product.title}</h4>
                <p class="card-text">Body</p>
                <p>
                  <span
                    style="
                      color: rgb(25, 179, 148);
                      font-size: 20px;
                      font-weight: bold;
                    "
                    >$${product.price}</span
                  >
                  <span style="text-decoration: line-through">$${product.old_price}</span>
                </p>
              </div>
            </div>
          </a>`
});
