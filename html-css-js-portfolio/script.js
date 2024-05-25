document.addEventListener('DOMContentLoaded', function() {
    // Fetch and display the introduction data
    fetch('fetch_profile.php', {cache: "no-store"}) // Ensuring no cache is used
    .then(response => response.json())
    .then(data => {
        document.querySelector('.title').textContent = data.name + ' - ' + data.title;
        document.querySelector('.section__pic-container img').src = data.profile_pic;
        // Add more elements as needed
    })
    .catch(error => console.error('Error loading the profile data:', error));

    // Fetch and display the About Me data
    fetch('fetch_about.php', {cache: "no-store"}) // Ensuring no cache is used
    .then(response => response.json())
    .then(data => {
        // Ensure you have HTML elements with these IDs in your index.html
        document.getElementById('experienceText').textContent = data.experience;
        document.getElementById('educationText').textContent = data.education;
        document.getElementById('descriptionText').textContent = data.description;
    })
    .catch(error => console.error('Error loading the About Me data:', error));

   
});

document.addEventListener('DOMContentLoaded', function() {
    fetch('fetch_contact.php')
    .then(response => response.json())
    .then(data => {
        if(data.email) {
            document.getElementById('emailContact').href = 'mailto:' + data.email;
            document.getElementById('emailContact').textContent = data.email;
        }
        if(data.linkedin) {
            document.getElementById('linkedinContact').href = data.linkedin;
            document.getElementById('linkedinContact').textContent = 'LinkedIn';
        }
    })
    .catch(error => console.error('Error fetching contact data:', error));
});