function toggleMode() {
  const html = document.documentElement
  html.classList.toggle('light')

  // pegar a tag img
  
  const img = document.querySelector("#profile img")

  // substituir a imagem
  
  if(html.classList.contains('light')) {
    // Essa seria a forma normal de fazer sem simplificar
    
    // if(html.classList.contains('light')) {
    //   html.classList.remove('light')
    // } else {
    //   html.classList.add('light')
    // }
  
    // Porém o Javascript possui ferramentas que já fazem essa função
    // automaticamente
    
    
    // se tiver light mode, adicionar a imagem light
    
    img.setAttribute('src', './assets/avatar.png')
    img.setAttribute('alt', 'Outra foto do Hugo Queiroz olhando pro lado com moletom preto e capuz')
    
  } else {
    // se tiver sem light mode, manter a imagem normal
    img.setAttribute('src', './assets/avatar.png')

  }
  




}
