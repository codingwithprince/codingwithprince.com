// Wrap every letter in a span
var textWrapper = document.querySelector(' .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: ' .line',
    scaleY: [0,1],
    opacity: [0.5,1],
    easing: "easeOutExpo",
    duration: 700
  })
  .add({
    targets: ' .line',
    translateX: [0, document.querySelector(' .letters').getBoundingClientRect().width + 10],
    easing: "easeOutExpo",
    opacity: 0,
    duration: 700,
    delay: 100
  }).add({
    targets: '.letter',
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 3000,
    offset: '-=775',
    delay: (el, i) => 34 * (i+1)
  })
  .add({
    targets: '.letter',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });