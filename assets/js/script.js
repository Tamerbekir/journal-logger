//you single out a button click by  giving it an event listener and defining what happens when the button is clicked in the callback function
document.getElementById('firstMoodBtn').addEventListener('click', function () {
    //create a variable for first mood input field and get its value from the getElementById method
    let firstMoodValue = document.getElementById('firstMood').value;
    //set the firstMood Value to local storage with key "firstMoodValue" (the variable you made above).
    //the first item stored is the key, which is the text of your choice. The second is the value, which is being pulled from the value element id
    localStorage.setItem('firstMood', firstMoodValue);
    //Created a variable that creates the P element inside the HTML
    const firstLogged = document.createElement('p')
    //created a variable that grabs the ID in which I want the element to show up once it is pressed
    const firstLoggedLocation = document.getElementById('firstMoodLogged')
    //from the variable I made, once clicked, the text "logged" will appear
    firstLoggedLocation.innerHTML = 'Logged'
    //this will append the variable you made (p element) to the page at the end.
    firstLoggedLocation.appendChild(firstLogged)
    //if the text is left empty, the user will get this if statement.
    if (firstMoodValue === "") {
        //variable creating a 'p' element 
        const firstLogError = document.createElement('p')
        //grabbing the ID in which is being trigged from
        const firstLogErrorSection = document.getElementById('firstMoodLogged')
        //the user will get this message if the leave the text box empty (firstMoodValue === "")
        firstLogErrorSection.innerHTML = 'Cannot leave bank.'
        //the user will see the message append to the page instead of it saying "logged"
        firstLogErrorSection.appendChild(firstLogError)
    }
});

document.getElementById('secondMoodBtn').addEventListener('click', function () {
    const secondMoodValue = document.getElementById('secondMood').value
    localStorage.setItem('secondMood', secondMoodValue)
    const secondLogged = document.createElement('p')
    const secondLoggedLocation = document.getElementById('secondMoodLogged')
    secondLoggedLocation.innerHTML = 'Logged'
    secondLoggedLocation.appendChild(secondLogged)
    if (secondMoodValue === "") {
        const secondLogError = document.createElement('p')
        const secondLogErrorSection = document.getElementById('secondMoodLogged')
        secondLogErrorSection.innerHTML = 'Cannot leave bank.'
        secondLogErrorSection.appendChild(secondLogError)
    }
})

document.getElementById('thirdMoodBtn').addEventListener('click', function () {
    const thirdMoodValue = document.getElementById('thirdMood').value
    localStorage.setItem('thirdMood', thirdMoodValue)
    const thirdLogged = document.createElement('p')
    const thirdLoggedLocation = document.getElementById('thirdMoodLogged')
    thirdLoggedLocation.innerHTML = 'Logged'
    thirdLoggedLocation.appendChild(thirdLogged)
    if (thirdMoodValue === "") {
        const thirdLogError = document.createElement('p')
        const thirdLogErrorSection = document.getElementById('thirdMoodLogged')
        thirdLogErrorSection.innerHTML = 'Cannot leave bank.'
        thirdLogErrorSection.appendChild(thirdLogError)
    }
})

document.getElementById('dateBtn').addEventListener('click', function () {
    const dateValue = document.getElementById('dateLogged').value;
    localStorage.setItem('date', dateValue);
    const dateLogged = document.createElement('p')
    const dateLoggedLocation = document.getElementById('date')
    dateLoggedLocation.innerHTML = 'Logged'
    dateLoggedLocation.appendChild(dateLogged)
    if (dateValue === "") {
        const dateValueError = document.createElement('p')
        const dateValueSection = document.getElementById('dateLogged')
        dateValueSection.innerHTML = 'Cannot leave bank.'
        dateValueSection.appendChild(dateValueError)
    }
});

document.getElementById('viewJournal').addEventListener('click', function () {
    window.location.replace('./journal.html')
})

//!Chat GPT Version
// document.getElementById('firstMoodBtn').addEventListener('click', function () {
//     const firstMoodValue = document.getElementById('firstMood').value;
//     if (firstMoodValue === "") {
//         displayError('firstMoodLogged', 'Cannot leave blank.');
//     } else {
//         localStorage.setItem('firstMood', firstMoodValue);
//         displaySuccess('firstMoodLogged');
//     }
// });

// document.getElementById('secondMoodBtn').addEventListener('click', function () {
//     const secondMoodValue = document.getElementById('secondMood').value;
//     if (secondMoodValue === "") {
//         displayError('secondMoodLogged', 'Cannot leave blank.');
//     } else {
//         localStorage.setItem('secondMood', secondMoodValue);
//         displaySuccess('secondMoodLogged');
//     }
// });

// document.getElementById('thirdMoodBtn').addEventListener('click', function () {
//     const thirdMoodValue = document.getElementById('thirdMood').value;
//     if (thirdMoodValue === "") {
//         displayError('thirdMoodLogged', 'Cannot leave blank.');
//     } else {
//         localStorage.setItem('thirdMood', thirdMoodValue);
//         displaySuccess('thirdMoodLogged');
//     }
// });

// document.getElementById('dateBtn').addEventListener('click', function () {
//     const dateValue = document.getElementById('date').value;
//     if (dateValue === "") {
//         displayError('dateLogged', 'Cannot leave blank.');
//     } else {
//         localStorage.setItem('date', dateValue);
//         displaySuccess('dateLogged');
//     }
// });

// document.getElementById('viewJournal').addEventListener('click', function () {
//     window.location.replace('./journal.html');
// });

// function displayError(elementId, message) {
//     const errorElement = document.getElementById(elementId);
//     errorElement.innerHTML = message;
// }

// function displaySuccess(elementId) {
//     const successElement = document.getElementById(elementId);
//     successElement.innerHTML = 'Logged';
// }
