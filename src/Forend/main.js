'use strict'
let stringOfInnerHTMLContainer = '';
const sendGuitarToServer = async () => {
  const guitarType = document.getElementById("selectGuitarType").value;
  console.log(guitarType);
  const manufactureYear = Number(document.getElementById("floatingInputYear").value);
  const guitarBrand = document.getElementById("floatingInputBrand").value;
  const guitarPrice = Number(document.getElementById("floatingInputPrice").value);
  const guitarStrings = Number(document.getElementById("floatingInputNumOfString").value);
  const guitarPic = document.getElementById("formFileLg").files[0];
  const guitarPicBase64 = await getBase64(guitarPic);
  console.log("guitarPic");
  const guitarObj = {
    manufactureYear: manufactureYear,
    brand: guitarBrand,
    price: guitarPrice,
    numOfString: guitarStrings,
    picture: guitarPicBase64,
  }
  console.log(guitarObj);
  const response = await axios.post(`http://localhost:8080/sell/${guitarType}`, { data: JSON.stringify(guitarObj) });
}
const showGuitarForBuy = async () => {
  const response = await axios.get('http://localhost:8080/guitars/');
  response.data.forEach(element => {
    makeDivToGuitar(JSON.parse(element));
  });
  document.getElementById("BuyPort").innerHTML = stringOfInnerHTMLContainer;
  stringOfInnerHTMLContainer = '';
}

const makeDivToGuitar = (guitarObj) => {
  if (!guitarObj.picture) {
    guitarObj.picture = '../../Pictures/GuitarPic.jpg';
  }
  stringOfInnerHTMLContainer += `<div class="col">
  <div class="card">
  <img src="${guitarObj.picture}" class="card-img-top" alt="Guitar Picture">
  <div class="card-body">
    <h5 class="card-title">${guitarObj.price}$</h5>
    <p class="card-text">Created: ${guitarObj.manufactureYear}</p>
    <p class="card-text">Number of Strings: ${guitarObj.numberOfString}</p>
    <p class="card-text"><small class="text-muted">${guitarObj.brand}</small></p>
  </div>
</div>
</div>`;
}
function getBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
  });
}

document.getElementById("sellSubmitBtn").addEventListener("click", sendGuitarToServer);
document.getElementById("Buy-tab").addEventListener("click", showGuitarForBuy);