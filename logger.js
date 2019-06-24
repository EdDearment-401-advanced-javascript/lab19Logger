'use strict';

//require('dotenv').config();
const Q = require('@nmq/q/client');
const db = new Q('database');

const dbEvents = ['create', 'read', 'delete', 'update'];
const file = new Q('file');

dbEvents.forEach(event => {
  db.subscribe(event, payload => {
    console.log(`${event}`, payload);
  });
});

file.subscribe('file-save', payload => {
  console.log('Ill tell you what', payload);
});

file.subscribe('file-error', () => {
  console.error('That boy aint right.');
});

console.log(db.subscriptions());
console.log(file.subscriptions());