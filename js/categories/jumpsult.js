// jump sult
const jumpsult = [
    {
      title: "jump sult1 ",
      sourceImg: "../img/product-11-1.jpg",
      sourceImg_2: "../img/product-11-2.jpg",
      price: 212,
      old_price: 4114,
      off: 25,
      Availability: 22,
    },
    {
      title: "jump sult2 ",
      sourceImg: "../img/product-11-1.jpg",
      sourceImg_2: "../img/product-11-2.jpg",
      price: 400,
      old_price: 900,
      off: 25,
      Availability: 22,
    },
    {
      title: "jump sult3 ",
      sourceImg: "../img/product-11-1.jpg",
      sourceImg_2: "../img/product-11-2.jpg",
      price: 2000,
      old_price: 6000,
      off: 25,
      Availability: 22,
    },
    {
      title: "jump sult4 ",
      sourceImg: "../img/product-11-1.jpg",
      sourceImg_2: "../img/product-11-2.jpg",
      price: 1000,
      old_price: 4000,
      off: 25,
      Availability: 22,
    },
    {
      title: "jump sult5 ",
      sourceImg: "../img/product-11-1.jpg",
      sourceImg_2: "../img/product-11-2.jpg",
      price: 350,
      old_price: 700,
      off: 25,
      Availability: 22,
    },
    {
      title: "jump sult6 ",
      sourceImg: "../img/product-11-1.jpg",
      sourceImg_2: "../img/product-11-2.jpg",
      price: 500,
      old_price: 2000,
      off: 25,
      Availability: 22,
    },
    {
      title: "jump sult7 ",
      sourceImg: "../img/product-11-1.jpg",
      sourceImg_2: "../img/product-11-2.jpg",
      price: 100,
      old_price: 400,
      off: 25,
      Availability: 22,
    },
    {
      title: "jump sult8 ",
      sourceImg: "../img/product-11-1.jpg",
      sourceImg_2: "../img/product-11-2.jpg",
      price: 100,
      old_price: 500,
      off: 25,
      Availability: 22,
    },
    {
      title: "jump sult9 ",
      sourceImg: "../img/product-11-1.jpg",
      sourceImg_2: "../img/product-11-2.jpg",
      price: 50,
      old_price: 200,
      off: 25,
      Availability: 22,
    },
  ];

  const container = document.getElementById("container")

  jumpsult.forEach(product => {
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