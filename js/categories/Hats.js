// Hats

const hats = [
    {
      title: "Hats case Blue ",
      sourceImg: "../img/Hats/h-1.jpg",
      sourceImg_2: "../img/Hats/h-2.jpg",
      price: 130,
      old_price: 600,
      off: 25,
      Availability: 22,
    },
    {
      title: "Hats case black ",
      sourceImg: "../img/Hats/h-2.jpg",
      sourceImg_2: "../img/Hats/h-3.jpg",
      price: 130,
      old_price: 600,
      off: 25,
      Availability: 22,
    },
    {
      title: "Hats case lion ",
      sourceImg: "../img/Hats/h-3.jpg",
      sourceImg_2: "../img/Hats/h-4.jpg",
      price: 40,
      old_price: 240,
      off: 25,
      Availability: 12,
    },
    {
      title: "hats case fight ",
      sourceImg: "../img/Hats/h-4.jpg",
      sourceImg_2: "../img/Hats/h-5.jpg",
      price: 140,
      old_price: 600,
      off: 25,
      Availability: 13,
    },
    {
      title: "Hats case yellow ",
      sourceImg: "../img/Hats/h-5.jpg",
      sourceImg_2: "../img/Hats/h-6.jpg",
      price: 120,
      old_price: 600,
      off: 25,
      Availability: 42,
    },
    {
      title: "Hats case white ",
      sourceImg: "../img/Hats/h-6.jpg",
      sourceImg_2: "../img/Hats/h-7.jpg",
      price: 20,
      old_price: 100,
      off: 25,
      Availability: 29,
    },
    {
      title: "hats case orange ",
      sourceImg: "../img/Hats/h-7.jpg",
      sourceImg_2: "../img/Hats/h-8.jpg",
      price: 100,
      old_price: 400,
      off: 25,
      Availability: 228,
    },
    {
      title: "Hats case fanta ",
      sourceImg: "../img/Hats/h-8.jpg",
      sourceImg_2: "../img/Hats/h-9.jpg",
      price: 30,
      old_price: 120,
      off: 25,
      Availability: 212,
    },
    {
      title: "Hats case brown ",
      sourceImg: "../img/Hats/h-9.jpg",
      sourceImg_2: "../img/Hats/h-8.jpg",
      price: 15,
      old_price: 60,
      off: 25,
      Availability: 223,
    },
  ]
  
  
  
  
const container = document.getElementById("container");

hats.forEach(product => {
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