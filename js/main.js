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

