const toggleButton1 = document.getElementById('toggleButton1');
const accordionImage1 = document.getElementById('accordionImage1');
const accordionParagraph1 = document.getElementById('accordionParagraph1');

const toggleButton2 = document.getElementById('toggleButton2');
const accordionImage2 = document.getElementById('accordionImage2');
const accordionParagraph2 = document.getElementById('accordionParagraph2');

const toggleButton3 = document.getElementById('toggleButton3');
const accordionImage3 = document.getElementById('accordionImage3');
const accordionParagraph3 = document.getElementById('accordionParagraph3');

toggleButton1.addEventListener('click', () => {
    if (accordionImage1.src.includes('VectorUp.svg')) {
    accordionImage1.src = 'assets/VectorDown.svg';
    accordionParagraph1.classList.remove('hidden');
    } else {
    accordionImage1.src = 'assets/VectorUp.svg';
    accordionParagraph1.classList.add('hidden');
    }
});

toggleButton2.addEventListener('click', () => {
    if (accordionImage2.src.includes('VectorUp.svg')) {
    accordionImage2.src = 'assets/VectorDown.svg';
    accordionParagraph2.classList.remove('hidden');
    } else {
    accordionImage2.src = 'assets/VectorUp.svg';
    accordionParagraph2.classList.add('hidden');
    }
});

toggleButton3.addEventListener('click', () => {
if (accordionImage3.src.includes('VectorUp.svg')) {
    accordionImage3.src = 'assets/VectorDown.svg';
    accordionParagraph3.classList.remove('hidden');
} else {
    accordionImage3.src = 'assets/VectorUp.svg';
    accordionParagraph3.classList.add('hidden');
}
});
