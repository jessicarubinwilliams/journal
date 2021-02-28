export default function Journal() {
  this.entries = {};
  this.currentId = 0;
}

let journal = new Journal();
console.log(journal);