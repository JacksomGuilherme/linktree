function toggleMode(){
    document.documentElement.classList.toggle('light')
    const img = document.querySelector('#profile img')
    const button = document.querySelector('#switch button')
    if(document.documentElement.classList.contains('light')){
        button.classList.remove('button-right')
        button.classList.add('button-left')
        img.setAttribute('src', './assets/avatar-light.png')
    }else{
        button.classList.add('button-right')
        button.classList.remove('button-left')
        img.setAttribute('src', './assets/avatar.png')
    }

}