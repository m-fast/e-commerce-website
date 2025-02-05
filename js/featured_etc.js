// Featured

function featuredd() {
  const featured = [
    {
      title: "Henly Shirt",
      sourceImg: "./img/product-8-1.jpg",
      sourceImg_2: "./img/product-8-2.jpg",
      price: 116,
      old_price: 200,
      off: 25,
      Availability: 8,
    },
    {
      title: "Glamora",
      sourceImg: "./img/product-1-1.jpg",
      sourceImg_2: "./img/product-1-2.jpg",
      price: 90,
      old_price: 150,
      off: 25,
      Availability: 3,
    },
    {
      title: "Sandal Shoes",
      sourceImg: "./img/product-10-1.jpg",
      sourceImg_2: "./img/product-10-2.jpg",
      price: 30,
      old_price: 120,
      off: 25,
      Availability: 25,
    },
    {
      title: "jump sult ",
      sourceImg: "./img/product-11-1.jpg",
      sourceImg_2: "./img/product-11-2.jpg",
      price: 130,
      old_price: 600,
      off: 25,
      Availability: 22,
    },
    {
      title: "Glamora",
      sourceImg: "./img/product-1-2.jpg",
      sourceImg_2: "./img/product-1-1.jpg",
      price: 90,
      old_price: 150,
      off: 25,
      Availability: 3,
    },
    {
      title: "black Shoes",
      sourceImg: "./img/product-3-1.jpg",
      sourceImg_2: "./img/product-3-2.jpg",
      price: 55,
      old_price: 160,
      off: 25,
      Availability: 2,
    },
    {
      title: "Urban Grove",
      sourceImg: "./img/product-2-2.jpg",
      sourceImg_2: "./img/product-2-1.jpg",
      price: 85,
      old_price: 135,
      off: 25,
      Availability: 5,
    },
    {
      title: "black bog",
      sourceImg: "./img/product-13-1.jpg",
      sourceImg_2: "./img/product-13-2.jpg",
      price: 60,
      old_price: 160,
      off: 25,
      Availability: 9,
    },
    {
      title: "Chic Aura",
      sourceImg: "./img/product-9-1.jpg",
      sourceImg_2: "./img/product-9-2.jpg",
      price: 50,
      old_price: 150,
      off: 25,
      Availability: 2,
    },
    {
      title: "Hats case Blue ",
      sourceImg: "./img/Hats/h-8.jpg",
      sourceImg_2: "./img/Hats/h-9.jpg",
      price: 130,
      old_price: 600,
      off: 25,
      Availability: 22,
    },
    {
      title: "Lux Avenue",
      sourceImg: "./img/product-12-2.jpg",
      sourceImg_2: "./img/product-12-1.jpg",
      price: 160,
      old_price: 550,
      off: 25,
      Availability: 8,
    },
    {
      title: "Sandal Shoes",
      sourceImg: "./img/sandal/s-4.jpg",
      sourceImg_2: "./img/sandal/s-5.jpg",
      price: 30,
      old_price: 120,
      off: 25,
      Availability: 25,
    },
  ];

  const container = document.getElementById("container");

  const container_btn = document.getElementById("containerbtn");
  container_btn.innerHTML = `<button class="bss" onclick="featured()">Featured</button>
        <button class="bss1 ms-2 " onclick="popular()">Popular</button>
        <button class="bss1 ms-2" onclick="newadded()">New added</button>`;
  container.innerHTML = "";
  featured.forEach((product) => {
    // sourceImg / title / price / old_price
    container.innerHTML += `
            <div class="col-md-3">
          <div class="card text-start">
            <img class="card-img-top" src="${product.sourceImg}" alt="Title" />
            <div class="card-body">
              <p>Clothing</p>
              <h4 class="card-title" style="font-family: Arbutus Slab, serif">
              ${product.title}
              </h4>
              <p class="card-text text-white offer">Sale</p>
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
              <svg
                width="19"
                height="17"
                viewBox="0 0 19 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.24494 0L11.8641 5.63991L18.0374 6.38809L13.4829 10.6219L14.679 16.7243L9.24494 13.701L3.8109 16.7243L5.00697 10.6219L0.452479 6.38809L6.62573 5.63991L9.24494 0Z"
                  fill="#FFC633"
                />
              </svg>
              <svg
                width="19"
                height="17"
                viewBox="0 0 19 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.24494 0L11.8641 5.63991L18.0374 6.38809L13.4829 10.6219L14.679 16.7243L9.24494 13.701L3.8109 16.7243L5.00697 10.6219L0.452479 6.38809L6.62573 5.63991L9.24494 0Z"
                  fill="#FFC633"
                />
              </svg>
              <svg
                width="19"
                height="17"
                viewBox="0 0 19 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.24494 0L11.8641 5.63991L18.0374 6.38809L13.4829 10.6219L14.679 16.7243L9.24494 13.701L3.8109 16.7243L5.00697 10.6219L0.452479 6.38809L6.62573 5.63991L9.24494 0Z"
                  fill="#FFC633"
                />
              </svg>
              <svg
                width="19"
                height="17"
                viewBox="0 0 19 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.24494 0L11.8641 5.63991L18.0374 6.38809L13.4829 10.6219L14.679 16.7243L9.24494 13.701L3.8109 16.7243L5.00697 10.6219L0.452479 6.38809L6.62573 5.63991L9.24494 0Z"
                  fill="#FFC633"
                />
              </svg>
              <svg
                width="19"
                height="17"
                viewBox="0 0 19 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.24494 0L11.8641 5.63991L18.0374 6.38809L13.4829 10.6219L14.679 16.7243L9.24494 13.701L3.8109 16.7243L5.00697 10.6219L0.452479 6.38809L6.62573 5.63991L9.24494 0Z"
                  fill="#FFC633"
                />
              </svg>
              <div class="div my-2 mt-4">
                <a class="buttton text-white" href="">Add To Cart</a>
              </div>
            </div>
          </div>
        </div>
            `;
  });
}

const popularbtn = document.getElementById("popularbtn");
popularbtn.addEventListener("click", popular);
const newaddedbtn = document.getElementById("newaddedbtn");
newaddedbtn.addEventListener("click", newadded);
const featuredbtn = document.getElementById("featuredbtn");
featuredbtn.addEventListener("click", featuredd);

function popular() {
  const poupular = [
    {
      title: "Chic Aura",
      sourceImg: "./img/product-9-1.jpg",
      sourceImg_2: "./img/product-9-2.jpg",
      price: 50,
      old_price: 150,
      off: 25,
      Availability: 2,
    },
    {
      title: "Glamora",
      sourceImg: "./img/product-1-1.jpg",
      sourceImg_2: "./img/product-1-2.jpg",
      price: 90,
      old_price: 150,
      off: 25,
      Availability: 3,
    },
    {
      title: "Normal Sandal",
      sourceImg: "./img/product-10-1.jpg",
      sourceImg_2: "./img/product-10-2.jpg",
      price: 30,
      old_price: 120,
      off: 25,
      Availability: 25,
    },
    {
      title: "jump sult ",
      sourceImg: "./img/product-11-1.jpg",
      sourceImg_2: "./img/product-11-2.jpg",
      price: 130,
      old_price: 600,
      off: 25,
      Availability: 22,
    },

    {
      title: "Urban Grove",
      sourceImg: "./img/product-2-2.jpg",
      sourceImg_2: "./img/product-2-1.jpg",
      price: 85,
      old_price: 135,
      off: 25,
      Availability: 5,
    },

    {
      title: "Chic Aura",
      sourceImg: "./img/product-9-1.jpg",
      sourceImg_2: "./img/product-9-2.jpg",
      price: 50,
      old_price: 150,
      off: 25,
      Availability: 2,
    },
    {
      title: "Hats case Blue ",
      sourceImg: "./img/Hats/h-2.jpg",
      sourceImg_2: "./img/Hats/h-3.jpg",
      price: 130,
      old_price: 600,
      off: 25,
      Availability: 22,
    },
    {
      title: "Sandal Shoes",
      sourceImg: "./img/sandal/s-9.jpg",
      sourceImg_2: "./img/sandal/s-8.jpg",
      price: 30,
      old_price: 120,
      off: 25,
      Availability: 25,
    },
  ];

  const container = document.getElementById("container");
  const container_btn = document.getElementById("containerbtn");
  container_btn.innerHTML = `<button class="bss1" onclick="featuredd()">Featured</button>
        <button class="bss ms-2 " onclick="popular()">Popular</button>
        <button class="bss1 ms-2" onclick="newadded()">New added</button>`;
  container.innerHTML = "";
  poupular.forEach((product) => {
    container.innerHTML += `
             <div class="col-md-3 pt-4">
          <div class="card text-start">
            <img class="card-img-top" src="${product.sourceImg}" alt="Title" />
            <div class="card-body">
              <p>Clothing</p>
              <h4 class="card-title" style="font-family: Arbutus Slab, serif">
              ${product.title}
              </h4>
              <p class="card-text text-white offer">Sale</p>
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
              <svg
                width="19"
                height="17"
                viewBox="0 0 19 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.24494 0L11.8641 5.63991L18.0374 6.38809L13.4829 10.6219L14.679 16.7243L9.24494 13.701L3.8109 16.7243L5.00697 10.6219L0.452479 6.38809L6.62573 5.63991L9.24494 0Z"
                  fill="#FFC633"
                />
              </svg>
              <svg
                width="19"
                height="17"
                viewBox="0 0 19 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.24494 0L11.8641 5.63991L18.0374 6.38809L13.4829 10.6219L14.679 16.7243L9.24494 13.701L3.8109 16.7243L5.00697 10.6219L0.452479 6.38809L6.62573 5.63991L9.24494 0Z"
                  fill="#FFC633"
                />
              </svg>
              <svg
                width="19"
                height="17"
                viewBox="0 0 19 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.24494 0L11.8641 5.63991L18.0374 6.38809L13.4829 10.6219L14.679 16.7243L9.24494 13.701L3.8109 16.7243L5.00697 10.6219L0.452479 6.38809L6.62573 5.63991L9.24494 0Z"
                  fill="#FFC633"
                />
              </svg>
              <svg
                width="19"
                height="17"
                viewBox="0 0 19 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.24494 0L11.8641 5.63991L18.0374 6.38809L13.4829 10.6219L14.679 16.7243L9.24494 13.701L3.8109 16.7243L5.00697 10.6219L0.452479 6.38809L6.62573 5.63991L9.24494 0Z"
                  fill="#FFC633"
                />
              </svg>
              <svg
                width="19"
                height="17"
                viewBox="0 0 19 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.24494 0L11.8641 5.63991L18.0374 6.38809L13.4829 10.6219L14.679 16.7243L9.24494 13.701L3.8109 16.7243L5.00697 10.6219L0.452479 6.38809L6.62573 5.63991L9.24494 0Z"
                  fill="#FFC633"
                />
              </svg>
              <div class="div my-2 mt-4">
                <a class="buttton text-white" href="">Add To Cart</a>
              </div>
            </div>
          </div>
        </div>
           `;
  });
}

// new added
const Newadded = [
  {
    title: "scraf cop heaven",
    sourceImg: "./img/Scarfs/s-2.jpg",
    sourceImg_2: "./img/Scarfs/s-3.jpg",
    price: 60,
    old_price: 160,
    off: 25,
    Availability: 9,
  },
  {
    title: "Henly Shirt",
    sourceImg: "./img/product-8-1.jpg",
    sourceImg_2: "./img/product-8-2.jpg",
    price: 116,
    old_price: 200,
    off: 25,
    Availability: 8,
  },
  {
    title: "Urban Grove",
    sourceImg: "./img/product-2-1.jpg",
    sourceImg_2: "./img/product-2-2.jpg",
    price: 85,
    old_price: 135,
    off: 25,
    Availability: 5,
  },
  {
    title: "Normal Sandal",
    sourceImg: "./img/product-10-1.jpg",
    sourceImg_2: "./img/product-10-2.jpg",
    price: 30,
    old_price: 120,
    off: 25,
    Availability: 25,
  },
  {
    title: "jump sult ",
    sourceImg: "./img/product-11-1.jpg",
    sourceImg_2: "./img/product-11-2.jpg",
    price: 130,
    old_price: 600,
    off: 25,
    Availability: 22,
  },

  {
    title: "Urban moon",
    sourceImg: "./img/product-6-1.jpg",
    sourceImg_2: "./img/product-6-2.jpg",
    price: 200,
    old_price: 300,
    off: 25,
    Availability: 3,
  },

  {
    title: "Chic Aura",
    sourceImg: "./img/product-9-1.jpg",
    sourceImg_2: "./img/product-9-2.jpg",
    price: 50,
    old_price: 150,
    off: 25,
    Availability: 2,
  },

  {
    title: "Sandal Pro ",
    sourceImg: "./img/sandal/s-5.jpg",
    sourceImg_2: "./img/sandal/s-6.jpg",
    price: 30,
    old_price: 120,
    off: 25,
    Availability: 25,
  },
];

function newadded() {
  const container_btn = document.getElementById("containerbtn");
  container_btn.innerHTML = `<button class="bss1" onclick="featuredd()">Featured</button>
        <button class="bss1 ms-2 " onclick="popular()">Popular</button>
        <button class="bss ms-2" onclick="newadded()">New added</button>`;
  const container = document.getElementById("container");
  container.innerHTML = "";
  Newadded.forEach((product) => {
    container.innerHTML += `
            <div class="col-md-3 pt-4">
          <div class="card text-start">
            <img class="card-img-top" src="${product.sourceImg}" alt="Title" />
            <div class="card-body">
              <p>Clothing</p>
              <h4 class="card-title" style="font-family: Arbutus Slab, serif">
              ${product.title}
              </h4>
              <p class="card-text text-white offer">Sale</p>
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
              <svg
                width="19"
                height="17"
                viewBox="0 0 19 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.24494 0L11.8641 5.63991L18.0374 6.38809L13.4829 10.6219L14.679 16.7243L9.24494 13.701L3.8109 16.7243L5.00697 10.6219L0.452479 6.38809L6.62573 5.63991L9.24494 0Z"
                  fill="#FFC633"
                />
              </svg>
              <svg
                width="19"
                height="17"
                viewBox="0 0 19 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.24494 0L11.8641 5.63991L18.0374 6.38809L13.4829 10.6219L14.679 16.7243L9.24494 13.701L3.8109 16.7243L5.00697 10.6219L0.452479 6.38809L6.62573 5.63991L9.24494 0Z"
                  fill="#FFC633"
                />
              </svg>
              <svg
                width="19"
                height="17"
                viewBox="0 0 19 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.24494 0L11.8641 5.63991L18.0374 6.38809L13.4829 10.6219L14.679 16.7243L9.24494 13.701L3.8109 16.7243L5.00697 10.6219L0.452479 6.38809L6.62573 5.63991L9.24494 0Z"
                  fill="#FFC633"
                />
              </svg>
              <svg
                width="19"
                height="17"
                viewBox="0 0 19 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.24494 0L11.8641 5.63991L18.0374 6.38809L13.4829 10.6219L14.679 16.7243L9.24494 13.701L3.8109 16.7243L5.00697 10.6219L0.452479 6.38809L6.62573 5.63991L9.24494 0Z"
                  fill="#FFC633"
                />
              </svg>
              <svg
                width="19"
                height="17"
                viewBox="0 0 19 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.24494 0L11.8641 5.63991L18.0374 6.38809L13.4829 10.6219L14.679 16.7243L9.24494 13.701L3.8109 16.7243L5.00697 10.6219L0.452479 6.38809L6.62573 5.63991L9.24494 0Z"
                  fill="#FFC633"
                />
              </svg>
              <div class="div my-2 mt-4">
                <a class="buttton text-white" href="">Add To Cart</a>
              </div>
            </div>
          </div>
        </div>
           `;
  });
}
featuredd();
