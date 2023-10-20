
document.fonts.load('10pt "Material Icons"').then(function () {
    console.log('Material Icons font has been preloaded.');
  });

document.addEventListener('DOMContentLoaded', function() {
    const element = document.getElementById('step-1');
    const element2 = document.getElementById('step-2');
    const element3 = document.getElementById('step-3');
    const element4 = document.getElementById('step-4');
    const element5 = document.getElementById('step-5');

    const button = document.getElementById('frame-91');

    const rightArrow = document.getElementById('arrow-right');
    const leftArrow = document.getElementById('arrow-left');
    let translateX = 0;
    let maxLeft = 0;
    let maxRight = 230;
    // let step = 1;
    
    rightArrow.addEventListener('click', function() {
        translateX -= 115;
        element.style.transform = `translateX(${translateX}%)`;
        element2.style.transform = `translateX(${translateX}%)`;
        element3.style.transform = `translateX(${translateX}%)`;
        element4.style.transform = `translateX(${translateX}%)`;
        element5.style.transform = `translateX(${translateX}%)`;
    });
    leftArrow.addEventListener('click', function() {
        translateX += 115;
        element.style.transform = `translateX(${translateX}%)`;
        element2.style.transform = `translateX(${translateX}%)`;
        element3.style.transform = `translateX(${translateX}%)`;
        element4.style.transform = `translateX(${translateX}%)`;
        element5.style.transform = `translateX(${translateX}%)`;
    });
    }
)