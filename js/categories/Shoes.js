// shoeses
const shoes = [
    {
      title: "black Shoes 1",
      sourceImg: "../img/product-3-1.jpg",
      sourceImg_2: "../img/product-3-2.jpg",
      price: 55,
      old_price: 160,
      off: 25,
      Availability: 2,
    },
    {
      title: "Nike shoes 2",
      sourceImg: "../img/Nike/s-1.jpg",
      sourceImg_2: "../img/Nike/s-2.jpg",
      price: 45,
      old_price: 280,
      off: 25,
      Availability: 2,
    },
    {
      title: "Nike shoes 3",
      sourceImg: "../img/Nike/s-2.jpg",
      sourceImg_2: "../img/Nike/s-3.jpg",
      price: 35,
      old_price: 130.5,
      off: 25,
      Availability: 2,
    },
    {
      title: "Nike shoes 4",
      sourceImg: "../img/Nike/s-3.jpg",
      sourceImg_2: "../img/Nike/s-4.jpg",
      price: 99,
      old_price: 399,
      off: 25,
      Availability: 2,
    },
    {
      title: "Nike shoes 5",
      sourceImg: "../img/Nike/s-4.jpg",
      sourceImg_2: "../img/Nike/s-5.jpg",
      price: 74,
      old_price: 148,
      off: 25,
      Availability: 2,
    },
    {
      title: "Nike shoes 6",
      sourceImg: "../img/Nike/s-5.jpg",
      sourceImg_2: "../img/Nike/s-6.jpg",
      price: 42.5,
      old_price: 97,
      off: 25,
      Availability: 2,
    },
    {
      title: "Nike shoes 7",
      sourceImg: "../img/Nike/s-6.jpg",
      sourceImg_2: "../img/Nike/s-7.jpg",
      price: 65,
      old_price: 240,
      off: 25,
      Availability: 2,
    },
    {
      title: "Nike shoes 8",
      sourceImg: "../img/Nike/s-7.jpg",
      sourceImg_2: "../img/Nike/s-8.jpg",
      price: 45,
      old_price: 90,
      off: 25,
      Availability: 2,
    },
    {
      title: "Nike shoes 9",
      sourceImg: "../img/Nike/s-8.jpg",
      sourceImg_2: "../img/Nike/s-9.jpg",
      price: 45,
      old_price: 124,
      off: 25,
      Availability: 2,
    },
    {
      title: "Nike shoes 10",
      sourceImg: "../img/Nike/s-9.jpg",
      sourceImg_2: "../img/Nike/s-8.jpg",
      price: 33,
      old_price: 233,
      off: 25,
      Availability: 2,
    },
  ];

const container = document.getElementById("container");

shoes.forEach(product => {
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