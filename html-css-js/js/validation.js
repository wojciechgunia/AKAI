/*
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    AKAI Frontend Task - Javascript

    W tym zadaniu postaraj się zaimplementować metody, które sprawdzą, czy dane wprowadzone
    do formularza są poprawne. Przykładowo: czy imię i nazwisko zostało wprowadzone.
    Możesz rozwinąć walidację danych tak bardzo, jak tylko zapragniesz.

    Powodzenia!
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
*/
document.getElementById("register").addEventListener("submit", (e) => {
  e.preventDefault();

  var checked = 0;
  const firstName = document.getElementById("first-name").value;
  const lastName = document.getElementById("last-name").value;
  const email = document.getElementById("email").value;
  const firstNameAlert = document.getElementById("alert-firstName");
  const lastNameAlert = document.getElementById("alert-lastName");
  const emailAlert = document.getElementById("alert-email");
  const frontendCheckbox = document.getElementById("frontend-checkbox").checked;
  const backendCheckbox = document.getElementById("backend-checkbox").checked;
  const mobileCheckbox = document.getElementById("mobile-checkbox").checked;
  const graphicsCheckbox = document.getElementById("graphics-checkbox").checked;
  const alertSection = document.getElementById("alert-section");

  firstNameAlert.style.display = "none";
  if (firstName < 2) {
    firstNameAlert.style.display = "block";
    firstNameAlert.innerHTML = "Imię musi posiadać co najmniej 2 znaki";
  }
  if (firstName > 40) {
    firstNameAlert.style.display = "block";
    firstNameAlert.innerHTML = "Imię może posiadać co najwyżej 40 znaków";
  }

  lastNameAlert.style.display = "none";
  if (lastName < 2) {
    lastNameAlert.style.display = "block";
    lastNameAlert.innerHTML = "Nazwisko musi posiadać co najmniej 2 znaki";
  }
  if (lastName > 40) {
    lastNameAlert.style.display = "block";
    lastNameAlert.innerHTML = "Nazwisko może posiadać co najwyżej 40 znaków";
  }

  emailAlert.style.display = "none";
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  if (!emailPattern.test(email)) {
    emailAlert.style.display = "block";
    emailAlert.innerHTML = "Niepoprawny email";
  }

  if (frontendCheckbox) checked = +1;
  if (backendCheckbox) checked = +1;
  if (mobileCheckbox) checked = +1;
  if (graphicsCheckbox) checked = +1;

  alertSection.style.display = "none";
  if (checked < 1) {
    alertSection.style.display = "block";
    alertSection.innerHTML = "Musisz wybrać co najmniej jedną sekcję";
  }

  console.log(document.forms["register"].elements);
});
