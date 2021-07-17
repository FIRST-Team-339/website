var app = document.getElementById('subtitle');

var typewriter = new Typewriter(app, {
  loop: false,
  delay: 75,
});

typewriter
  .pauseFor(150)
  .typeString('System.out.println("Who\'s Here?")')
  .pauseFor(1500)
  .deleteChars(15)
  .typeString('("Kilroy is here!")')
  .pauseFor(350)
  .deleteChars(15)
  .typeString(';')
  .pauseFor(1500)
  .start();