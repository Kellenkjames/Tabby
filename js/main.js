const tabby = document.querySelector('.tabby') 
const tabs = Array.from(tabby.querySelectorAll('.tab'))
const tabContents = Array.from(tabby.querySelectorAll('.tab-content'))

tabs.forEach(tab => {
    
    tab.addEventListener('click', event => {
        
        const target = tab.dataset.target
        const tabContent = tabby.querySelector('#' + target)
        
        tabs.forEach(t => t.classList.remove('is-selected'))
        tab.classList.add('is-selected')

        tabContents.forEach(c => c.classList.remove('is-selected'))
        tabContent.classList.add('is-selected')

    })
})

