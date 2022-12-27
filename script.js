function toggleMode(){
  const html = document.documentElement

  html.classList.toggle('light')

  // É o mesmo que fazer a condicional a seguir:
  
  // if(html.classList.contains('light')){
  //   html.classList.remove('light')
  // } else {
  //   html.classList.add('light')
  // }
}