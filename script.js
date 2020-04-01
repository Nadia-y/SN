// console.log("hello");
// const MENU = document.getElementById('menu');
 

// MENU.addEventListener('click', (event) =>{
//     MENU.querySelectorAll('li').forEach( el=>classList.remove('active'));
//     event.target.classList.add('active');

// });
// const addTagsClickHandler =() =>{
//     document.querySelector(".all__item").addEventListener('click', (e)=>{
//         if ()
//     })
// }
var leftOffset=350;
var moveH=function(){
    $("#logo").offset ({ left:leftOffset});
    leftOffset++;
    if (leftOffset>500){
        leftOffset=350
    }
};
setInterval(moveH,60);


$(function () {
	$('.menu li a[href^="#"]').click(function () {
		//Сохряем значение атрибута href в переменной:
		var target = $(this).attr('href');
		$('html, body').animate({
			scrollTop: $(target).offset().top
        }, 500);
        $('li a[href^="#"]').removeClass('active');
        $(this).addClass('active');
	});

});



