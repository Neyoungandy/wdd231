document.addEventListener("DOMContentLoaded", () => {
    // Fetch member data from JSON
    async function fetchMemberData() {
        const response = await fetch('data/members.json');
        const members = await response.json();
        displayMembers(members);
    }

    // Display member cards or list
    function displayMembers(members) {
        const memberList = document.getElementById('member-list');
        memberList.innerHTML = ''; // Clear current content

        members.forEach(member => {
            const memberCard = document.createElement('div');
            memberCard.classList.add('member-card');
            
            const memberImage = document.createElement('img');
            memberImage.src = member.image;
            memberImage.alt = `${member.name} logo`;

            const memberName = document.createElement('h3');
            memberName.textContent = member.name;

            const memberAddress = document.createElement('p');
            memberAddress.textContent = `Address: ${member.address}`;

            const memberPhone = document.createElement('p');
            memberPhone.textContent = `Phone: ${member.phone}`;

            const memberWebsite = document.createElement('a');
            memberWebsite.href = member.website;
            memberWebsite.textContent = 'Visit Website';

            memberCard.append(memberImage, memberName, memberAddress, memberPhone, memberWebsite);
            memberList.appendChild(memberCard);
        });
    }

    // Toggle between grid and list view
    document.getElementById('grid-view').addEventListener('click', () => {
        document.getElementById('member-list').classList.add('grid');
        document.getElementById('member-list').classList.remove('list');
    });

    document.getElementById('list-view').addEventListener('click', () => {
        document.getElementById('member-list').classList.add('list');
        document.getElementById('member-list').classList.remove('grid');
    });

    // Display the current year and last modified date
    document.getElementById('current-year').textContent = new Date().getFullYear();
    document.getElementById('last-modified').textContent = document.lastModified;

    // Fetch data and display members
    fetchMemberData();
});
// Update current year
document.getElementById('current-year').textContent = new Date().getFullYear();

// Contact form submission handler
const form = document.getElementById('contact-form');
form.addEventListener('submit', (event) => {
    event.preventDefault();
    alert('Thank you for your message! We will get back to you shortly.');
    form.reset();
});
