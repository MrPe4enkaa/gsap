// document.addEventListener('DOMContentLoaded', () => {
//     gsap.registerPlugin(ScrollTrigger);

//     gsap.to('.square', {
//         x: 1700,
//         duration: 5,
//         scrollTrigger: {
//             trigger: '.square2',
//             start: 'top 50%',
//             end: 'top 1%',
//             markers: true,
//             pin: '.square',
//             pinSpacing: false,
//             toggleClass: 'red',
//             // toggleActions: 'restart none none none',
//             scrub: 1 // при помощи скрола действует анимация
//                 //              onEnter onLeave onEnterBack onLeaveBack
//         } //play pause resume reverse restart reset complete none
//     })
// });

//https://www.youtube.com/watch?v=7YsNBbQ55H8

//для одного

// gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

// let scrollContainer = document.querySelector('.scroll-container');
// let scrollContant = document.querySelector('.scroll-content');
// let scrollWidth = scrollContant.scrollWidth - window.innerWidth;

// ScrollTrigger.create({
//     trigger: scrollContainer,
//     start: 'top top',
//     end: () => `+=${scrollWidth}`,
//     pin: true,
//     markers: true,
//     scrub: 5,
//     onUpdate: (self) => {
//         const scrollPos = -scrollWidth * self.progress;
//         gsap.to(scrollContant, {
//             x: scrollPos,
//             duration: 1,
//             ease: "power2.out",
//         })
//     }
// })

// ScrollTrigger.create({
//     trigger: scrollContainer,
//     start: 'top top',
//     end: 'bottom bottom',
//     onEnter: () => document.body.style.overflow = 'hidden',
//     onLeave: () => document.body.style.overflow = 'auto',
//     onEnterBack: () => document.body.style.overflow = 'hidden',
//     onLeaveBack: () => document.body.style.overflow = 'auto'
// })




// document.addEventListener('DOMContentLoaded', () => {

//     gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

//     const scrollContainer = document.querySelector(".scroll-container");
//     const scrollContent = document.querySelector(".scroll-content");
//     const scrollWidth = scrollContent.scrollWidth - window.innerWidth;

//     ScrollTrigger.create({
//         trigger: scrollContainer,
//         start: "top top",
//         end: () => `+=${scrollWidth}`,
//         scrub: 5,
//         pin: true,
//         onUpdate: (self) => {
//             const scrollPosition = -scrollWidth * self.progress;
//             gsap.to(scrollContent, {
//                 x: scrollPosition,
//                 duration: 0.5,
//                 ease: "power2.out",
//             });
//         },
//     });

//     ScrollTrigger.create({
//         trigger: scrollContainer,
//         start: "top top",
//         end: "bottom bottom",
//         onEnter: () => (document.body.style.overflow = "hidden"),
//         onLeave: () => (document.body.style.overflow = "auto"),
//         onEnterBack: () => (document.body.style.overflow = "hidden"),
//         onLeaveBack: () => (document.body.style.overflow = "auto"),
//     });
// })




//
//
//
//для нескольких div
//
// gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

// // Получаем контейнер
// const divs = document.querySelector(".divs");

// // Получаем все контенты внутри контейнера
// const div = document.querySelectorAll(".div");

// // Вычисляем общую ширину прокрутки для всех контентов
// let totalScrollWidth = 0;
// div.forEach((content) => {
//     totalScrollWidth += content.scrollWidth; // Суммируем ширину каждого контента
// });
// totalScrollWidth -= window.innerWidth; // Учитываем видимую ширину окна

// // Создаем горизонтальный скролл
// ScrollTrigger.create({
//     trigger: divs,
//     start: "top top",
//     end: `+=${totalScrollWidth}`,
//     scrub: 1,
//     pin: true,
//     onUpdate: (self) => {
//         const progress = self.progress;
//         const scrollToX = -progress * totalScrollWidth;

//         // Анимируем все контенты
//         div.forEach((content, index) => {
//             gsap.to(content, {
//                 x: scrollToX, // Прокручиваем горизонтально
//                 duration: 0.5 * index, // Плавность движения
//                 ease: "power2.out",
//             });
//         });
//     },
// });

// // // Управляем вертикальным скроллом
// ScrollTrigger.create({
//     trigger: divs,
//     start: "top top",
//     end: "bottom bottom",
//     onEnter: () => (document.body.style.overflow = "hidden"),
//     onLeave: () => (document.body.style.overflow = "auto"),
//     onEnterBack: () => (document.body.style.overflow = "hidden"),
//     onLeaveBack: () => (document.body.style.overflow = "auto"),
// });








// gsap.to(window, {
//         duration: 10,
//         scrollTo: '.h'
//     })










// let scrollWidth = 0;
// scrollContant.forEach(element => {
//     scrollWidth += element.scrollWidth;
// })






//со старого когда scrollHorizontal внутри scrollTrigger 

// onUpdate: (self) => {
//     const scrollPos = -scrollWidth * self.progress;
//     gsap.to(scrollContant, {
//         x: scrollPos,
//         duration: 0.5,
//         ease: "power2.out",
//     })
// }