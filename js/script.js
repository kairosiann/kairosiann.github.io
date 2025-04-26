// document.addEventListener('DOMContentLoaded', () => {
//     const menuToggle = document.getElementById('menu-toggle');
//     const navMenu = document.querySelector('nav ul');

//     menuToggle.addEventListener('click', () => {
//         navMenu.style.display = navMenu.style.display === 'flex' ? 'none' : 'flex';
//     });

//     // Fetch and render publications
//     fetchPublications();
// });

// async function fetchPublications() {
//     try {
//         const response = await fetch('publications.json');
//         const publications = await response.json();
//         renderPublicationList(publications);
//     } catch (error) {
//         console.error('Error fetching publications:', error);
//     }
// }

// function renderPublicationList(publications) {
//     const publicationList = document.getElementById('publication-list');
//     publications.forEach(pub => {
//         const pubElement = document.createElement('div');
//         pubElement.className = 'publication-item';
//         pubElement.innerHTML = `
//             <h3><a href="${pub.markdown}" target="_blank">${pub.title}</a></h3>
//             <p>Published in ${pub.venue}, ${pub.date}</p>
//         `;
//         publicationList.appendChild(pubElement);
//     });
// }

document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menu-toggle');
    const navMenu = document.querySelector('nav ul');

    menuToggle.addEventListener('click', () => {
        navMenu.style.display = navMenu.style.display === 'flex' ? 'none' : 'flex';
    });
    
    setupExpandableContainers();
});

function setupExpandableContainers(){
    const containers = document.querySelectorAll('.container');

    containers.forEach(container => {
        container.addEventListener('click', function(e){
            // Don't toggle if clicking on a link inside the container
            if (e.target.tagName === 'A') return;

            const details = this.querySelector('.details');
            if (details) {
                const isHidden = details.style.display === 'none';
                details.style.display = isHidden ? 'block' : 'none';
            }
        })
    })
}