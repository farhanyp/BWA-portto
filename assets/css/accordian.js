function toggleAccordion(accordionId) {
    const accordionCard = document.getElementById(accordionId);
    const accordionContent = accordionCard.querySelector('.accordion-content');
    const accordionButtonImg = accordionCard.querySelector('button img');
  
    accordionCard.classList.toggle('active');
    accordionContent.style.maxHeight = accordionCard.classList.contains('active') ? "200"+ 'px' : '0';
    accordionButtonImg.style.transform = accordionCard.classList.contains('active') ? 'rotate(180deg)' : 'rotate(0)';
  }