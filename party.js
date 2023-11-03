const API_URL = 'https://fsa-crud-2aa9294fe819.herokuapp.com/api/events';

 function renderParties(parties) {
   const listElement = document.getElementById('party-list');
   listElement.innerHTML = '';
   parties.forEach(party => {
     const partyElement = document.createElement('div');
     partyElement.innerHTML = `
     <h3>${party.name}</h3>
       <p>Date: ${party.date}</p>
       <p>Time: ${party.time}</p>
       <p>Location: ${party.location}</p>
       <p>Description: ${party.description}</p>
       <button onclick="deleteParty('${party.id}')">Delete</button>
     `;
     listElement.appendChild(partyElement);
   }
     );
 } 