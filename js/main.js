/* How this component works (in my own words) 

Overview: The tabbed component works by associating data-attributes from the tab to the tab content. What is happening behind the scenes is the user clicks on a tab and we are displaying the content from the tab and tab content that match by attribute 

STEPS:

1. Store the tab and tabContents in variables
2. Loop through the TABS with a forEach
3. Inside the loop, attach an event handler (click) on each tab
4. Find and store the tab that was clicked into variable (we need the data-attribute)
5. Find and store the tabContent into a variable - this is where the data-attributes need to MATCH 
6. Loop through the tabs again and remove the default class (use alias)
7. Add the class to the clicked TAB
8. Loop through the tabContents and remove the default class (use alias)
9. Add the class to the tabContent that matches the TAB

*/

const tabby = document.querySelector('.tabby') 
const tab = Array.from(tabby.querySelectorAll('.tab'))
const tabContents = Array.from(tabby.querySelectorAll('.tab-content'))

tab.forEach(tabBtn => {
    
    tabBtn.addEventListener('click', event => {
        
        const target = tabBtn.dataset.target
        const tabContent = tabby.querySelector('#' + target)
        
        tab.forEach(t => t.classList.remove('is-selected'))
        tabBtn.classList.add('is-selected')

        tabContents.forEach(c => c.classList.remove('is-selected'))
        tabContent.classList.add('is-selected')

    })
})

