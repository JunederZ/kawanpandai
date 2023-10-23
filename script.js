
let translateX = 0;
// let maxLeft = 0;
// let maxRight = 230;
let nowPage = 1

function faqChangeState(faqNum){

    let element = document.getElementById(`faq-${faqNum}`);

    // console.log(`h : ${sad}`);

    var computedHeight = window.getComputedStyle(element).height;
    var currentHeight = parseFloat(computedHeight); // Convert height to a numeric value
    
    if (currentHeight > 80) {
        element.style.height = '80px';
    } else {
        element.style.height = '140px';
    }

    // if (document.getElementById(`faq-${faqNum}`).style.height > 80) {
    //     document.getElementById(`faq-${faqNum}`).style.height = `80px`;
    // }
    // else {
    //     document.getElementById(`faq-${faqNum}`).style.height = `140px`;
    // }
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

document.addEventListener('DOMContentLoaded', function() {

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

    rightArrow.addEventListener('click', function() {
        changeStep(nowPage+1)
    });
    leftArrow.addEventListener('click', function() {
        changeStep(nowPage-1)
    });

    content1.addEventListener('click', function() {
        changeStep(1);
    });

    content2.addEventListener('click', function() {
        changeStep(2);
    });

    content3.addEventListener('click', function() {
        changeStep(3);
    });

    content4.addEventListener('click', function() {
        changeStep(4);
    });

    content5.addEventListener('click', function() {
        changeStep(5);
    });

    faq1.addEventListener('click', function() {
        faqChangeState(1);
    });
    faq2.addEventListener('click', function() {
        faqChangeState(2);
    });
    faq3.addEventListener('click', function() {
        faqChangeState(3);
    });
    faq4.addEventListener('click', function() {
        faqChangeState(4);
    });

    }
)