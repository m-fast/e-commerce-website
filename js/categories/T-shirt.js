const T_Shirts = [
    {
      title: "Henly Shirt",
      sourceImg: "../img/product-8-1.jpg",
      sourceImg_2: "../img/product-8-2.jpg",
      price: 116,
      old_price: 200,
      off: 25,
      Availability: 8,
    },
    {
      title: "Glamora",
      sourceImg: "../img/product-1-1.jpg",
      sourceImg_2: "../img/product-1-2.jpg",
      price: 90,
      old_price: 150,
      off: 25,
      Availability: 3,
    },
    {
      title: "Urban Grove",
      sourceImg: "../img/product-2-1.jpg",
      sourceImg_2: "../img/product-2-2.jpg",
      price: 85,
      old_price: 135,
      off: 25,
      Availability: 5,
    },
    {
      title: "Urban Elan",
      sourceImg: "../img/product-2-1.jpg",
      sourceImg_2: "../img/product-2-2.jpg",
      price: 50,
      old_price: 100,
      off: 25,
      Availability: 9,
    },
    {
      title: "Urban moon",
      sourceImg: "../img/product-6-1.jpg",
      sourceImg_2: "../img/product-6-2.jpg",
      price: 200,
      old_price: 300,
      off: 25,
      Availability: 3,
    },
    {
      title: "Chic Aura",
      sourceImg: "../img/product-9-1.jpg",
      sourceImg_2: "../img/product-9-2.jpg",
      price: 50,
      old_price: 150,
      off: 25,
      Availability: 2,
    },
    {
      title: "Lux Avenue",
      sourceImg: "../img/product-12-1.jpg",
      sourceImg_2: "../img/product-12-2.jpg",
      price: 160,
      old_price: 550,
      off: 25,
      Availability: 8,
    },
  ];


const container = document.getElementById("container");

T_Shirts.forEach(product => {
    container.innerHTML += `
            <a class="col-md-3" href="../html filess/servicePage.html">
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