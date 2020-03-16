$(document).ready(function() {
	
	$('.works-slider').slick({
		prevArrow: $('.prev-arrow'),
		nextArrow: $('.next-arrow'),
		slidesToShow: 1,
		infinite: false,
		initialSlide:0,
		variableWidth: true
	});
});

let objectType = document.querySelector('#ObjectType');
let stateType = document.querySelector('#state');
let objectItem = objectType.querySelectorAll('.field__item');
let stateItem = stateType.querySelectorAll('.field__item')


objectType.addEventListener('click', (event) => {
  // Отлавливаем элемент в родители на который мы нажали
  let target = event.target;
  
  // Проверяем тот ли это элемент который нам нужен
  if(target.classList.contains('field__item')) {
    for(let i = 0; i < objectItem.length; i++) {
      // Убираем у других
      objectItem[i].classList.remove('item_active');
    }
    // Добавляем тому на который нажали
    target.classList.add('item_active');
  }
  
});

stateType.addEventListener('click', (event) => {
  let target = event.target;
  if(target.classList.contains('field__item')) {
    for(let i = 0; i < stateItem.length; i++) {
      stateItem[i].classList.remove('item_active');
    }
    target.classList.add('item_active');
  } 
});

function switchQuiz() {  
	let index = 0;
	
	let btnBack = document.getElementsByClassName('back')[0];
	let btnNext = document.getElementsByClassName('forward')[0];
	btnBack.addEventListener('click', function() { go(this); }, false);
	btnNext.addEventListener('click', function() { go(this); }, false);
	
	function go(el) {
			let quiz = document.querySelectorAll(".quiz__body");  
       
			if (el.dataset.type == 'next') {
					index++;
					index = (index > quiz.length - 1) ? 5 : index;
			}

			if (el.dataset.type == 'prev') {
					index--;
					index = (index < 0) ? 0 : index;
			}

			for (let i = 0; i < quiz.length; i++) {
					quiz[i].classList.remove("active");

					if (i == index)
						quiz[i].className += " active";
			}

			switch (index){
				case 0:
					document.querySelector('.scale__text').innerHTML = 'Шаг 1/6';
					document.querySelector('.progress-bar_gray').style.width = 16.6 + '%';
					break;
				case 1: 
					document.querySelector('.scale__text').innerHTML = 'Шаг 2/6';
					document.querySelector('.progress-bar_gray').style.width = 32 + '%';
					break;
				case 2:
					document.querySelector('.scale__text').innerHTML = 'Шаг 3/6';
					document.querySelector('.progress-bar_gray').style.width = 49 + '%';
					break;
				case 3:
					document.querySelector('.scale__text').innerHTML = 'Шаг 4/6';
					document.querySelector('.progress-bar_gray').style.width = 65 + '%';
					break;
				case 4:
					document.querySelector('.scale__text').innerHTML = 'Шаг 5/6';
					document.querySelector('.progress-bar_gray').style.width = 80 + '%';
					break;
				case 5:
					document.querySelector('.scale__text').innerHTML = 'Шаг 6/6';
					document.querySelector('.progress-bar_gray').style.width = 100 + '%';
					break;
			}
			
			
	}    
}

switchQuiz();
