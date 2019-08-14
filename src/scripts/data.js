// Fetch data from the API
const ApiData = {
  getContacts: function() {
    return (
      fetch("http://localhost:8088/contacts")
        //parse data
        .then(data => data.json())
    );
  },
  postcontact: function(contact) {
    return fetch("http://localhost:8088/contacts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(contact)
    }).then(response => response.json());
  }
};

export default ApiData;
