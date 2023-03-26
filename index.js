window.addEventListener('load', () => {
    autoMode();
    modes.changeMode();
})
const modes = {
    mode: document.querySelectorAll('.mode'),
    nav: document.querySelector('.nav-container'),
    modeCon: document.querySelector('.modes'),
    dot: document.querySelectorAll('.dot'),
    changeMode: function(){
       for(let i = 0; i < this.mode.length; i++){
        if(i == 0){
            this.mode[i].addEventListener('click', () => {
                autoMode();
            })
        }
        if(i == 1){
            this.mode[i].addEventListener('click', () => {
                lightMode();
            })
        }
        if(i == 2){
            this.mode[i].addEventListener('click', () => {
                darkMode();
            })
        }
        
       }
    }
} 
autoMode = () => {
            let date = new Date();
            let hour = date.getHours();
            if(hour >= 18){
                darkMode();
            }
            else{
                lightMode();
            }
}
darkMode = () => {
    document.body.style.backgroundColor = '#111';
    document.body.style.color = 'white';
    modes.nav.style.backgroundColor = 'rgb(250, 141, 101)';
    modes.modeCon.style.backgroundColor = 'rgb(69, 116, 116)';
    modes.dot.forEach(dott => {
        dott.style.backgroundColor = 'white';
    })
}

lightMode = () => { 
    document.body.style.backgroundColor = 'lightgray';
    document.body.style.color = 'black';
    modes.nav.style.backgroundColor = 'coral';
    modes.modeCon.style.backgroundColor = 'darkslategray';
    modes.dot.forEach(dott => {
        dott.style.backgroundColor = 'black';
    })
    
}