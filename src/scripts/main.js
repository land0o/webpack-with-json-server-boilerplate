// import the other js files into main
import ApiData from "./data.js";
import contactDomRender from "./dom.js";
import createContact from "./factory.js";
const contactDom = document.querySelector("#contactForm");

// invoke the journal submisons to the page
const getAndRenderEntries = () => {
  ApiData.getContacts().then(contactsArray => {
    console.log("contactsArray: ", contactsArray);
    contactsArray.forEach(contact => {
      console.log(contact);
      const html = createContact(contact);
      contactDomRender(contactDom, html);
    });
  });
};
getAndRenderEntries();

// submit button

document.querySelector("#saveMe").addEventListener("click", () => {
  // collect values from form
  let name = document.getElementById("nameField").value;
  let number = document.getElementById("numberField").value;
  let address = document.getElementById("addressField").value;

  const contactObj = {
    name: name,
    phoneNumber: number,
    address: address
  };
  console.log(contactObj);
  // invoke post function
  const postAndRender = () => {
    contactDom.innerHTML = "";
    ApiData.postcontact(contactObj)
      .then(getAndRenderEntries)
      .then(erase => {
        //clears the input fields
        document.getElementById("nameField").value = "";
        document.getElementById("numberField").value = "";
        document.getElementById("addressField").value = "";
      });
  };
  postAndRender();
});
