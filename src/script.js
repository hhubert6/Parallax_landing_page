const hero_img_2 = document.querySelector('.hero__img2');
const hero_img_1 = document.querySelector('.hero__img1');
const hero_text = document.querySelector('.hero__text');

gsap.registerPlugin(ScrollTrigger);

const tl = gsap.timeline({
	defaults: {
		ease: 'none',
	},
  scrollTrigger: {
    trigger: '.hero',
    scrub: true,
    start: 'top top',
		end: 'bottom top',
  },
});

tl.to(hero_text, { y: 1000 })
  .to(hero_img_2, { y: 700 }, 0)
  .to(hero_img_1, { y: 350 }, 0);
