document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelector('.slides');
    const slide = document.querySelectorAll('.slide');
    let currentIndex = 0;
    const prev = document.getElementById('prev');
    const next = document.getElementById('next');

    function showSlide(index) {
        if (index < 0) {
            currentIndex = slide.length - 1;
        } else if (index >= slide.length) {
            currentIndex = 0;
        } else {
            currentIndex = index;
        }
        slides.style.transform = `translateX(-${currentIndex * 100}%)`;

    }

    prev.addEventListener('click', () => {
        showSlide(currentIndex - 1);
    });

    next.addEventListener('click', () => {
        showSlide(currentIndex + 1);
    });
});







let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}



var i = 0;
var txt = 'Just as eyes are often considered windows to the soul, the name Ayunii suggests a person with a soulful presence. This name conveys a sense of grace and empathy, indicating someone who connects deeply with others and sees the world with compassion and understanding.'; /* The text to display */
var speed = 50; /* The speed/duration of the effect in milliseconds */

function typeWriter() {
    if (i < txt.length) {
        document.getElementById("demo").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}


// Scroll to top function
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
}

// Show the button when the user scrolls down 20px from the top of the document
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    var topButton = document.getElementById("topButton");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        topButton.style.display = "block";
    } else {
        topButton.style.display = "none";
    }
}

document.addEventListener("DOMContentLoaded", function() {
  const gallery = document.querySelector('.grid-container');

  // Add your image URLs here
  const images = [
    'image/gallery2.jpg',
    'image/memory6.jpg',
    'image/memoryy5.jpg',
    'image/friend6.jpg',
    'image/friends.png',
    'image/memoryy4.jpg',
    'image/memoryy3.jpg',
    'image/friend9.jpg',
    'image/myself4.jpg',
    'image/school.jpg',
    'image/sib.jpg',
    'image/abah.jpg',
    'image/beach.jpg',
    'image/brother.jpg',
    'image/friend.jpg',
    'image/education.png',
    'image/friend7.jpg',
    'image/friend8.jpg',
    'image/friend10.jpg',
    'image/friend11.jpg',
    'image/friend12.jpg',
    'image/friend13.jpg',
    'image/friends4.jpg',
    'image/friends5.jpg',
    'image/friends6.jpg',
    'image/friends7.jpg',
    'image/friends8.jpg',
    'image/gallery.jpg',
    'image/ibu.jpg',
    'image/kopi.jpg',
    'image/mum.jpg',
    'image/myself.jpg',
    'image/myself7.jpg',
    'image/nature.png',
    'image/sister.jpg',
    'image/myself9.jpg',
    'image/myself10.jpg',
    'image/myself8.jpg',
    'image/sunset2.jpg',
    'image/school8.jpg',
    'image/family5.jpg',
    'image/family2.jpg',
    'image/school10.jpg',
    'image/crazyppl.jpg',
    'image/beach2.jpg',
    'image/abahh.jpg',
    'image/abg.jpg',
    'image/anis2.jpg',
    'image/abahh2.jpg',
    'image/anis3.jpg',
    'image/gallery3.jpg',
    'image/ziyad2.jpg',
    'image/ibu2.jpg',
    'image/ibuu.jpg',
    'image/ibuuu.jpg',
    'image/ibuuuu.jpg',
    'image/anis4.jpg',
    'image/millah2.jpg',
    'image/millah3.jpg',
   


  

    // Add more image URLs as needed
  ];

  images.forEach(image => {
    const gridItem = document.createElement('div');
    gridItem.classList.add('grid-item');

    const img = document.createElement('img');
    img.src = image;
    img.alt = 'Memory Image';

    gridItem.appendChild(img);
    gallery.appendChild(gridItem);
  });
});

