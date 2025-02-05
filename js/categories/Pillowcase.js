// pillow cases
const pillowcases = [
    {
      title: "pillow case Blue ",
      sourceImg: "../img/pillowcases/p-1.jpg",
      sourceImg_2: "../img/pillowcases/p-2.jpg",
      price: 130,
      old_price: 600,
      off: 25,
      Availability: 22,
    },
    {
      title: "pillow case black ",
      sourceImg: "../img/pillowcases/p-2.jpg",
      sourceImg_2: "../img/pillowcases/p-3.jpg",
      price: 130,
      old_price: 600,
      off: 25,
      Availability: 22,
    },
    {
      title: "pillow case lion ",
      sourceImg: "../img/pillowcases/p-3.jpg",
      sourceImg_2: "../img/pillowcases/p-4.png",
      price: 40,
      old_price: 240,
      off: 25,
      Availability: 12,
    },
    {
      title: "pillow case fight ",
      sourceImg: "../img/pillowcases/p-4.png",
      sourceImg_2: "../img/pillowcases/p-5.jpg",
      price: 140,
      old_price: 600,
      off: 25,
      Availability: 13,
    },
    {
      title: "pillow case yellow ",
      sourceImg: "../img/pillowcases/p-5.jpg",
      sourceImg_2: "../img/pillowcases/p-6.jpg",
      price: 120,
      old_price: 600,
      off: 25,
      Availability: 42,
    },
    {
      title: "pillow case white ",
      sourceImg: "../img/pillowcases/p-6.jpg",
      sourceImg_2: "../img/pillowcases/p-7.jpg",
      price: 20,
      old_price: 100,
      off: 25,
      Availability: 29,
    },
    {
      title: "pillow case orange ",
      sourceImg: "../img/pillowcases/p-7.jpg",
      sourceImg_2: "../img/pillowcases/p-8.jpg",
      price: 100,
      old_price: 400,
      off: 25,
      Availability: 228,
    },
    {
      title: "pillow case fanta ",
      sourceImg: "../img/pillowcases/p-8.jpg",
      sourceImg_2: "../img/pillowcases/p-9.jpg",
      price: 30,
      old_price: 120,
      off: 25,
      Availability: 212,
    },
    {
      title: "pillow case brown ",
      sourceImg: "../img/pillowcases/p-9.jpg",
      sourceImg_2: "../img/pillowcases/p-8.jpg",
      price: 15,
      old_price: 60,
      off: 25,
      Availability: 223,
    },
  ];

const container = document.getElementById("container")

pillowcases.forEach(product => {
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