'use strict'

// const {
//   ipcRenderer
// } = require('electron')

function updateTime () {
  const monthList = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'Sepetember', 'November', 'December']
  const dowList = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
  var curTime = new Date()
  var hours = curTime.getHours()
  document.getElementById('time-num-view').innerHTML = `${(hours % 12) ? (hours % 12) : 12}:${curTime.getMinutes().toString().padStart(2, '0')}`
  document.getElementById('time-num-view').innerHTML += `<div id="time-num-back">${((hours % 12) ? (hours % 12) : 12) < 10 ? '8' : '88'}:88</div>`
  document.getElementById('time-sec-view').innerHTML = `${curTime.getSeconds().toString().padStart(2, '0')}`
  document.getElementById('time-sec-view').innerHTML += '<div id="time-sec-back">88</div>'
  document.getElementById('time-ampm-view').innerHTML = `${hours < 12 ? 'A<br>M' : 'P<br>M'}`
  document.getElementById('time-ampm-view').innerHTML += '<div id="time-ampm-back">~<br>~</div>'
  document.getElementById('date-view').innerHTML = `${dowList[curTime.getDay()]}, ${monthList[curTime.getMonth()]} ${curTime.getDate()}, ${curTime.getFullYear()}`
}

(function () {
  var mouseTimer = null
  var cursorVisible = true

  function disappearCursor () {
    mouseTimer = null
    document.body.style.cursor = 'none'
    cursorVisible = false
  }

  document.onmousemove = function () {
    if (mouseTimer) {
      window.clearTimeout(mouseTimer)
    }
    if (!cursorVisible) {
      document.body.style.cursor = 'default'
      cursorVisible = true
    }
    mouseTimer = window.setTimeout(disappearCursor, 3000)
  }
})()

updateTime()

setInterval(updateTime, 100)

// var timeUpdate = setInterval(updateTime, 100)
