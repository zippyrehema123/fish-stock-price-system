


function showSection(id) {
  const sections = document.querySelectorAll('.content-section');
  sections.forEach(section => {
    section.style.display = 'none';
  });
  document.getElementById(id).style.display = 'block';
}

function predict() {
  const species = document.getElementById('species').value;
  const season = document.getElementById('season').value;
  const weather = document.getElementById('weather').value;
  const location = document.getElementById('location').value;

  let price = 'N/A';
  let availability = 'N/A';

  if (species === 'tilapia' && weather === 'hot') {
    price = 'KSh 250 - 350';
    availability = 'High';
  } else if (species === 'snapper' && season === 'december') {
    price = 'KSh 500 - 600';
    availability = 'Medium';
  } else if (species === 'tuna' && weather === 'cold') {
    price = 'KSh 600 - 800';
    availability = 'Low';
  } else {
    price = 'KSh 400 - 500';
    availability = 'Medium';
  }

  document.getElementById('result').innerHTML = `
    <h3>Prediction Results</h3>
    <p><strong>Predicted Price:</strong> ${price}</p>
    <p><strong>Availability:</strong> ${availability}</p>
    <p><strong>Location:</strong> ${location}</p>
  `;
  document.getElementById('result').style.display = 'block';
}

// Show Home by default
window.onload = () => showSection('home');
