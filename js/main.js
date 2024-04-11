// Define an array of links
const links = [
    { label: "Home", url: "index.html" },
    { label: "About Me", url: "about.html" },
    { label: "Projects", url: "projects.html" },
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