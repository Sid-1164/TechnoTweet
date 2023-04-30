const inputBtn = document.getElementById("input-btn")
const inputEl = document.getElementById("input-el")
const ulEl = document.getElementById("ul-el")
const tabBtn = document.getElementById("tab-btn")
let myLeads = []
let oldLeads = []
const deleteBtn = document.getElementById("delete-btn")
// parse converts into array
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))


if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage
    render(myLeads)
}


tabBtn.addEventListener("click", function () {

    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads", JSON.stringify(myLeads)) // turning array to string
        render(myLeads)
    })
})

// main function
function render(leads) {
    let listItems = ""
    for (let i = 0; i < leads.length; i++) {
        // listItems += "<li><a taget = '_blank' href = '" + myLeads[i] + "'>" + myLeads[i] + "</a></li>"
        listItems += `
         <li>  
            <a taget = '_blank'href= '${leads[i]}'>  
                ${leads[i]} 
            </a> 
         </li>  
        `
    }
    ulEl.innerHTML = listItems
}


// delete btn
deleteBtn.addEventListener("dblclick", function () {
    localStorage.clear()
    myLeads = []
    render(myLeads)
})


// input btn
inputBtn.addEventListener("click", function () {

    // pushing input string
    myLeads.push(inputEl.value)
    inputEl.value = ""

    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    render(myLeads)

    // console.log(localStorage.getItem("myLeads") )
    // console.log(typeof myLeads)

})



