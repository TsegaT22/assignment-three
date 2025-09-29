document.addEventListener("DOMContentLoaded", () => {
    const favoritesList = document.getElementById("favorites-list");
    const buttons = document.querySelectorAll(".add-to-favorites");

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            const card = button.closest(".card-content");
            const dishName = card.getAttribute("data-name");
            const dishPrice = parseFloat(card.getAttribute("data-price")).toFixed(2);

            /* This prevents duplicates from being created*/
            const alreadyAdded = Array.from(favoritesList.children)
                .some(li => li.querySelector(".dish-name").textContent === dishName);
            if (alreadyAdded) {
                card.classList.remove("favorited");
                const liToRm = Array.from(favoritesList.children).find(li => li.querySelector(".dish-name").textContent === dishName);
                if (liToRm) liToRm.remove();
                return;
            }

            /* Creates list item */
            const li = document.createElement("li");

            // Dish name is displayed and added to list
            const spanName = document.createElement("span");
            spanName.textContent = dishName;
            spanName.classList.add("dish-name");

            /* Dish price is displayed and added to the list */
            const spanPrice = document.createElement("span");
            spanPrice.textContent = `$${dishPrice}`;
            spanPrice.classList.add("dish-price");

            /* This applies the remove button */
            const removeBtn = document.createElement("button");
            removeBtn.textContent = "Remove";
            removeBtn.classList.add("remove-btn");
            removeBtn.addEventListener("click", () => {
                li.remove();
            });

            /* Appends list */
            li.appendChild(spanName);
            li.appendChild(document.createTextNode(" - ")); // separator
            li.appendChild(spanPrice);
            li.appendChild(removeBtn);

            /* Appends list to favorites list */
            favoritesList.appendChild(li);
        });
    });
});