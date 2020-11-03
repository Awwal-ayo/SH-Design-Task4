// const root = document.body
// const themeBtns = document.querySelectorAll('.colour-shapes > button')

// themeBtns.forEach((btn) => {
//   btn.addEventListener('click', handleThemeUpdate)
// })

// function handleThemeUpdate(e) {
//   switch(e.target.value) {
//     case 'blue': 
//       root.style.setProperty('--bg', '#0392BF')
//       root.style.setProperty('--bg-text', 'white')
//       break
//     case 'pink': 
//        root.style.setProperty('--bg', '#B3E5FC')
//        root.style.setProperty('--bg-text', '#37474F')
//       break
//     case 'yellow':
//       root.style.setProperty('--bg', 'white')
//       root.style.setProperty('--bg-text', 'black')
//       break
//       case 'grey':
//         root.style.setProperty('--bg', 'white')
//         root.style.setProperty('--bg-text', 'black')
//         break
//   }
// }

function themeBtn(bgcolor, textcolor) {
  document.body.style.background = bgcolor;
  document.body.style.color = textcolor;
}
