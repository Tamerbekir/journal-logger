


    document.getElementById("clear").addEventListener("click", function () {
        localStorage.clear();
        location.reload();
            const clearEntries = document.createElement('p')
            const clearEntriesSection = document.getElementById('clearedEntries')
            clearEntriesSection.innerHTML = 'Entries cleared!'
            clearEntriesSection.appendChild(clearEntries)
        
    });

document.getElementById("goBack").addEventListener('click', function(){
        window.location.replace('./index.html');
    });


