function resetText () {
    clearEntries = document.createElement('p'),
    clearEntriesSection = document.getElementById('clearedEntries'),
    clearEntriesSection.innerHTML = 'Entries cleared!',
    clearEntriesSection.appendChild(clearEntries)
}

document.getElementById("clear").addEventListener("click", function () {
        localStorage.clear();
        location.reload()
        resetText()
    });

document.getElementById("goBack").addEventListener('click', function(){
        window.location.replace('./index.html');
    });


    const entrySection = document.getElementById('entries');

    // Function to update the displayed content
    function updateEntries() {
        entrySection.innerHTML = ''; // Clear existing content
        for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i);
            const value = localStorage.getItem(key);
            const entryElement = document.createElement('h4');
            entryElement.textContent = `${key} ${value}`;
            entrySection.appendChild(entryElement);
        }
    }
    
    // Update the displayed content initially
    updateEntries();
    
    // Listen for storage events and update the displayed content
    window.addEventListener('storage', updateEntries);

    // Store data in local storage with a unique key
localStorage.setItem(new Date().getTime());

    
    


//! Notes on for loop and appending from local storage
// 1. `const entrySection = document.getElementById('entries');`: This line retrieves the DOM element with the ID `'entries'` and stores it in the `entrySection` variable. This element is typically a `<div>` or another container where you want to display the localStorage entries.

// 2. `for (let i = 0; i < localStorage.length; i++) {`: This `for` loop iterates over each key in the `localStorage` object.

// 3. `const key = localStorage.key(i);`: Inside the loop, it retrieves the key of the current item in localStorage at index `i`.

// 4. `const value = localStorage.getItem(key);`: It then retrieves the value associated with the current key.

// 5. `const entryElement = document.createElement('p');`: For each key-value pair, it creates a new paragraph element (`<p>`) using `document.createElement('p')`.

// 6. `entryElement.textContent = `${key}: ${value}`;`: It sets the text content of the paragraph element to display the key and its corresponding value in the format `key: value`.

// 7. `entrySection.appendChild(entryElement);`: Finally, it appends the newly created paragraph element containing the key-value pair to the `entrySection` (the container element retrieved at the beginning).

// This loop processes all key-value pairs stored in `localStorage` and creates a new paragraph element for each pair, displaying them within the `entrySection` container on the web page.


