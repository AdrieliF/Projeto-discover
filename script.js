function toggleMode() {
    const html = document.documentElement
    html.classList.toggle('light')

    const img = document.querySelector('#profile img')

    if(html.classList.contains('light')) {
        img.setAttribute('src', './assets/Avatar.1.png')
    } else {
        img.setAttribute('src', './assets/Avatar.png')
    }

    if(html.classList.contains('light')) {
        img.setAttribute('alt', 'foto de Adrieli segurando uma mandala')
    } else {
        img.setAttribute('alt', 'Foto da marca: uma mandala e escrita mandalas florescendo')
    }
}
    

     