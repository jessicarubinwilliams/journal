export default function Journal() {
  this.entries = {};
  this.currentId = 0;
}

Journal.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
}