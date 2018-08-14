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

const imageNumber = 6;
image.dataset.index = 0;
image.setAttribute('src', `img/${image.dataset.index}.jpg`);

slider.addEventListener('click', function(event){
    if(!event || !event.target || !event.target.classList.contains('arrow')) {
        return;   
    }
    
    let imageIndex = +image.dataset.index;
    
    if(event.target.classList.contains('arrow-right')) {
        if(imageIndex < imageNumber - 1) {
            imageIndex++;
        } else {
            imageIndex = 0;
        }
        image.dataset.index = imageIndex;
        image.setAttribute('src', `img/${image.dataset.index}.jpg`);
    }
    
    if(event.target.classList.contains('arrow-left')) {
        if(imageIndex > 0) {
            imageIndex--;
        } else {
            imageIndex = imageNumber - 1;
        }
        image.dataset.index = imageIndex;
        image.setAttribute('src', `img/${image.dataset.index}.jpg`);
    }
});

