// =========================================
// PAGE NAVIGATION
// =========================================

const pages = document.querySelectorAll(".page");


function showPage(pageId) {

    pages.forEach(function(page) {
        page.classList.add("hidden");
    });


    const pageToShow = document.getElementById(pageId);

    pageToShow.classList.remove("hidden");

}


// =========================================
// COVER → PHOTO WALL
// =========================================

document
    .getElementById("open-button")
    .addEventListener("click", function() {

        showPage("photos");

    });


// =========================================
// PHOTO WALL → TIMELINE
// =========================================

document
    .getElementById("to-timeline")
    .addEventListener("click", function() {

        showPage("timeline");

    });


// =========================================
// TIMELINE → THINGS
// =========================================

document
    .getElementById("to-things")
    .addEventListener("click", function() {

        showPage("things");

    });


// =========================================
// THINGS → LETTER
// =========================================

document
    .getElementById("to-letter")
    .addEventListener("click", function() {

        showPage("letter");

    });


// =========================================
// LETTER → FINAL ENVELOPE
// =========================================

document
    .getElementById("to-final")
    .addEventListener("click", function() {

        showPage("final");

    });


// =========================================
// PHOTO LIGHTBOX
// =========================================

const photoCards = document.querySelectorAll(".photo-card");

const lightbox = document.getElementById("photo-lightbox");

const lightboxImage =
    document.getElementById("lightbox-image");

const lightboxCaption =
    document.getElementById("lightbox-caption");

const closeLightbox =
    document.getElementById("close-lightbox");


// Open photo

photoCards.forEach(function(card) {

    card.addEventListener("click", function() {

        const image = card.querySelector("img");

        const caption = card.querySelector("p");


        lightboxImage.src = image.src;

        lightboxImage.alt = image.alt;

        lightboxCaption.textContent = caption.textContent;


        lightbox.classList.remove("hidden");

    });

});


// Close photo

closeLightbox.addEventListener("click", function() {

    lightbox.classList.add("hidden");

});


// Close when clicking outside the photo

lightbox.addEventListener("click", function(event) {

    if (event.target === lightbox) {

        lightbox.classList.add("hidden");

    }

});

// =========================================
// INTERACTIVE NOTES
// =========================================

const notes = document.querySelectorAll(".note");

notes.forEach(function(note) {

    note.addEventListener("click", function() {

        note.classList.toggle("flipped");

    });

});

// =========================================
// ENVELOPE
// =========================================

const envelope =
    document.getElementById("envelope");

const openEnvelope =
    document.getElementById("open-envelope");

const finalMessage =
    document.getElementById("final-message");


openEnvelope.addEventListener("click", function() {

    envelope.classList.add("open");

    openEnvelope.classList.add("hidden");

    setTimeout(function() {

        finalMessage.classList.remove("hidden");

    }, 700);

});