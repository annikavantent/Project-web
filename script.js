//samen geschreven met steven witthon bij de bijles!


var heartList = document.querySelectorAll('.heart');
var aantalMeter = document.querySelector('.menu ul li span');
var aantal = 0;

// Loop all hearts

for (var i = 0; i < heartList.length; i++){
//Add event listener for each heart
    heartList[i].addEventListener('click', function() {
//check if heart is outline
        if (this.src.includes('img/heart-outline.svg')) {
//replace outline with fill
            this.src = 'img/heart-fill.svg';
            aantal = aantal + 1;

        } else {
//else replace with outline
            this.src = 'img/heart-outline.svg';
            aantal = aantal - 1;
        };
        if (aantal == 0) {
            aantalMeter.textContent = '';
        } else {
        aantalMeter.textContent = aantal;
        }
    })
};

var uitklappen = document.querySelector('.filteren fieldset');

uitklappen.addEventListener('click', function(){
    console.log('klikken');
    document.querySelector('.filteren section').classList.toggle('dropdown');
})


//variable maken met de class
//var .src = nieuwe source
//
//add eventlistner click en function

