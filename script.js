document.addEventListener("DOMContentLoaded", () => {
    const drawCardButton = document.getElementById("drawCardButton");
    const cardDisplay = document.getElementById("cardDisplay");

    const drawCard = async () => {
        try {
            const response = await fetch("https://deckofcardsapi.com/api/deck/new/draw/?count=1"); // Draws a card from API
            const data = await response.json();

            if (data.cards.length > 0) {
                const card = data.cards[0];
                const imageUrl = card.image;

                // Create image element and set src attribute
                const cardImage = document.createElement("img");
                cardImage.classList.add("img-fluid");
                cardImage.setAttribute("src", imageUrl);

                // Reset the cardDisplay div and add the image
                cardDisplay.innerHTML = "";
                cardDisplay.appendChild(cardImage);
            } else {
                cardDisplay.innerHTML = "No cards left in the deck!";
            }
        } catch (error) {
            console.error("Error drawing a card:", error);
            cardDisplay.innerHTML = "An error occurred while drawing a card.";
        }
    };

    drawCardButton.addEventListener("click", drawCard);
});
