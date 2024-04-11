// Define an array of links
const links = [
    { label: "Week 1 Notes", url: "week1/index.html" },
    { label: "Week 2 Notes", url: "week2/index.html" },
    { label: "Week 3 Notes", url: "week3/index.html" },
    { label: "Week 4 Notes", url: "week4/index.html" },
    { label: "Week 5 Notes", url: "week5/index.html" },
    { label: "Week 6 Notes", url: "week6/index.html" }
];

// Create a function to dynamically generate list items
function generateListItems() {
    // Select the ol element
    const list = document.getElementById("dynamic-links");

    // Iterate through the links array
    links.forEach(link => {
        // Create a new li element
        const listItem = document.createElement("li");

        // Create a new a element
        const anchor = document.createElement("a");
        anchor.href = link.url; // Set the href attribute to the link's URL
        anchor.textContent = link.label; // Set the text content to the link's label

        // Append the a element to the li element
        listItem.appendChild(anchor);

        // Append the li element to the ol element
        list.appendChild(listItem);
    });
}

generateListItems();