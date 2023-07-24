function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  // pegar tag img
  const img = document.querySelector("#profile img")

  // substituir a imagem
  if (html.classList.contains("light")) {
    //se tiver light mode, adicionar a imagem light
    img.setAttribute("src", "./assets/avatar-light.png")
    img.setAttribute("alt", "Descrição da foto tema light")
  } else {
    img.setAttribute("src", "./assets/avatar.png")
    img.setAttribute("alt", "Descrição da foto")
  }

  //substituir a imagem
}
