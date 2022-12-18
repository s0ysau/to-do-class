require('dotenv').config()

const db = require('../config/db')
const Todo = require('./todo')

const toDoListData = [
  {
    title: "Learn more about React",
    completed: true
  },
  {
    title: "Write a new Component",
    completed: false
  },
  {
    title: "Add some style",
    completed: false
  }
];

