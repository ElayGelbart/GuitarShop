class ClassicGuitar {
  #id;
  constructor(manufactureYear, brand, price, numberOfString = 6, id) {
    this.manufactureYear = manufactureYear;
    this.brand = brand;
    this.price = price;
    this.numberOfString = numberOfString;
    this.#id = id;
    this.used = false;
  }
  play() {
    console.log("🎶🎶🎶");
    this.price = this.price / 100 * 90;
  }
  get getPrice() {
    return this.price
  }

  set setPrice(_newPrice) {
    this.price = _newPrice
  }
  get ManufactureYear() {
    return this.manufactureYear;
  }
  get brandName() {
    return this.brand
  }
  get id() {
    return this.#id
  }

  static detectSound(sound) {
    if (sound == "🎶") {
      console.log('Classic Guitar');
    } else if (sound == '🎸') {
      console.log('Electric Guitar');
    } else if (sound == '🔊') {
      console.log('Bass Guitar');
    }
  }
}
class ElectricGuitar extends ClassicGuitar {
  constructor(manufactureYear, brand, price, numberOfString, id, longback = true) {
    super(manufactureYear, brand, price, numberOfString, id);
    this.longback = longback;
  }
  play() {
    console.log("🎸🎸🎸");
    this.price = this.price * 0.9;
  }
}

class BassGuitar extends ClassicGuitar {
  constructor(manufactureYear, brand, price, numberOfString = 4, id) {
    super(manufactureYear, brand, price, numberOfString, id);
  }
  play() {
    console.log("🔊🔊🔊");
    this.price = this.price * 0.9;
  }
  playSolo() {
    const soundArray = ["💥", "🤘", "🎵", "📢", "💢", "🕺"];
    let currentIndex = soundArray.length
    let randomIndex;

    // While there remain elements to shuffle...
    while (currentIndex != 0) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [soundArray[currentIndex], soundArray[randomIndex]] = [soundArray[randomIndex], soundArray[currentIndex]];
    }
    console.log(soundArray.join(""));
    this.price = this.price * 0.8;
  }
}
const justGuitar = new ClassicGuitar(1978, 'Fender', 345, 6, 5)
const elayGuitar = new BassGuitar(1978, 'Fender', 345, 6, 5);
const abaGuitar = new BassGuitar(1978, 'Fender', 345, 6, 6);
const fender = new ElectricGuitar(1978, 'Fender', 345, 6, 7);