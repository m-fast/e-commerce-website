// scraf cop

const scraf_cop = [
    {
      title: "scraf cop colorful",
      sourceImg: "../img/product-5-1.jpg",
      sourceImg_2: "../img/product-5-2.jpg",
      price: 60,
      old_price: 160,
      off: 25,
      Availability: 9,
    },
    {
      title: "scraf cop Blue",
      sourceImg: "../img/Scarfs/s-1.jpg",
      sourceImg_2: "../img/Scarfs/s-2.jpg",
      price: 88,
      old_price: 182,
      off: 25,
      Availability: 9,
    },
    {
      title: "scraf cop yellow",
      sourceImg: "../img/Scarfs/s-2.jpg",
      sourceImg_2: "../img/Scarfs/s-3.jpg",
      price: 76,
      old_price: 360,
      off: 25,
      Availability: 9,
    },
    {
      title: "scraf cop More Colorful",
      sourceImg: "../img/Scarfs/s-3.jpg",
      sourceImg_2: "../img/Scarfs/s-4.jpg",
      price: 69,
      old_price: 352,
      off: 25,
      Availability: 9,
    },
    {
      title: "scraf cop More Blue :)",
      sourceImg: "../img/Scarfs/s-4.jpg",
      sourceImg_2: "../img/Scarfs/s-5.jpg",
      price: 50,
      old_price: 200,
      off: 25,
      Availability: 9,
    },
    {
      title: "scraf cop Black",
      sourceImg: "../img/Scarfs/s-5.jpg",
      sourceImg_2: "../img/Scarfs/s-6.jpg",
      price: 54,
      old_price: 198,
      off: 25,
      Availability: 9,
    },
    {
      title: "scraf cop More Yellow",
      sourceImg: "../img/Scarfs/s-6.jpg",
      sourceImg_2: "../img/Scarfs/s-7.jpg",
      price: 44,
      old_price: 154,
      off: 25,
      Availability: 9,
    },
    {
      title: "scraf cop Red",
      sourceImg: "../img/Scarfs/s-7.jpg",
      sourceImg_2: "../img/Scarfs/s-6.jpg",
      price: 30,
      old_price: 120,
      off: 25,
      Availability: 9,
    },
  ];


const container = document.getElementById("container")

scraf_cop.forEach(product => {
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