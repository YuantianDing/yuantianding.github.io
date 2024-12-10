console.log("script")

setTimeout(() => {

  const styleSheet = document.createElement("style")
  if(document.cookie.includes('can_see')) {
    styleSheet.textContent = ".private-content { display: block; }"
  }
  document.head.appendChild(styleSheet)
}, 1)