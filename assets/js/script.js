//you single out a button click by  giving it an event listener and defining what happens when the button is clicked in the callback function
document.getElementById('firstMoodBtn').addEventListener('click', function() {
    //create a variable for first mood input field and get its value from the getElementById method
    let firstMoodValue = document.getElementById('firstMood').value;
    //set the firstMood Value to local storage with key "firstMoodValue" (the variable you made above).
    //the first item stored is the key, which is the text of your choice. The second is the value, which is being pulled from the value element id
    localStorage.setItem("How are you feeling?", firstMoodValue);
        //Created a variable that creates the P element inside the HTML
        const firstLogged = document.createElement('p')
        //created a variable that grabs the ID in which I want the element to show up once it is pressed
        const firstLoggedLocation = document.getElementById('firstMoodBtn')
        //from the variable I made, once clicked, the text "logged" will appear
        firstLoggedLocation.innerHTML = 'Logged'
        //this will append the variable you made (p element) to the page at the end.
        firstLoggedLocation.appendChild(firstLogged)
});

document.getElementById('secondMoodBtn').addEventListener('click', function() {
    const secondMoodValue = document.getElementById('secondMood').value
    localStorage.setItem('What made you feel this way?', secondMoodValue)
        const secondLogged = document.createElement('p')
        const secondLoggedLocation = document.getElementById('secondMoodBtn')
        secondLoggedLocation.innerHTML = 'Logged'
        secondLoggedLocation.appendChild(secondLogged)
})

document.getElementById('thirdMoodBtn').addEventListener('click', function() {
    const thirdMoodValue = document.getElementById('thirdMood').value
    localStorage.setItem('What are you going to do to change it?', thirdMoodValue)
        const thirdLogged = document.createElement('p')
        const thirdLoggedLocation = document.getElementById('thirdMoodBtn')
        thirdLoggedLocation.innerHTML = 'Logged'
        thirdLoggedLocation.appendChild(thirdLogged)
})

document.getElementById('dateBtn').addEventListener('click', function() {
    const dateValue = document.getElementById('dateLogged').value;
    localStorage.setItem("Date Logged", dateValue);
        const dateLogged = document.createElement('p')
        const dateLoggedLocation = document.getElementById('dateBtn')
        dateLoggedLocation.innerHTML = 'Date Logged'
        dateLoggedLocation.appendChild(dateLogged)
});


localStorage.setItem("Date Logged", JSON.stringify(dateValue))

addFirstMood()


