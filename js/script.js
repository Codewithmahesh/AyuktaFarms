let menu = document.querySelector('#menu-bars');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

// Home Swiper
var swiper = new Swiper(".mySwiperHome", {
    spaceBetween: 30,
    effect: "fade",
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    // pagination: {
    //     el: ".swiper-pagination",
    //     clickable: true,
    // },
    autoplay: {
        delay: 2000, // Set the delay between slides in milliseconds
        disableOnInteraction: false, // Allow autoplay to continue even when user interacts with swiper
    },
});


// Review 
const reviews = [
    {
        id: 1,
        name: "susan smith",
        job: "web developer",
        img:
            "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
        text:
            "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
    },
    {
        id: 2,
        name: "anna johnson",
        job: "web designer",
        img:
            "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
        text:
            "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
    },
    {
        id: 3,
        name: "peter jones",
        job: "intern",
        img:
            "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
        text:
            "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
    },
    {
        id: 4,
        name: "bill anderson",
        job: "the boss",
        img:
            "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
        text:
            "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
    },
];
//select item
const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");
const prevBtn = document.querySelector('.prev-btn')
const nextBtn = document.querySelector('.next-btn')
const randomBtn = document.querySelector('.random-btn')
//set starting iten
let currentItem = 0;


//Load initial item
window.addEventListener('DOMContentLoaded', () => {
    showPerson(currentItem)
})
function showPerson(person) {
    const item = reviews[person]
    img.src = item.img
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text
}
//Load After clicking button
nextBtn.addEventListener('click', () => {
    currentItem++;
    if (currentItem > reviews.length - 1) {
        currentItem = 0
    }
    showPerson(currentItem)

})
prevBtn.addEventListener('click', () => {
    currentItem--;
    if (currentItem < 0) {
        currentItem = reviews.length - 1
    }
    showPerson(currentItem)

})
function getRandomNumber() {
    return Math.floor(Math.random() * reviews.length)
}
randomBtn.addEventListener('click', () => {
    showPerson(getRandomNumber())
})

// Function to show next slide
function showNextPerson() {
    currentItem++;
    if (currentItem > reviews.length - 1) {
        currentItem = 0;
    }
    showPerson(currentItem);
}

// Auto-advance the slider every 5 seconds (5000 milliseconds)
const interval = setInterval(showNextPerson, 2000);

// Stop the auto-advancing when user hovers over the slider
const slider = document.querySelector('.slider-container');
slider.addEventListener('mouseenter', () => clearInterval(interval));

// Resume auto-advancing when user moves mouse out of the slider
slider.addEventListener('mouseleave', () => {
    interval = setInterval(showNextPerson, 5000);
});





var swiper = new Swiper(".home-slider", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 2,
        slideShadows: true,
    },
    loop: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    }
});