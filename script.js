
async function getPrice() {
  const symbol = document.getElementById("symbol").value;
  const response = await fetch("https://buy-on-dip-api.onrender.com/price/" + symbol);
  const data = await response.json();
  document.getElementById("priceDisplay").innerText = "Price: ₹" + data.ltp;
}
