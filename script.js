gsap.registerPlugin(ScrollTrigger);

function ScrollHorizontal(container, contant) {
    let scrollContainer = document.querySelector(container);
    let scrollContant = document.querySelectorAll(contant);

    let scrollWidth = 0;
    scrollContant.forEach((element) => {
        scrollWidth += element.scrollWidth;
    });
    scrollWidth -= window.innerWidth;

    let tl = gsap.timeline();
    tl.to(scrollContant, {
        x: -scrollWidth,
        duration: 1,
        ease: "none",
    });

    ScrollTrigger.create({
        trigger: scrollContainer,
        start: 'top top',
        end: () => `+=${scrollWidth}`,
        pin: true,
        scrub: 1,
        animation: tl
    });

    let bodyOverflow = document.body.style.overflow;
    ScrollTrigger.create({
        trigger: scrollContainer,
        start: 'top top',
        end: 'bottom bottom',
        onEnter: () => bodyOverflow = 'hidden',
        onLeave: () => bodyOverflow = 'auto',
        onEnterBack: () => bodyOverflow = 'hidden',
        onLeaveBack: () => bodyOverflow = 'auto'
    });
}

ScrollHorizontal('.scroll-container', '.scroll-content');

function ScrollDown(container, content, panel) {
    let scrollContainer = document.querySelector(container);
    let scrollContant = document.querySelectorAll(content);
    let arrayDiv = gsap.utils.toArray(panel);

    let scrollWidth = 0;
    scrollContant.forEach((element) => {
        scrollWidth += element.scrollWidth;
    });
    scrollWidth -= window.innerWidth;

    let tl = gsap.timeline();
    tl.fromTo('.p2', {
        xPercent: -100,
        yPercent: -100,
    }, {
        xPercent: -100,
        yPercent: 0,
        duration: 1
    }).fromTo('.p3', {
        xPercent: -300,
        yPercent: 0,
    }, {
        xPercent: -200,
        yPercent: 0,
        duration: 1
    }).fromTo('.p4', {
        xPercent: -300,
        yPercent: 100,
    }, {
        xPercent: -300,
        yPercent: 0,
        duration: 1
    });

    ScrollTrigger.create({
        trigger: scrollContainer,
        start: 'top top',
        end: () => `+=${scrollWidth}`,
        pin: true,
        scrub: 1,
        animation: tl,
        snap: 1 / (arrayDiv.length - 1),
    });


    let bodyOverflow = document.body.style.overflow;
    ScrollTrigger.create({
        trigger: scrollContainer,
        start: 'top top',
        end: 'bottom bottom',
        onEnter: () => bodyOverflow = 'hidden',
        onLeave: () => bodyOverflow = 'auto',
        onEnterBack: () => bodyOverflow = 'hidden',
        onLeaveBack: () => bodyOverflow = 'auto'
    });
}

ScrollDown(".divs", ".div", '.panel');


function ScrollOpacity(container, content, panel) {
    let conteiner = document.querySelector(container);
    let contents = document.querySelectorAll(content);
    let panels = gsap.utils.toArray(panel);

    let widthContant = 0;
    contents.forEach((e) => {
        widthContant += e.scrollWidth;
    });
    widthContant -= window.innerWidth;

    let tl = gsap.timeline();
    tl.fromTo('.pa2', {
        xPercent: -100,
        opacity: 0
    }, {
        xPercent: -100,
        opacity: 1,
        duration: 1
    }).fromTo('.pa3', {
        xPercent: -200,
        opacity: 0
    }, {
        xPercent: -200,
        opacity: 1,
        duration: 1
    }).fromTo('.pa4', {
        xPercent: -300,
        opacity: 0,
    }, {
        xPercent: -300,
        opacity: 1,
        duration: 1
    });

    ScrollTrigger.create({
        trigger: conteiner,
        start: 'top top',
        end: () => `+=${widthContant}`,
        scrub: 1,
        pin: true,
        animation: tl,
        snap: 1 / (panels.length - 1),
    });

    let bodyOverflow = document.body.style.overflow;
    ScrollTrigger.create({
        trigger: conteiner,
        start: 'top top',
        end: 'bottom bottom',
        onEnter: () => bodyOverflow = 'hidden',
        onLeave: () => bodyOverflow = 'auto',
        onEnterBack: () => bodyOverflow = 'hidden',
        onLeaveBack: () => bodyOverflow = 'auto'
    });
}

ScrollOpacity('.divConteiner', '.divContent', '.p');


function TextAnimation(classNameText, triggerDiv) {
    let text = document.querySelector(classNameText);

    const wordsOfText = text.innerHTML.split(' ');

    text.innerHTML = '';

    let nameClassWord = classNameText.replace('.', '') + 'Word';

    for (let i = 0; i < wordsOfText.length; i++) {
        let word = document.createElement('span');

        word.classList.add(nameClassWord);
        word.innerHTML = wordsOfText[i] + ' ';

        text.appendChild(word);
    }

    let words = document.querySelectorAll('.' + nameClassWord);

    let symbolsOfWord = [];

    for (let a = 0; a < words.length; a++) {
        for (let i = 0; i < words.length; i++) {
            symbolsOfWord[i] = words[i].innerHTML.split('');
        }
    }

    for (let i = 0; i < words.length; i++) {
        words[i].innerHTML = '';
    }

    let nameClassSymbol = classNameText.replace('.', '') + 'Symbol';

    for (let i = 0; i < symbolsOfWord.length; i++) {
        let symbols = symbolsOfWord[i];
        for (let a = 0; a < symbols.length; a++) {
            let symbol = document.createElement('span');

            symbol.classList.add(nameClassSymbol);
            symbol.innerHTML = symbols[a];

            words[i].appendChild(symbol);

            const rect = symbol.getBoundingClientRect();

            symbol.style.left = rect.left + 'px';
            symbol.style.top = rect.top + 'px';
            symbol.x = rect.left;
            symbol.y = rect.top;
        }
    }

    let symbols = document.querySelectorAll('.' + nameClassSymbol);

    for (let i = 0; i < symbols.length; i++) {
        symbols[i].style.position = 'absolute';
    }

    let tl = gsap.timeline();

    tl.fromTo("." + nameClassSymbol, {
        opacity: 0,
        y: 50
    }, {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.1
    });
}
TextAnimation('.textAnimation', '.spanAnimation');