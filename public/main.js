
/* Prases customer and returns an html div containing the profile
<!-- customer Profile -->
<div>
    <div>${picture}</div>
    <div>${name}</div>
    <div>${email}</div>
    <div>${address}</div>
    <div>${cell}</div>
<div>
*/
function parseCustomer(customer) {
    let profile = document.createElement("section");
    profile.style.display = "flex";
    profile.style.flexWrap = "none";
    profile.style.flexDirection = "column";
    profile.style.justifyContent = "center"
    let image = new Image(280, 280);
    image.src = customer.picture.large;
    let name = document.createElement("div");
    name.textContent = `${customer.name.first} ${customer.name.last}`
    name.style.textTransform = "capitalize"
    let email = document.createElement("div");
    email.innerText = customer.email;
    let address = document.createElement("div");
    address.innerText = `${customer.location.street}\n${customer.location.city} ${customer.location.state} ${customer.location.postcode}`
    let cell = document.createElement("div");
    cell.innerText = customer.cell;
    let ssn = document.createElement("div");
    ssn.innerText = customer.id.value
    Array.from([image, name, email, address, cell, ssn]).forEach((e) => profile.appendChild(e));
    return profile

}
// Container where the customer's profile goes
let content = document.querySelector("#content");
content.style.display = "Flex";
content.style.flexWrap = "wrap"

/*
Transforms customers.results into an array of html elements that is appended to
container where all the profiles are stored
*/
customers.results.map((e) => parseCustomer(e)).forEach((e) => content.appendChild(e))
