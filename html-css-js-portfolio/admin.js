document.addEventListener('DOMContentLoaded', function() {
    // Fetch and display the introduction data
    fetch('fetch_profile.php', { cache: "no-store" })
    .then(response => response.json())
    .then(data => {
        const tableBody = document.getElementById('dataBody');
        let row = `<tr>
            <td>${data.name}</td>
            <td>${data.title}</td>
            <td>${data.profile_pic}</td>
            <td>${data.cv_link}</td>
            <td>${data.linkedin_url}</td>
            <td>${data.github_url}</td>
        </tr>`;
        tableBody.innerHTML = row;

        document.querySelector('input[name="name"]').value = data.name;
        document.querySelector('input[name="title"]').value = data.title;
        document.querySelector('input[name="profile_pic"]').value = data.profile_pic;
        document.querySelector('input[name="cv_link"]').value = data.cv_link;
        document.querySelector('input[name="linkedin_url"]').value = data.linkedin_url;
        document.querySelector('input[name="github_url"]').value = data.github_url;
    })
    .catch(error => console.error('Error loading the introduction data:', error));

    // Introduction form submission handling
    document.getElementById('updateForm').addEventListener('submit', function(event) {
        event.preventDefault();
        const formData = new FormData(this);
        fetch('update_profile.php', {
            method: 'POST',
            body: formData
        })
        .then(response => response.text())
        .then(data => {
            alert('Profile updated successfully!');
            console.log(data);
            window.location.reload(); // Reload the page to reflect changes
        })
        .catch(error => {
            console.error('Error updating profile:', error);
        });
    });

    // Fetch and display the About Me data
    fetch('fetch_about.php')
    .then(response => response.json())
    .then(data => {
        const aboutBody = document.getElementById('aboutBody');
        let aboutRow = `<tr>
            <td>${data.experience}</td>
            <td>${data.education}</td>
            <td>${data.description}</td>
        </tr>`;
        aboutBody.innerHTML = aboutRow;

        document.querySelector('input[name="experience"]').value = data.experience;
        document.querySelector('input[name="education"]').value = data.education;
        document.querySelector('textarea[name="description"]').value = data.description;
    })
    .catch(error => console.error('Error loading the About Me data:', error));

    // About Me form submission handling
    document.getElementById('aboutForm').addEventListener('submit', function(event) {
        event.preventDefault();
        const formData = new FormData(this);
        fetch('update_about.php', {
            method: 'POST',
            body: formData
        })
        .then(response => response.text())
        .then(data => {
            alert('About Me updated successfully!');
            console.log(data);
            window.location.reload(); // Reload the page to reflect changes
        })
        .catch(error => {
            console.error('Error updating About Me:', error);
        });
    });
});

//bagong dagdag


document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const formData = new FormData(this);
    fetch('update_contact.php', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        alert(data.message); // Alert the message from the server
        if (data.success) {
            window.location.reload(); // Reload the page to see changes
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('Update failed!');
    });
});

//bagong dagdag version 2 for tracking table
document.addEventListener('DOMContentLoaded', function() {
    fetchContactInfo();

    document.addEventListener('DOMContentLoaded', function() {
        fetchContactInfo();  // This will handle fetching and displaying contact data
    
        document.getElementById('contactForm').addEventListener('submit', function(event) {
            event.preventDefault();
            const formData = new FormData(this);
            fetch('update_contact.php', {
                method: 'POST',
                body: formData
            })
            .then(response => response.json())
            .then(data => {
                alert(data.message);
                if (data.success) {
                    fetchContactInfo();  // Re-fetch and display updated data
                }
            })
            .catch(error => {
                console.error('Error:', error);
                alert('Update failed!');
            });
        });
    });
    
    function fetchContactInfo() {
        fetch('fetch_contact.php')
        .then(response => response.json())
        .then(data => {
            const contactDisplay = document.getElementById('contactDisplay');
            contactDisplay.innerHTML = `<tr>
                <td>${data.email}</td>
                <td>${data.linkedin}</td>
            </tr>`;
        })
        .catch(error => console.error('Error fetching contact data:', error));
    }

    function handleUpdate(event) {
        event.preventDefault();
        const form = event.target;
        const formData = new FormData(form);
        const updateURL = form.action;

        fetch(updateURL, {
            method: 'POST',
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            alert(data.message);
            if (data.success) {
                fetchContactInfo();  // Fetch and update the display table after successful update
                window.location.reload();
            }
        })
        .catch(error => {
            console.error('Error updating data:', error);
            alert('Update failed!');
        });
    }
});

