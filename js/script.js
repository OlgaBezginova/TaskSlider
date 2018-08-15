function setClasses() {
    wrapper.classList.add('wrapper');
    slider.classList.add('slider');
    setArrowClasses(arrowLeft, 'left');
    setArrowClasses(arrowRight, 'right');
    
    function setArrowClasses(arrow, direction) {
        arrow.classList.add('arrow', `arrow-${direction}`, 'fas', `fa-angle-${direction}`);
    }
}

function setImageSrc(index) {
    image.dataset.index = index;
    image.setAttribute('src', `img/${image.dataset.index}.jpg`);
}

const wrapper = document.createElement('div');
const slider = document.createElement('div');
const image = document.createElement('img');
const arrowLeft = document.createElement('i');
const arrowRight = document.createElement('i');
const imageNumber = 6;
    
slider.appendChild(arrowLeft);
slider.appendChild(image);
slider.appendChild(arrowRight);
wrapper.appendChild(slider);
document.body.appendChild(wrapper);

setClasses();
setImageSrc(0);

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
        setImageSrc(imageIndex);
    }
    
    if(event.target.classList.contains('arrow-left')) {
        if(imageIndex > 0) {
            imageIndex--;
        } else {
            imageIndex = imageNumber - 1;
        }
        setImageSrc(imageIndex);
    }   
});