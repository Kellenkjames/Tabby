const tabby = document.querySelector('.tabby')
const tabsList = tabby.querySelector('.tabs')

const tabs = [...tabby.querySelectorAll('.tab')]
const tabContents = [...tabby.querySelectorAll('.tab-content')]

tabsList.addEventListener('click', event => {
    const tab = event.target
    const target = tab.dataset.target
    const tabContent = tabby.querySelector('#' + target)

    // Remove 'is-selected' from tabs
    tabs.forEach(t => { t.classList.remove('is-selected') })
    tab.classList.add('is-selected')

    // Remove 'is-selected' from tabContent
    tabContents.forEach(c => { c.classList.remove('is-selected') })
    tabContent.classList.add('is-selected')

})