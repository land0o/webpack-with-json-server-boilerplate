const createContact = contactInfo => {
  return `<div class="contact-card">
              <h2>${contactInfo.name}</h2>
              <h3>${contactInfo.phoneNumber}</h3>
              <p>${contactInfo.address}</p>
              </div>
          `;
};
export default createContact;
