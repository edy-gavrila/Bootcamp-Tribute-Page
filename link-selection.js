const navLinks = document.querySelectorAll(".nav-item a");

const selectedLinkTextColor = "#05a0f8";
const linkTextColor = "#505050";


navLinks.forEach((link) => {
    link.addEventListener("click", () => {
        clearSelection(navLinks);
        applyTextColor(link, selectedLinkTextColor);
    });
});

function applyTextColor(element, color) {
    if (!element) {
        return;
    }
    element.style.color = color;
}

function clearSelection(links) {
    links.forEach((link) => applyTextColor(link, linkTextColor));
}

applyTextColor(navLinks[0], selectedLinkTextColor);