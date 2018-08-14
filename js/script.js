const wrapper = document.createElement('div');
const slider = document.createElement('div');
const image = document.createElement('img');
const arrowLeft = document.createElement('i');
const arrowRight = document.createElement('i');

slider.appendChild(arrowLeft);
slider.appendChild(image);
slider.appendChild(arrowRight);
wrapper.appendChild(slider);
document.body.appendChild(wrapper);

wrapper.classList.add('wrapper');
slider.classList.add('slider');
arrowLeft.classList.add('arrow');
arrowLeft.classList.add('arrow-left');
arrowLeft.classList.add('fas');
arrowLeft.classList.add('fa-angle-left');

arrowRight.classList.add('arrow');
arrowRight.classList.add('arrow-right');
arrowRight.classList.add('fas');
arrowRight.classList.add('fa-angle-right');

image.setAttribute('src', 'img/00.jpg');







