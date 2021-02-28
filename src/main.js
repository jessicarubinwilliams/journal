import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Journal from './journal.js';
import Entry from './entry.js';

//Simulated UIL
let journal = new Journal();
journal.assignId();
console.log(journal);

let entry = new Entry("Tuesday", "How I spent my day");
console.log(entry);