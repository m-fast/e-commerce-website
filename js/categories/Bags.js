// Bags
const bags = [
    {
      title: "Greeny bag",
      sourceImg: "../img/product-13-1.jpg",
      sourceImg_2: "../img/product-13-2.jpg",
      price: 60,
      old_price: 160,
      off: 25,
      Availability: 9,
    },
    {
      title: "Goldy bag",
      sourceImg: "../img/bags/b-1.jpg",
      sourceImg_2: "../img/bags/b-2.jpg",
      price: 150,
      old_price: 600,
      off: 25,
      Availability: 9,
    },
    {
      title: "Pinky bag",
      sourceImg: "../img/bags/b-2.jpg",
      sourceImg_2: "../img/bags/b-3.jpg",
      price: 600,
      old_price: 1520,
      off: 25,
      Availability: 9,
    },
    {
      title: "Brown bag",
      sourceImg: "../img/bags/b-3.jpg",
      sourceImg_2: "../img/bags/b-4.jpg",
      price: 300,
      old_price: 654,
      off: 25,
      Availability: 9,
    },
    {
      title: "Blue bag",
      sourceImg: "../img/bags/b-4.jpg",
      sourceImg_2: "../img/bags/b-5.jpg",
      price: 222,
      old_price: 989,
      off: 25,
      Availability: 9,
    },
    {
      title: "House bag",
      sourceImg: "../img/bags/b-5.jpg",
      sourceImg_2: "../img/bags/b-6.jpg",
      price: 355,
      old_price: 950,
      off: 25,
      Availability: 9,
    },
    {
      title: "Big bag",
      sourceImg: "../img/bags/b-6.jpg",
      sourceImg_2: "../img/bags/b-7.jpg",
      price: 240,
      old_price: 454,
      off: 25,
      Availability: 9,
    },
    {
      title: "White bag",
      sourceImg: "../img/bags/b-7.jpg",
      sourceImg_2: "../img/bags/b-8.jpg",
      price: 45,
      old_price: 154,
      off: 25,
      Availability: 9,
    },
    {
      title: "Manchestar bag",
      sourceImg: "../img/bags/p-8.jpg",
      sourceImg_2: "../img/bags/p-9.jpg",
      price: 255,
      old_price: 555,
      off: 25,
      Availability: 9,
    },
    {
      title: "black bag",
      sourceImg: "../img/bags/p-9.jpg",
      sourceImg_2: "../img/bags/p-8.jpg",
      price: 180,
      old_price: 628,
      off: 25,
      Availability: 9,
    }
  


];

const container = document.getElementById("container")

bags.forEach(product => {
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