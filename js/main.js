/* Step 1: Break down the problem yourself. 

1. What needs to happen logically?
When the user clicks on the tab, shows the content that is related to that TAB and hides the other content

2. What CSS do you need?
Display: Block (to show the content)
Display: None (to hide the content)

3. How do you write the JS, step by step, until the component works? 
1. Store the buttons for the tab in a variable 
2. Add forEach to button elements 
3. Attach click handler to each "BUTTON"
4. Inside click handler - add or remove "is-selected" class

*/

// Get all the buttons
const buttonTabs = document.querySelectorAll('button')

// Get the tabs for each button 
const tabs = document.querySelector('.tabs')
const digimonBtn = tabs.querySelector('[data-theme="digimon"]')
const pokemonBtn = tabs.querySelector('[data-theme="pokemon"]')
const tamagotchiBtn = tabs.querySelector('[data-theme="tamagotchi"]')

// Get the tab-content for each section
const tabContents = document.querySelector('.tab-contents')
const digimon = tabContents.querySelector('[data-theme="digimon"]')
const pokemon = tabContents.querySelector('[data-theme="pokemon"]')
const tamagotchi = tabContents.querySelector('[data-theme="tamagotchi"]')

// Loop through all our buttons
buttonTabs.forEach(button => {
    
    // Attach click handler to each button
    button.addEventListener('click', event => {

        // If the button clicked has the same data-attribute as a section, show that content
        if (button.dataset.theme === 'digimon') {
            digimonBtn.classList.add('is-selected')
            digimon.classList.add('is-selected')
            tamagotchiBtn.classList.remove('is-selected')
            tamagotchi.classList.remove('is-selected')
            pokemonBtn.classList.remove('is-selected')
            pokemon.classList.remove('is-selected')
        }

        else if (button.dataset.theme === 'pokemon') {
            digimonBtn.classList.remove('is-selected')
            digimon.classList.remove('is-selected')
            tamagotchiBtn.classList.remove('is-selected')
            tamagotchi.classList.remove('is-selected')
            pokemonBtn.classList.add('is-selected')
            pokemon.classList.add('is-selected')
        }

        else if (button.dataset.theme === 'tamagotchi') {
            digimonBtn.classList.remove('is-selected')
            digimon.classList.remove('is-selected')
            tamagotchiBtn.classList.add('is-selected')
            tamagotchi.classList.add('is-selected')
            pokemonBtn.classList.remove('is-selected')
            pokemon.classList.remove('is-selected')
        }
  
    })
})