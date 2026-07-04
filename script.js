const customCursor = document.querySelector(".custom-cursor");

document.addEventListener("mousemove", function(event) {
    customCursor.style.left = event.clientX + "px";
    customCursor.style.top = event.clientY + "px";
    customCursor.classList.remove("cursor-hidden");
});

document.addEventListener("mouseleave", function() {
    customCursor.classList.add("cursor-hidden");
});

document.addEventListener("mouseenter", function() {
    customCursor.classList.remove("cursor-hidden");
});

document.querySelectorAll("a, button, select").forEach(function(element) {
    element.addEventListener("mouseenter", function() {
        customCursor.classList.add("cursor-clickable");
    });

    element.addEventListener("mouseleave", function() {
        customCursor.classList.remove("cursor-clickable");
    });
});