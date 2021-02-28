export default function Entry(title, body) {
  this.title = title;
  this.body = body;
}

let entry = new Entry("Tuesday", "How I spent my day");
console.log(entry);