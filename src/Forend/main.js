'use strict'

const sendGuitarToServer = async () => {
  const guitarType = document.getElementById("selectGuitarType").value;
  console.log(guitarType);
  const manufactureYear = Number(document.getElementById("floatingInputYear").value);
  const guitarBrand = document.getElementById("floatingInputBrand").value;
  const guitarPrice = Number(document.getElementById("floatingInputPrice").value);
  const guitarStrings = Number(document.getElementById("floatingInputNumOfString").value);
  const guitarPic = document.getElementById("formFileLg");
  const guitarObj = {
    manufactureYear: manufactureYear,
    brand: guitarBrand,
    price: guitarPrice,
    numOfString: guitarStrings,
    picture: guitarPic
  }
  const response = await axios.post(`http://localhost:8080/sell/${guitarType}`, { data: JSON.stringify(guitarObj) });
}

document.getElementById("sellSubmitBtn").addEventListener("click", sendGuitarToServer);