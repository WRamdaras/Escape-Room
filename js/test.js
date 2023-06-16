
function update(e){
    const x = e.clientX || e.touches[0].clientX
    const y = e.clientY || e.touches[0].clientY
  
    document.documentElement.style.setProperty('--cursorX', x + 'px')
    document.documentElement.style.setProperty('--cursorY', y + 'px')
  }
  
  document.addEventListener('mousemove',update)
  document.addEventListener('touchmove',update)

{
  {let btn = document.createElement("button")

btn.innerHTML = "VAL AAN";

btn.onclick = function () {

    const result = prompt('TYP HET GEHEIME GETAL IN OM AAN TE VALLEN!');
    if (result == `4729`) { location.replace(`./minibossdefeat.html`)
} else{
  alert(`ERROR`)
}

};

document.body.appendChild(btn);
}
}