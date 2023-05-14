const buttons = document.querySelectorAll('.btn');
const contain = document.querySelector('.container');
var counter = 0;

let images = [
    'url(./images/laek.jpg)',
    'url(./images/tokyo.jpg)',
    'url(./images/castle.jpg)',
    'url(./images/solar.jpg)',
    'url(./images/space.jpg)',
    'url(./images/newY.jpg)'
]

for(i = 0; i < buttons.length; i++){
    buttons[i].addEventListener('click', imgSlider);
    function imgSlider(e){
        if(e.target.classList.contains('btn1')) {
            counter--
            if(counter < 0){
                counter = images.length - 1;
            }
            contain.style.backgroundImage = images[counter];
        }
        if(e.target.classList.contains('btn2')) {
            counter++
            if(counter >= images.length){
                counter = 0;
            }
            contain.style.backgroundImage = images[counter];
        }
    }
}

/*buttons.forEach(function(button){
    button.addEventListener('click', imgSlider);
    function imgSlider(e){
        if(button.classList.contains('btn1')) {
            counter--
            if(counter < 0){
                counter = images.length - 1
            }
            contain.style.backgroundImage = images[counter];
        }
        if(button.classList.contains('btn2')) {
            counter++
            if(counter >= images.length){
                counter = 0;
            }
            contain.style.backgroundImage = images[counter];
        }
    }
})*/
