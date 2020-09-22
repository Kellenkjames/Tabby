/* Step 1: Break down the problem yourself. 

1. What needs to happen logically?
    When the user clicks on the tab, shows the content that is based on that TAB and hides the other content

2. What CSS do you need?
    Display: Block (to show the content)
    Display: None (to hide the content)
    
3. How do you write the JS, step by step, until the component works? 
    1. Store the buttons for the tab in a variable 
    2. Add forEach to button elements 
    3. Attach click handler to each "BUTTON"
    4. Inside click handler - add or remove "is-selected" class
    
*/

const buttonTabs = document.querySelectorAll('.tab')
const tabContent = document.querySelectorAll('.tab-content')

buttonTabs.forEach(button => {
    button.addEventListener('click', event => {
        // If element is clicked, toggle class
        button.classList.toggle('is-selected')
    })
})