// invite button
const addGuestButton = document.querySelector(".invite");
// label for the invite button
const guestInputLabel = document.querySelector(".add-guest label");
// text input box
const guestInput = document.querySelector(".add-guest input");
// unordered list (not yet visible)
const guestList = document.querySelector(".guest-list");
// span class for number of guests attending
const guestCount = document.querySelector(".attendance");
// alert when guest list is full (not yet visible)
const guestFull = document.querySelector(".alert");
const assignButton = document.querySelector(".assign");
const assignedItems = document.querySelector(".assigned-items");



addGuestButton.addEventListener("click", (e) => {
  const guest = guestInput.value;
  console.log(guest);
  if(guest !== "") {
   addToList(guest);
  } 
  guestInput.value = "";
  updateGuestList();
}); 

const addToList = (guest) => {
  const listItem = document.createElement("li");
  listItem.textContent = guest;
  guestList.append(listItem);
};

const updateGuestList = () => {
  const guests = document.querySelectorAll(".guest-list li");
  guestCount.textContent = guests.length;
  if (guests.length === 8) {
      addGuestButton.classList.add("hide");
      guestInput.classList.add("hide");
      guestInputLabel.classList.add("hide");
      guestFull.classList.remove("hide");
  }
};
  
const assignItems = () => {
    const potluckItems = [
      "cheese",
      "crackers",
      "fresh fruit",
      "coleslaw",
      "apple cake",
      "gazpacho",
      "baguette",
      "egg salad",
      "potato salad",
      "summer rolls",
      "hummus",
      "cookies"
    ];

  //TODO: Could the below variable be made a global one and combined with the guests one from the updateGuestList function?
  const allGuests = document.querySelectorAll(".guest-list li");
  for(let guest of allGuests) {
    let randomPotluckIndex = Math.floor(Math.random() * potluckItems.length);
    let randomPotluckItem = potluckItems[randomPotluckIndex];
    let listItem = document.createElement("li");
    listItem.textContent = `${guest.textContent} is bringing ${randomPotluckItem}.`;
    assignedItems.append(listItem);

    potluckItems.splice(randomPotluckIndex, 1);
  }
};

assignButton.addEventListener("click", (e) => {
  assignItems();
  assignButton.disabled = true;
});

