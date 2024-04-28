import 'tailwindcss'

let tabs = document.querySelectorAll(".tab")
let indicator = document.querySelector(".indicator")
let panels = document.querySelectorAll(".tab-panel")

indicator.style.with = tabs[0].getBoundingClientRect().with + 'px'
indicator.style.left = tabs[0].getBoundingClientRect().left - tabs[0].parentElement.getBoundingClientRect().left + 'px'

tabs.forEach(tab =>{
    tab.addEventListener("click", ()=>{
        indicator.style.width = tab.getBoundingClientRect().with + 'px'
        indicator.style.left = tab.getBoundingClientRect().left - tab.parentElement.getBoundingClientRect().left + 'px'

    })
})