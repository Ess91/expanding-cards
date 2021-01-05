const panels = document.querySelectorAll('.panel') //Bring in all the panels, Node List, similar to an array

panels.forEach((panel) => {  //Loop through all the panel
    panel.addEventListener('click', () => { //When it is clicked, run a function
        removeActiveClasses() //Remove the 'active' classes from the other panels, look at line 10 and below
        panel.classList.add('active') //List of classes, specifically adds thr class 'active'
    })
})

function removeActiveClasses() {
    panels.forEach((panel) => {
panel.classList.remove('active')
    })
}