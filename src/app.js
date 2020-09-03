const renderContacts = () => {
  const storage = window.localStorage
<<<<<<< HEAD
  const contacts = JSON.parse(storage.getItem('contacts'))

  let div = document.querySelector('#contact-list')

  if (contacts) {
    div.innerHTML = ''

    const ul = document.createElement('ul')
=======
  // Read all the contacts from the storage
  const contacts = JSON.parse(storage.getItem('contacts'))

  // Select the container we will use to list the contacts 
  let div = document.querySelector('.contact-list')

  if (contacts) {
    div.innerHTML = ''

    // render the contacts
    const ul = document.createElement('ul')

    // For every contact in our array of contacts, we will
    // create a li element that will contain a card with
    // all the information of the contact
>>>>>>> 2502bf761fdec9a4ae757449e32719ef799e02ea
    contacts.forEach(contact => {
      let li = document.createElement('li')
      li.innerHTML = `
        <div class="card">
<<<<<<< HEAD
          <div class="image">
            <img class="h-16 w-16 rounded-full mx-auto" src="avatar.jpg" />
          </div>

          <div class="content">
            <h1>${ contact.name }</h1>
            <h2>${ contact.company }</h2>
            <p>${ contact.notes }</p> 
            ${ contact.email } | 
            <a href="https://www.twitter.com/${ contact.twitter}">@${contact.twitter}</a>
          </div>
        </div>
    `
      ul.appendChild(li)
    })

    div.appendChild(ul) 
  } else { 
    div.innerHTML = '<p>You have no contacts in your address book</p>' 
  }
}

document.addEventListener('DOMContentLoaded', () => {
  renderContacts()

  const addContactForm = document.querySelector('#new-contact-form')
  addContactForm.addEventListener('submit', event => {
    event.preventDefault()
    const storage = window.localStorage
    const {
      name,
      email,
      phone,
      company,
      notes,
      twitter,
    } = addContactForm.elements

    const contact = {
      id: Date.now(),
      name: name.value,
      email: email.value,
      phone: phone.value,
      company: company.value,
      notes: notes.value,
      twitter: twitter.value,
    }

    console.log(`Saving the following contact: ${JSON.stringify(contact)}`)
    let contacts = JSON.parse(storage.getItem('contacts')) || []
    contacts.push(contact)
    storage.setItem('contacts', JSON.stringify(contacts))
    renderContacts() 
  })
})


=======
          <div class="content">
            <h1>${ contact.name }</h1>
            <h2>${ contact.company }</h2>
            <p>${ contact.notes }</p> 
            ${ contact.email } | 
            <a href="https://www.twitter.com/${ contact.twitter}">@${contact.twitter}</a>
          </div>
        </div>`
      // Add the contact's li to the unordered list we created earlier
      ul.appendChild(li)
    })

    // Lastly, append the list to the contact-list container.
    div.appendChild(ul) 
  } else { 
    div.innerHTML = '<p>You have no contacts in your address book</p>' 
  }
}

document.addEventListener("DOMContentLoaded", () => {
  renderContacts();

  const addContactForm = document.querySelector(".new-contact-form");
  // const deleteButton = document.querySelector(".contact-list");

  // deleteButton.addEventListener("click", event => {
  //   let id = event.target.parentNode.id;
  //   let contacts = JSON.parse(storage.getItem("contacts")) || [];

  //   contacts.forEach(contact => {
  //     if (contact.id == id) {
  //       contacts.splice(contacts.indexOf(contact), 1);
  //     } else return;
  //   });

  //   storage.setItem("contacts", JSON.stringify(contacts));
  //   renderContacts();
  // });

    addContactForm.addEventListener("submit", event => {
      event.preventDefault();
      const storage = window.localStorage

      const {
        name,
        email,
        phone,  
        company,
        notes,
        twitter
      } = addContactForm.elements;

      const contact = {
        id: Date.now(),
        name: name.value,
        email: email.value,
        phone: phone.value,
        company: company.value,
        notes: notes.value,
        twitter: twitter.value
      };

      let contacts = JSON.parse(storage.getItem('contacts')) || [];
      contacts.push(contact);
      storage.setItem('contacts', JSON.stringify(contacts));
      renderContacts();
      addContactForm.reset();
    });
});
>>>>>>> 2502bf761fdec9a4ae757449e32719ef799e02ea
