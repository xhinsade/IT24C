// Handle form submit for the search functionality
        document.getElementById('searchForm').addEventListener('submit', function(e) {
            e.preventDefault(); // Prevent form from submitting in the traditional way
            filterApplets();
        });

        function filterApplets() {
            const searchInput = document.getElementById('searchInput').value.toLowerCase();
            const appletCards = document.querySelectorAll('.card');
            // Hide all cards initially
            appletCards.forEach(card => {
                card.style.display = 'none';
            });

            // Show only the matching card and apply pop effect
            let matchFound = false;
            appletCards.forEach(card => {
                const title = card.querySelector('.card-title').textContent.toLowerCase();
                const description = card.querySelector('.card-text').textContent.toLowerCase();

                // Check if either the title or description contains the search input
                if (title.includes(searchInput) || description.includes(searchInput)) {
                    card.style.display = ''; // Show the card
                    card.classList.add('pop-effect'); // Add pop effect
                    matchFound = true;
                } else {
                    card.classList.remove('pop-effect');
                }
            });
            // Optional: Show a message if no match is found
            if (!matchFound) {
                alert("No matching applet found.");
            }
        }
