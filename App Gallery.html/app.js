document.getElementById('searchForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent form from submitting in the traditional way
    filterApplets();
});

function filterApplets() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    const appletCards = document.querySelectorAll('.card');

    // Hide all cards initially
    appletCards.forEach(card => {
        card.style.display = 'none'; // Hide all cards by default
        card.classList.remove('pop-effect'); // Remove the pop effect if applied previously
    });

    // Show only the matching card and apply the pop effect
    let matchFound = false;
    appletCards.forEach(card => {
        const title = card.querySelector('.card-title').textContent.toLowerCase();
        const description = card.querySelector('.card-text').textContent.toLowerCase();

        if (title.includes(searchInput) || description.includes(searchInput)) {
            card.style.display = ''; // Display the matching card
            card.classList.add('pop-effect'); // Apply the pop effect to the matched card
            matchFound = true;
        }
    });

    // If no match is found, show an alert
    if (!matchFound) {
        alert("No matching applet found.");
    }
}
document.getElementById('searchForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent form from submitting in the traditional way
    filterApplets();
});

function filterApplets() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    const appletCards = document.querySelectorAll('.card');

    // Hide all cards initially
    appletCards.forEach(card => {
        card.style.display = 'none'; // Hide all cards by default
        card.classList.remove('pop-effect'); // Remove the pop effect if applied previously
    });

    // Show only the matching card and apply the pop effect
    let matchFound = false;
    appletCards.forEach(card => {
        const title = card.querySelector('.card-title').textContent.toLowerCase();
        const description = card.querySelector('.card-text').textContent.toLowerCase();

        if (title.includes(searchInput) || description.includes(searchInput)) {
            card.style.display = ''; // Display the matching card
            card.classList.add('pop-effect'); // Apply the pop effect to the matched card
            matchFound = true;
        }
    });

    // If no match is found, show an alert
    if (!matchFound) {
        alert("No matching applet found.");
    }
}
