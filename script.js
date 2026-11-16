// Scroll to Featured Exhibits
function exploreExhibits() {
    document.getElementById("exhibits").scrollIntoView({
        behavior: "smooth"
    });
}

// Search Exhibits
function searchExhibits() {

    let input = document.getElementById("searchInput")
        .value.toLowerCase();

    let cards = document.getElementsByClassName("exhibit-card");

    for (let i = 0; i < cards.length; i++) {

        let name = cards[i].querySelector("h3")
            .innerText.toLowerCase();

        if (name.includes(input)) {
            cards[i].style.display = "block";
        } else {
            cards[i].style.display = "none";
        }
    }
}

// Show Exhibit Details
function showDetails(exhibitName) {
    alert("You selected: " + exhibitName +
          "\nThe detailed exhibit page will be added next.");
}


// Add an exhibit to favourites

function addToFavourites(name) {

    let favourites = JSON.parse(localStorage.getItem("favourites")) || [];

    if (!favourites.includes(name)) {
        favourites.push(name);
        localStorage.setItem("favourites", JSON.stringify(favourites));
        alert("Added to Favourites!");
    } else {
        alert("Already in Favourites!");
    }
}


// Display favourite exhibits

function displayFavourites() {

    let favourites = JSON.parse(localStorage.getItem("favourites")) || [];

    let list = document.getElementById("favourite-list");

    if (list) {

        if (favourites.length === 0) {
            list.innerHTML = "<p>You haven't saved any exhibits yet.</p>";
        } else {

            list.innerHTML = "";

            favourites.forEach(function(name) {

                list.innerHTML += `
                    <div class="favourite-card">
                        <h3>${name}</h3>
                        <button onclick="removeFromFavourites('${name}')">
                            Remove
                        </button>
                    </div>
                `;

            });
        }
    }
}


// Remove an exhibit

function removeFromFavourites(name) {

    let favourites = JSON.parse(localStorage.getItem("favourites")) || [];

    favourites = favourites.filter(function(item) {
        return item !== name;
    });

    localStorage.setItem("favourites", JSON.stringify(favourites));

    displayFavourites();
}


// Show favourites when page opens

displayFavourites();


let exhibits = {

    indus: {
        name: "Indus Valley Pottery",
        category: "Indian History",
        period: "Ancient Civilization",
        origin: "Indus Valley",
        image: "Indus valley.jpg",
        about: "Pottery was used for cooking, storage and decoration in the Indus Valley Civilization.",
        importance: "These objects help us understand the daily life and artistic skills of the people."
    },

    ashoka: {
        name: "Ashoka Pillar",
        category: "Indian History",
        period: "Mauryan Period",
        origin: "Ancient India",
        image: "Ashoka Pillar.jpg",
        about: "Ashoka Pillars were built during the reign of Emperor Ashoka and carried important messages.",
        importance: "They represent the spread of Ashoka's ideas and provide information about Mauryan history."
    },

    greek: {
        name: "Greek Architecture",
        category: "World History",
        period: "Ancient Greece",
        origin: "Greece",
        image: "Greek.jpg",
        about: "Ancient Greek architecture is known for its temples and columns.",
        importance: "It influenced architecture in many parts of the world."
    },

    egypt: {
        name: "Egyptian Artifacts",
        category: "Ancient Artifacts",
        period: "Ancient Egyptian Period",
        origin: "Egypt",
        image: "Egyptian artifacts.jpg",
        about: "Ancient Egyptian artifacts include pottery, ornaments and everyday objects.",
        importance: "They help us understand Egyptian culture and traditions."
    },

    mughal: {
        name: "Mughal Paintings",
        category: "Paintings and Art",
        period: "Mughal Period",
        origin: "India",
        image: "Mughal painting.jpg",
        about: "Mughal paintings often showed royal life, nature and historical events.",
        importance: "They are important examples of India's artistic heritage."
    },

    mystery: {
        name: "Mysterious Ancient Objects",
        category: "Mystery Artifacts",
        period: "Various Periods",
        origin: "Different Civilizations",
        image: "Mystery.jpg",
        about: "Some ancient objects have uncertain histories or purposes.",
        importance: "They encourage researchers to investigate the past."
    }

};


// Display selected exhibit

let selected = new URLSearchParams(window.location.search).get("exhibit");

if (selected && exhibits[selected]) {

    let item = exhibits[selected];

    document.getElementById("exhibit-name").innerText = item.name;
    document.getElementById("exhibit-title").innerText = item.name;
    document.getElementById("category").innerText = item.category;
    document.getElementById("period").innerText = item.period;
    document.getElementById("origin").innerText = item.origin;
    document.getElementById("exhibit-image").innerHTML =
    '<img src="' + item.image + '" alt="' + item.name + '">';
    document.getElementById("about").innerText = item.about;
    document.getElementById("importance").innerText = item.importance;

}
