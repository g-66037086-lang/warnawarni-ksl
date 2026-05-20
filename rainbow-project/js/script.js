//Sound effects
const clickSound =
new Audio('audio/click.mp3');

const magicSound =
new Audio('audio/magic.mp3');

const unlockSound =
new Audio('audio/unlock.mp3');

const mixSound =
new Audio('audio/mix.mp3');

// START SCREEN
window.addEventListener('DOMContentLoaded', () => {

    // START BUTTON
    const startBtn = document.getElementById('start-btn');

    if (startBtn) {

        startBtn.addEventListener('click', () => {

            magicSound.play();

            document.getElementById('start-screen')
            .classList.add('hidden');
            
            document.getElementById('game-screen')
            .classList.remove('hidden');

        });

    }


    // LOGO CLICK
    const logo = document.getElementById('logo');

    if (logo) {

        logo.addEventListener('click', () => {

            document.getElementById('start-screen')
                .classList.remove('hidden');

            document.getElementById('game-screen')
                .classList.add('hidden');

            // remove active color
            document.querySelectorAll('.color')
                .forEach(c => c.classList.remove('active-color'));

            // hide all content
            document.querySelectorAll('.content-section')
                .forEach(sec => sec.classList.remove('active'));
        });

    }

});


// CURRENT LANGUAGE
let currentLang = localStorage.getItem('lang') || 'english';


// UNLOCKED LEVELS
let unlockedLevels = ['red'];


// LEVEL ORDER
const levelOrder = [
    'red',
    'orange',
    'yellow',
    'green',
    'blue',
    'indigo',
    'violet'
];


const texts = {

    malay: {

        ui: {
            
            intro: "Mari mulakan pengembaraan pelangi anda!",
            
            start: "Mula Pengembaraan",
            
            locked: "Tahap ini masih dikunci!",
            
            unlocked: "Warna baru telah dibuka! ",
            
            "read-btn": "Dengar"

        },

        red: { 
            title: "Gerbang Pelangi", 
            content: "Ini adalah pengenalan kepada laman web..." 
        },
        
        orange: { 
            title: "Dunia Warna Ceria" 
        },
        
        yellow: { 
            title: "Kisah Pari-Pari Magika", 
            content: "Cerita tentang Peri Warna...",
            video: '<source src="video/Kisah-Pari-Pari-Magika.mp4" type="video/mp4">'
        },
        
        green: { 
            title: "Detektif Bijak Warna", 
            content: "Mari uji pengetahuan warna anda!", 
            button: "Main Sekarang", 
            link: "https://kahoot.it/challenge/0010519232"
        },
        
        blue: { 
            title: "Makmal Magic Time", 
            content: "Pilih dua warna untuk dicampur dan lihat sihirnya!", 

            selectedColours: {
                red: "Merah",
                yellow: "Kuning",
                blue: "Biru"
            },

            pickText: "Pilih dua warna!",

            mixes: {
                orange: "✨ Jingga! ✨",
                green: "✨ Hijau! ✨",
                purple: "✨ Ungu! ✨",
                unknown: "✨ Campuran Warna Cantik! ✨"
            }
        },
        
        indigo: { 
            title: "Cabaran Dunia Warna", 
            content: "Selesaikan tahap untuk membuka cabaran seterusnya!", 
            level1: "Tahap 1", 
            level2 : "Tahap 2", 
            level3 : "Tahap 3",
            final: "Cabaran Akhir",

            link1: "https://sjkcdamak.my.canva.site/c91grc58w9zx8kyk",
            link2: "https://sjkcdamak.my.canva.site/c8xfwtezqhdg2x66",
            link3: "https://wordwall.net/resource/9063642/colors",
            link4: "deepseek_html_20260518_1aa403 (1).html"
        },
        
        violet: {
            title: "Sudut Apresiasi Pelangi",
            ending: "🌈✨ Tahniah! Anda telah berjaya menamatkan pengembaraan Magika Pelangi!",
            appreciation1: "Setinggi-tinggi penghargaan dan terima kasih diucapkan kepada semua pihak yang terlibat dalam penghasilan laman web ini. 💖",
            appreciation2: "Laman web ini dibangunkan untuk membantu murid mengenal warna, memupuk minat membaca dan meningkatkan kemahiran celik digital melalui aktiviti interaktif yang menyeronokkan. 🎨📚💻",
            appreciation3: "Penghasilan bahan digital ini turut menggunakan bantuan teknologi AI seperti:",
            teacherTitle: "👩‍🏫 Disediakan oleh:",
            thankYou: "🌈 Terima kasih kerana bersama-sama meneroka dunia warna yang penuh magik dan keceriaan! ✨"
        },

    },

    english: {

        ui: {
            
            intro: "Let’s start your rainbow adventure!",
            
            start: "Start Adventure",
            
            locked: "This level is still locked!",
            
            unlocked: "New colour unlocked! ",

        },

        red: {
            title: "Rainbow Gate", 
            content: "This is an introduction to the website." 
        },
        
        orange: {
            title: "Cheerful World of Colors"
        },
        
        yellow: { 
            title: "Magic Fairy Tales", 
            content: "Story of the colour fairy.",
            video: '<source src="video/Magical-Fairy-Tale.mp4" type="video/mp4">'
        },
        
        green: { 
            title: "Smart Color Detective", 
            content: "Let's test your color knowledge!", 
            button: "Play Now",
            link: "https://kahoot.it/challenge/002867376"
        },
        
        blue: { 
            title: "Magic Time Lab", 
            content: "Pick two colours to mix and see the magic happen!",
            
            selectedColours: {
                red: "Red",
                yellow: "Yellow",
                blue: "Blue"
            },

            pickText: "Pick two colours!",

            mixes: {
                orange: "✨ Orange! ✨",
                green: "✨ Green! ✨",
                purple: "✨ Purple! ✨",
                unknown: "✨ Beautiful Color Mix! ✨"
            }
        },
        
        indigo: { 
            title: "Color World Challenge", 
            content: "Complete the level to unlock the next challenge!", 
            level1: "Level 1", 
            level2 : "Level 2", 
            level3 : "Level 3",
            final: "Final Challenge",

            link1: "https://sjkcdamak.my.canva.site",
            link2: "deepseek_html_20260518_1e092c.html",
            link3: "https://wordwall.net/resource/9063642/colors",
            link4: "deepseek_html_20260518_1f3e9a.html"
        },
        
        violet: {
            title: "Rainbow Appreciation Corner",
            ending: "🌈✨ Congratulations! You have completed the Rainbow Adventure!",
            appreciation1: "Special thanks to everyone involved in creating this website. 💖",
            appreciation2: "This website was developed to help children learn colours, encourage reading interest and improve digital literacy through fun interactive activities. 🎨📚💻",
            appreciation3: "This digital project also used AI tools such as:",
            teacherTitle: "👩‍🏫 Prepared by:",
            thankYou: "🌈 Thank you for exploring the magical world of colours together! ✨"
        },

    }

};



// LANGUAGE BUTTONS
document.querySelectorAll('.lang-btn').forEach(button => {

    // default active language
    if (button.dataset.lang === currentLang) {
        button.classList.add('active-lang');
    }

    button.addEventListener('click', () => {

        currentLang = button.dataset.lang;

        localStorage.setItem('lang', currentLang);

        // remove old active
        document.querySelectorAll('.lang-btn')
        .forEach(btn => btn.classList.remove('active-lang'));

        // add new active
        button.classList.add('active-lang');

        updateTexts();
        updateCard();

    });

});



// UPDATE TEXTS
function updateTexts() {

    // =========================
    // RAINBOW BUTTONS
    // =========================
    document.querySelectorAll('.color')
    .forEach(color => {

        const id = color.id;

        const contentData =
        texts[currentLang][id];

        if (!contentData) return;

        let title =
        contentData.title;

        // lock icon
        if (!unlockedLevels.includes(id)) {

            title += `
            <i class="fa-solid fa-lock lock-icon"></i>
            `;

            color.classList.add('locked');

        } else {

            color.classList.remove('locked');

        }

        color.innerHTML = title;

    });


    // =========================
    // START SCREEN
    // =========================

    // start button
    const startText =
    document.getElementById('start-text');

    if (startText) {

        startText.textContent =
        texts[currentLang].ui.start;

    }

    // intro text
    const introText =
    document.getElementById('intro-text');

    if (introText) {

        introText.textContent =
        texts[currentLang].ui.intro;

    }


    // =========================
    // RED SECTION
    // =========================

    const introList =
    document.querySelector('.intro-list');

    const redTitle =
    document.querySelector('#red-content h2');

    // update title
    if (redTitle) {

        redTitle.textContent =
        texts[currentLang].red.title;

    }

    // update intro list
    if (introList) {

        introList.innerHTML = '';

        const currentIntroList =

        currentLang === 'malay'
        ? redIntroList
        : redIntroListEn;

        currentIntroList.forEach(item => {

            introList.innerHTML += `
            <li>${item}</li>
            `;

        });

    }


    // =========================
    // YELLOW SECTION
    // =========================

    const yellow =
    document.getElementById('yellow-content');

    if (yellow) {

        const yellowTitle =
        yellow.querySelector('h2');

        const yellowText =
        yellow.querySelector('p');

        const yellowVideo =
        yellow.querySelector('video');

        if (yellowTitle) {

            yellowTitle.textContent =
            texts[currentLang].yellow.title;

        }

        if (yellowText) {

            yellowText.textContent =
            texts[currentLang].yellow.content;

        }

        if (yellowVideo) {

            yellowVideo.innerHTML =
            texts[currentLang].yellow.video;

            yellowVideo.load();

        }

    }

    // =========================
    // GREEN SECTION
    // =========================

    const green =
    document.getElementById('green-content');

    if (green) {

        const greenTitle =
        green.querySelector('h2');

        const greenText =
        green.querySelector('p');

        const greenBtn =
        green.querySelector('.quiz-btn-text');

        const quizBtn =
        green.querySelector('.quiz-btn');

        if (greenTitle) {

            greenTitle.textContent =
            texts[currentLang].green.title;

        }

        if (greenText) {

            greenText.textContent =
            texts[currentLang].green.content;

        }

        if (greenBtn) {
            
            greenBtn.textContent =
            texts[currentLang].green.button;

        }

        if (quizBtn) {

            quizBtn.href =
            texts[currentLang].green.link;

        }

    }

    // =========================
    // BLUE SECTION
    // =========================

    const blue =
    document.getElementById('blue-content');

    if (blue) {

        const blueTitle =
        blue.querySelector('h2');

        const blueText =
        blue.querySelector('p');

        const pickText =
        blue.querySelector('#selected-colours');

        const mixResult =
        blue.querySelector('#mix-result');

        if (blueTitle) {

            blueTitle.textContent =
            texts[currentLang].blue.title;

        }

        if (blueText) {

            blueText.textContent =
            texts[currentLang].blue.content;

        }

        if (pickText) {

            pickText.textContent =
            texts[currentLang].blue.pickText;

        }

        if (mixResult) {

            mixResult.dataset.orange =
            texts[currentLang].blue.mixes.orange; 

            mixResult.dataset.green =
            texts[currentLang].blue.mixes.green;

            mixResult.dataset.purple =
            texts[currentLang].blue.mixes.purple;

            mixResult.dataset.unknown =
            texts[currentLang].blue.mixes.unknown;

        }

    }

    // =========================
    // INDIGO SECTION
    // =========================

    const indigo =
    document.getElementById('indigo-content');

    if (indigo) {

        const indigoTitle =
        indigo.querySelector('h2');

        const indigoText =
        indigo.querySelector('p');

        const level1 =
        indigo.querySelector('.level1-text');

        const level2 =
        indigo.querySelector('.level2-text');

        const level3 =
        indigo.querySelector('.level3-text');

        const finalLevel =
        indigo.querySelector('.final-text');

        // buttons
        const level1Btn =
        document.getElementById('level1-btn');

        const level2Btn =
        document.getElementById('level2-btn');

        const level3Btn =
        document.getElementById('level3-btn');

        const level4Btn =
        document.getElementById('level4-btn');

        if (indigoTitle) {

            indigoTitle.textContent =
            texts[currentLang].indigo.title;

        }

        if (indigoText) {

            indigoText.textContent =
            texts[currentLang].indigo.content;

        }

         // buttons
         if (level1) {
        
            level1.textContent =
            texts[currentLang].indigo.level1;
    
        }

    
        if (level2) {
        
            level2.textContent =
            texts[currentLang].indigo.level2;
    
        }

        if (level3) {

            level3.textContent =
            texts[currentLang].indigo.level3;

        }
    
        if (finalLevel) {

            finalLevel.textContent =
            texts[currentLang].indigo.final;

        }

        // ⭐ CHANGE LINKS
        if (level1Btn) {

        level1Btn.dataset.link =
        texts[currentLang].indigo.link1;

        }

        if (level2Btn) {

        level2Btn.dataset.link =
        texts[currentLang].indigo.link2;

        }

        if (level3Btn) {

        level3Btn.dataset.link =
        texts[currentLang].indigo.link3;

        }

        if (level4Btn) {

        level4Btn.dataset.link =
        texts[currentLang].indigo.link4;

        }

    }

    // =========================
    // VIOLET SECTION
    // =========================

    const violet =
    document.getElementById('violet-content');

    if (violet) {

        violet.querySelector('.violet-title')
        .textContent =
        texts[currentLang].violet.title;

        violet.querySelector('.ending-text')
        .textContent =
        texts[currentLang].violet.ending;

        violet.querySelector('.appreciation-1')
        .textContent =
        texts[currentLang].violet.appreciation1;

        violet.querySelector('.appreciation-2')
        .textContent =
        texts[currentLang].violet.appreciation2;

        violet.querySelector('.appreciation-3')
        .textContent =
        texts[currentLang].violet.appreciation3;

        violet.querySelector('.teacher-title')
        .textContent =
        texts[currentLang].violet.teacherTitle;

        violet.querySelector('.thank-you')
        .textContent =
        texts[currentLang].violet.thankYou;

    }

}



// UNLOCK NEXT LEVEL
function unlockNextLevel(currentLevel) {

    const currentIndex =
    levelOrder.indexOf(currentLevel);

    const nextLevel =
    levelOrder[currentIndex + 1];

    if (!nextLevel) return;

    if (!unlockedLevels.includes(nextLevel)) {

        unlockedLevels.push(nextLevel);

        // 🌈 popup first
        alert(texts[currentLang].ui.unlocked);

        const nextElement =
        document.getElementById(nextLevel);

        if (nextElement) {

            // reset animation
            nextElement.classList.remove('unlocked-anim');
            void nextElement.offsetWidth;

            // animation
            nextElement.classList.add('unlocked-anim');

            // 🔊 sound effect
            unlockSound.currentTime = 0;
            unlockSound.play();

            setTimeout(() => {

                nextElement.classList.remove('unlocked-anim');

            }, 700);

        }

        updateTexts();

    }

}



// READ BUTTONS
const readBtn =
document.querySelector('.read-btn');

if (readBtn) {

    readBtn.addEventListener('click', () => {

        readIntro();

    });

}

function readIntro() {

    const items =
    document.querySelectorAll('.intro-list li');

    let index = 0;

    function speakNext() {

        // stop
        if (index >= items.length) return;

        // remove old highlight
        items.forEach(item => {
            item.classList.remove('speaking');
        });

        // current sentence
        const currentItem =
        items[index];

        // highlight
        currentItem.classList.add('speaking');

        // speech
        const utterance =
        new SpeechSynthesisUtterance(
            currentItem.textContent
        );

        // 🌈 language
        if (currentLang === 'malay') {
            utterance.lang = 'id-ID';
            
            const voices =
            speechSynthesis.getVoices();
            
            const malayVoice =
            voices.find(voice =>
                voice.lang.includes('id')
            );
            
            if (malayVoice) {
                utterance.voice = malayVoice;
            }
        
        } else {
            utterance.lang = 'en-US';
            }
            
            utterance.rate = 0.85;
            utterance.pitch = 1.1;

            // next after speaking
            utterance.onend = () => {
                currentItem.classList.remove('speaking');
                index++;
                
                speakNext();
            };
            
            speechSynthesis.speak(utterance);
        }
        speakNext();
    }
    
    // CLICK COLOURS
    document.querySelectorAll('.color').forEach(color => {

        color.addEventListener('click', () => {

            clickSound.currentTime = 0;
            clickSound.play();
            
            // locked level
            if (!unlockedLevels.includes(color.id)) {
                alert(texts[currentLang].ui.locked);
                return;
            }

            // 🌈 ACTIVE COLOR
            document.querySelectorAll('.color')
            .forEach(c => c.classList.remove('active-color'));

            color.classList.add('active-color');

            // hide all content
            document.querySelectorAll('.content-section')
            .forEach(sec => sec.classList.remove('active'));

            // show selected content
            const target = document.getElementById(color.id + '-content');

            if (target) {
                target.classList.add('active');
            }

            // unlock next level
            unlockNextLevel(color.id);

        });

    });



// Btn-1 red
const redIntroList = [
    '<i class="fa-solid fa-pen-nib"></i> Murid akan memulakan pengembaraan dengan pengenalan laman web.',
    '<i class="fa-solid fa-pen-nib"></i> Murid belajar mengenal warna asas melalui kad imbas.',
    '<i class="fa-solid fa-pen-nib"></i> Murid mendengar cerita pari-pari warna-warni.',
    '<i class="fa-solid fa-pen-nib"></i> Murid menjawab soalan mudah berkaitan cerita.',
    '<i class="fa-solid fa-pen-nib"></i> Murid meneroka aktiviti mencampurkan warna secara ajaib.',
    '<i class="fa-solid fa-pen-nib"></i> Murid bermain permainan interaktif yang menyeronokkan.',
    '<i class="fa-solid fa-pen-nib"></i> Pengembaraan diakhiri dengan penghargaan khas. '
];

const redIntroListEn = [
    '<i class="fa-solid fa-pen-nib"></i> Children begin the adventure with a website introduction.',
    '<i class="fa-solid fa-pen-nib"></i> Children learn basic colours through flashcards.',
    '<i class="fa-solid fa-pen-nib"></i> Children listen to a magical colour fairy story.',
    '<i class="fa-solid fa-pen-nib"></i> Children answer simple questions about the story.',
    '<i class="fa-solid fa-pen-nib"></i> Children explore magical colour mixing activities.',
    '<i class="fa-solid fa-pen-nib"></i> Children play fun interactive games.',
    '<i class="fa-solid fa-pen-nib"></i> The adventure ends with a special appreciation section. '
];



// Btn-2 orange
updateTexts();

const colourCards = [

    {
        image: "🍎",
        english: "Red",
        malay: `<span class="syllable">Me</span><span>rah</span>`,

        malaySpeech: "Merah"
    },

    {
        image: "🍊",
        english: "Orange",
        malay: `<span class="syllable">Jing</span><span>ga</span>`,

        malaySpeech: "Jingga"
    },

    {
        image: "☀️",
        english: "Yellow",
        malay: `<span class="syllable">Ku</span><span>ning</span>`,

        malaySpeech: "Kuning"
    },

    {
        image: "🫐️",
        english: "Blue",
        malay: `<span class="syllable">Bi</span><span>ru</span>`,

        malaySpeech: "Biru"
    },

    {
        image: "🍃",
        english: "Green",
        malay: `<span class="syllable">Hi</span><span>jau</span>`,

        malaySpeech: "Hijau"
    },

    {
        image: "🍇",
        english: "Purple",
        malay: `<span class="syllable">Un</span><span>gu</span>`,

        malaySpeech: "Ungu"
    },

];

let currentCard = 0;
updateCard();
function updateCard() {
    
    const card = colourCards[currentCard];

    // image
    document.getElementById('card-image').textContent =
    card.image;

    // word
    const cardWord =
    document.getElementById('card-word');

    if (currentLang === 'english') {

        cardWord.textContent =
        card.english;

    } else {

        cardWord.innerHTML =
        card.malay;

    }

    // arrows
    const prevBtn =
    document.getElementById('prev-btn');

    const nextBtn =
    document.getElementById('next-btn');

    prevBtn.style.visibility =
    currentCard === 0
    ? 'hidden'
    : 'visible';

    nextBtn.style.visibility =
    currentCard === colourCards.length - 1
    ? 'hidden'
    : 'visible';

}

document.getElementById('prev-btn')
.addEventListener('click', () => {

    if (currentCard > 0) {

        currentCard--;

        updateCard();

    }

});

document.getElementById('next-btn')
.addEventListener('click', () => {

    if (
        currentCard <
        colourCards.length - 1
    ) {

        currentCard++;

        updateCard();

    }

});

document.getElementById('speak-card-btn')
.addEventListener('click', () => {

    speechSynthesis.cancel();

    const card =
    colourCards[currentCard];

    let text = '';

    const speech =
    new SpeechSynthesisUtterance();

    // language
    if (currentLang === 'english') {

        text = card.english;

        speech.lang = 'en-US';

        speech.rate = 0.8;
        speech.pitch = 1.1;

    } else {

        text = card.malaySpeech;

        speech.lang = 'ms-MY';

        speech.rate = 0.9;
        speech.pitch = 1;

    }

    speech.text = text;

    speechSynthesis.speak(speech);

    updateCard();

});

// content sections (orange)
document.querySelectorAll('.content-section').forEach(section => {
    
    const id = section.id.replace('-content', '');
    
    // 🌈 skip special red layout
    if (id === 'red') return;
    if (!texts[currentLang][id]) return;

    const h2 = section.querySelector('h2');
    const p = section.querySelector('p');

    
    if (h2) {
        h2.textContent =
        texts[currentLang][id].title;
    }
    
    if (p) {
        p.textContent =
        texts[currentLang][id].content;
    }
});



// Btn-5 blue
let selectedColours = [];

function updateLiquid() {

    const liquid =
    document.getElementById('liquid');

    if (selectedColours.length === 0) {

        liquid.style.height = '0%';
        liquid.style.background = 'transparent';

    }

    else if (selectedColours.length === 1) {

        liquid.style.height = '50%';
        liquid.style.background =
        selectedColours[0];

    }

    else if (selectedColours.length === 2) {

        mixSound.currentTime = 0; 
        mixSound.play();

        liquid.style.height = '100%';

        const mix =
        selectedColours.sort().join('-');

        if (mix === 'red-yellow') {
            liquid.style.background = 'orange';
        }
        else if (mix === 'blue-yellow') {
            liquid.style.background = 'green';
        }
        else if (mix === 'blue-red') {
            liquid.style.background = 'purple';
        }
        else {
            liquid.style.background = 'grey';
        }

        liquid.classList.add('mix-animate');

        setTimeout(() => {
            liquid.classList.remove('mix-animate');
        }, 600);
    }
}

updateLiquid();

document.querySelectorAll('.mix-btn')
.forEach(button => {

    button.addEventListener('click', () => {

        const colour =
        button.dataset.colour;

        if (selectedColours.includes(colour)) {
            return;
        }

        if (selectedColours.length < 2) {

            selectedColours.push(colour);

            button.classList.add('active');

        }

        updateSelected();
        updateLiquid();

        if (selectedColours.length === 2) {

            mixColours();

        }

    });

});


// UPDATE TEXT
function updateSelected() {

    const colourNames = {

        red: {
            english: 'Red',
            malay: 'Merah'
        },

        yellow: {
            english: 'Yellow',
            malay: 'Kuning'
        },

        blue: {
            english: 'Blue',
            malay: 'Biru'
        }

    };

    const translatedColours =
    selectedColours.map(colour =>
        colourNames[colour][currentLang]
    );

    document.getElementById('selected-colours')
    .textContent =
    translatedColours.join(' + ');

}


// MIXING
function mixColours() {

    const result =
    document.getElementById('mix-result');

    const mix =
    selectedColours.sort().join('-');

    const mixes = {
        
        'red-yellow': {
            colour: 'orange',
            text:
            texts[currentLang].blue.mixes.orange
        },

        'blue-yellow': {
            colour: 'green',
            text:
            texts[currentLang].blue.mixes.green
        },

        'blue-red': {
            colour: 'purple',
            text:
            texts[currentLang].blue.mixes.purple
        },

        'red-blue': {
            colour: 'purple',
            text:
            texts[currentLang].blue.mixes.purple
        }

    };

    if (mixes[mix]) {

        document.getElementById('liquid')
        .style.background =
        mixes[mix].colour;

        result.textContent =
        mixes[mix].text;

    } else {

        document.getElementById('liquid')
        .style.background =
        'grey';

        result.textContent =
        texts[currentLang]
        .blue.mixes.unknown;

    }

    setTimeout(() => {

        selectedColours = [];

        document.getElementById('selected-colours')
        .textContent =
        selectedColours.join(' + ');

        document.getElementById('mix-result')
        .innerHTML =
        '✨ <i class="fa-solid fa-wand-sparkles"></i> ✨';

        document.querySelectorAll('.mix-btn')
        .forEach(btn =>
            btn.classList.remove('active')
        );

        updateLiquid();

    }, 3000);

}




// Btn-6 indigo
let currentGameLevel = 1;

const levelButtons =
document.querySelectorAll('.level-btn');

levelButtons.forEach(button => {

    button.addEventListener('click', () => {

        // locked level
        if (button.classList.contains('locked-level')) {

            alert("Finish the previous level first! ");

            return;
        }

        // open game
        window.open(button.dataset.link, "_blank");

        // unlock next level
        unlockGameLevel();

    });

});

function unlockGameLevel() {

    currentGameLevel++;

    // LEVEL 2
    if (currentGameLevel === 2) {

        const level2 =
        document.getElementById('level2-btn');

        level2.classList.remove('locked-level');

        level2.classList.add('unlocked-level');

        const level2Icon =
        level2.querySelector('.level2-icon');

        if (level2Icon) {

            level2Icon.className =
            'fa-solid fa-star level2-icon';

        }

    }

    // LEVEL 3
    if (currentGameLevel === 3) {

        const level3 =
        document.getElementById('level3-btn');

        level3.classList.remove('locked-level');

        level3.classList.add('unlocked-level');

        const level3Icon =
        level3.querySelector('.level3-icon');

        if (level3Icon) {

            level3Icon.className =
            'fa-solid fa-star level3-icon';

        }

    }

    // FINAL LEVEL
    if (currentGameLevel === 4) {

        const level4 =
        document.getElementById('level4-btn');

        level4.classList.remove('locked-level');

        level4.classList.add('unlocked-level');

        const finalIcon =
        level4.querySelector('.final-icon');

        if (finalIcon) {

            finalIcon.className =
            'fa-solid fa-trophy final-icon';

        }

    }

}