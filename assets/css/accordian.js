function toggleAccordion(accordionId) {
  const accordionCard = document.getElementById(accordionId);
  const accordionContent = accordionCard.querySelector('.accordion-content');
  const accordionButtonImg = accordionCard.querySelector('button img');
  
  const wasActive = accordionCard.classList.contains('active');

  accordionCard.classList.remove('active');

  accordionContent.classList.remove('pt-5');
  accordionContent.classList.remove('pt-0');

  accordionCard.classList.toggle('active', !wasActive);

  accordionContent.classList.toggle('pt-5', accordionCard.classList.contains('active'));
  accordionContent.classList.toggle('pt-0', !accordionCard.classList.contains('active'));

  accordionContent.style.maxHeight = accordionCard.classList.contains('active') ? "200px" : '0';
  accordionButtonImg.style.transform = accordionCard.classList.contains('active') ? 'rotate(180deg)' : 'rotate(0)';
}
