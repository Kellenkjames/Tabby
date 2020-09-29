/* Switching Tabs 

1. Add event listeners to each tab
2. Find the tab they clicked
3. Find the corresponding tab content
4. Remove is-selected from other tabs to de-emphasize them
5. Remove is-selected from other tab content to hide them
6. Add is-selected to the tab they clicked to emphasize it
7. Add is-selected to the tab content to show it

*/

const tabs = Array.from(document.querySelectorAll('.tab'))
const tabby = document.querySelector('.tabby')

tabs.forEach(tab => {
    tab.addEventListener('click', event => {
        // Finding the correct tab content 
        const target = tab.dataset.theme
        const tabContent = tabby.querySelector('#' + target)
        console.log(tabContent)
    })
})