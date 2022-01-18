class Form {
  constructor() {
    this.input = createInput('Name')
    this.botao = createButton('Play')
    this.greeting = createElement('h2')
  }

  hide() {
    this.greeting.hide()
    this.input.hide()
    this.botao.hide()
  }

  display() {
    var title = createElements('h2')
    title.html('Corrida Dupla')
    title.position(130, 0)

    this.input.position(130, 160)
    this.botao.position(250, 200)

    this.botao.mousePressed(function () {
      this.input.hide()
      this.botao.hide()
      player.name = this.input.value()
      playerCount += 1
      player.index = playerCount
      player.update()
      player.updateCount(playerCount)
      this.greeting.html('Hello ' + player.name)
      this.greeting.position(130, 100)
    })
  }
}
