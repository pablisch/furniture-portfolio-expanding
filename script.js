const panels = document.querySelectorAll(".panel");
// const is like var but the variable cannot be reassigned or redeclared.
// 'panels' is now a Nodelist (like an array) of all 5 .panel divs 

panels.forEach((panel) => { //referencing the 'panels' array - not sure where the 'panel' syntax comes in this 'arrow function' but it appears to be user defined for the purpose of each iteration of the 'forEach' high order array method (loop?)
    // as I understand it, the => function negates the need to declare a function and runs it there and then, so to speak.
    panel.addEventListener("click", () => {
        // adds an event listener for EACH 'panel', listening for a mouse click. When a click is detected, this runs another arrow function (undeclared function).
        removeActiveClasses();
        panel.classList.add("active");
    })

})

function removeActiveClasses() {
    panels.forEach((panel) => {
        panel.classList.remove("active");
    })
    
}

// NOTE THAT THIS PROJECT CAN BE MADE TO WORK THE SAME BUT USING HOVER RATHER THAN MOUSE CLICK JUST BY CHANGING THE 'click' IN THE 'eventListener' TO 'mouseover'. I THINK IT WORKS BETTER THAT WAY.
