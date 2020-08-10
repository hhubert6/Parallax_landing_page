const hero_img_2 = document.querySelector('.hero__img2');
const hero_img_1 = document.querySelector('.hero__img1');
const hero_text = document.querySelector('.hero__text');

window.addEventListener('scroll', () => {
    const offsetY = window.scrollY;

    hero_img_2.style.transform = `translateY(${offsetY*0.35}px)`;
    hero_img_1.style.transform = `translateY(${offsetY*0.25}px)`;
    hero_text.style.transform = `translateX(-50%) translateY(${offsetY*0.65}px)`;
});