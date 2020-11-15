
const day = require('./day.js')



let i = 0;
const testing = (() => {
  if (day[i] === undefined) {
    clearInterval(newInterval)
  } else {
    console.log(day[i])
  } i++
})


const newInterval = setInterval(testing, 1000)