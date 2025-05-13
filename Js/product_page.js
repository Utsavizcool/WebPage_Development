//This is the external js file for Product Page

const search_id = document.getElementById("search-bar");
search_id.addEventListener("keypress", handleSearch);

function handleSearch(event) {
  if (event.key === "Enter") {
    alert("Something was searched!!");
  }
}

function handleClick(id) {
  //This function will trigger when "View Details" button will be clicked
  const names = [
    //Array for names
    "Datejust 36",
    "Submariner",
    "Sea-Dweller",
    "Day-Date 36",
    "Explorer 36",
    "Classic 1908",
  ];
  const images = [
    //Array for images
    "../Assets/watchlist/w1.avif",
    "../Assets/watchlist/w2.avif",
    "../Assets/watchlist/w3.avif",
    "../Assets/watchlist/w4.avif",
    "../Assets/watchlist/w5.avif",
    "../Assets/watchlist/w6.avif",
  ];

  document.getElementById("product-details").style.display = "block"; //Styling using js
  document.getElementById("product-details").style.zIndex = "1";

  switch (
    id //Checking id
  ) {
    case "1":
      document.getElementById("product-title").innerText = names[0];
      document.getElementById("product-image").src = images[0];
      break;

    case "2":
      document.getElementById("product-title").innerText = names[1];
      document.getElementById("product-image").src = images[1];
      break;

    case "3":
      document.getElementById("product-title").innerText = names[2];
      document.getElementById("product-image").src = images[2];
      break;

    case "4":
      document.getElementById("product-title").innerText = names[3];
      document.getElementById("product-image").src = images[3];
      break;

    case "5":
      document.getElementById("product-title").innerText = names[4];
      document.getElementById("product-image").src = images[4];
      break;

    case "6":
      document.getElementById("product-title").innerText = names[5];
      document.getElementById("product-image").src = images[5];
      break;
  }
}

function closeDetails() {
  //This function will trigger when "Close Details" button is clicked
  const productDetails = document.getElementById("product-details"); //getting the element through id (aka dom manipulation methods)
  productDetails.style.display = "none";
  productDetails.style.zIndex = "0";
}

function addToCart() {
  //This function will trigger when "Add To Cart" button is clicked
  alert("Product added to cart!");
}
