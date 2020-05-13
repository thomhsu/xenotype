export const shuffle = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * i)
    const temp = array[i]
    array[i] = array[j]
    array[j] = temp
  }
}

export const loopDelay = (func, times, timeout = 500) => {
  let i = 0

  function loop() {
    setTimeout(function() {
      func()
      i++
      if (i < times) {
        loop()
      }
    }, timeout)
  }

  loop()
}
