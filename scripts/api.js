const container = document.querySelector(".entryLog")
const makeJournalEntryComponent = (entryObject) => {
    return `
        <div>${entryObject.date}</div>
        <div>${entryObject.concept}</div>
        <div>${entryObject.entry}</div>
        <div>${entryObject.mood}</div>
    
    `
}


fetch("http://localhost:3000/journalEntries") // Fetch from the API
    .then(entires => entires.json())  // Parse as JSON
    .then(entriesList => {
        for(let element of entriesList)  {
            container.innerHTML += makeJournalEntryComponent(element)
        }
        console.log(entriesList)
        // What should happen when we finally have the array?
    })