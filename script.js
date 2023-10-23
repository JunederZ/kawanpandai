
let translateX = 0;
// let maxLeft = 0;
// let maxRight = 230;
let nowPage = 1

function faqChangeState(faqNum){

    let element = document.getElementById(`faq-${faqNum}`);
    var computedHeight = window.getComputedStyle(element).height;
    var currentHeight = parseFloat(computedHeight);

    let sizeHeight = document.getElementById(`insideFaq-${faqNum}`);
    var sizeComputedHeight = window.getComputedStyle(sizeHeight).height;
    var sizeCurrentHeight = 100 + parseInt(sizeComputedHeight);
    
    if (currentHeight > 80) {
        element.style.height = '80px';
    } else {
        element.style.height = `${sizeCurrentHeight}px`;
    }
}

function changeStep(step){

    if (step > 5 || step < 1){
        return;
    }  

    maxPage = 5;
    nowPage = step;

    for (let i = 2; i <= step; i++) {
        document.getElementById(`circle-${i}`).style.background = `var(--primarycolor-primary-500, #6bd256)`;
        
      }
    for (let i = step+1; i <= maxPage; i++) {
        document.getElementById(`circle-${i}`).style.background = `var(--greyscale-gray-300, #636363)`;
        
    } 

    translateX = -115 * (step-1);
    greenLWidth = 340 * (step-1);
    document.getElementById('green-line').style.width = `${greenLWidth}px`;

    for (let i = 1; i <= maxPage; i++) {
        document.getElementById(`step-${i}`).style.transform = `translateX(${translateX}%)`;;

    }
    
}

document.fonts.load('10pt "Material Icons"').then(function () {
    console.log('Material Icons font has been preloaded.');
  });

document.addEventListener('DOMContentLoaded', event => {

    const faq1 = document.getElementById('faq-1');
    const faq2 = document.getElementById('faq-2');
    const faq3 = document.getElementById('faq-3');
    const faq4 = document.getElementById('faq-4');

    const content1 = document.getElementById('frame-90');
    const content2 = document.getElementById('frame-91');
    const content3 = document.getElementById('frame-92');
    const content4 = document.getElementById('frame-93');
    const content5 = document.getElementById('frame-94');

    const rightArrow = document.getElementById('arrow-right');
    const leftArrow = document.getElementById('arrow-left');

    rightArrow.addEventListener('click', event => {
        changeStep(nowPage+1);
        event.preventDefault();
    });
    leftArrow.addEventListener('click', event => {
        changeStep(nowPage-1);
        event.preventDefault();
    });

    content1.addEventListener('click', event => {
        changeStep(1);
        event.preventDefault();
    });

    content2.addEventListener('click', event => {
        changeStep(2);
        event.preventDefault();
    });

    content3.addEventListener('click', event => {
        changeStep(3);
        event.preventDefault();
    });

    content4.addEventListener('click', event => {
        changeStep(4);
        event.preventDefault()
    });

    content5.addEventListener('click', event => {
        changeStep(5);
        event.preventDefault();
    });

    faq1.addEventListener('click', event => {
        faqChangeState(1);
        event.preventDefault();
    });
    faq2.addEventListener('click', event => {
        faqChangeState(2);
        event.preventDefault();
    });
    faq3.addEventListener('click', event => {
        faqChangeState(3);
        event.preventDefault();
    });
    faq4.addEventListener('click', event => {
        faqChangeState(4);
        event.preventDefault();
    });

    }
)