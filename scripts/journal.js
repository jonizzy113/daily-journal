/*
    Define the keys and value for a JavaScript object that
    represents a journal entry about what you learned today
*/
// const journalEntry1 = {
//     date: "03/03/2019",
//     concepts: "Javascript",
//     entry: "1",
//     mood: "ok"
// }
// const button = document.querySelector("#button")
// entry = []
// entry.push(journalEntry1)

// console.table(entry)

// document.getElementById("button").addEventListener("click", event => {
//     const  journalDate = document.getElementById("journalDate").value;
//     const  conceptTypes = document.getElementById("conceptTypes").value;
//     const  journalEntry = document.getElementById("journalEntry").value;
//     const  mood = document.getElementById("mood").value;
// })

const journalEntries = [
    {
        date: "03/05/2019",
        concept: "json",
        entry: "2",
        mood: "Ok"
    },
    {
        date: "03/06/2019",
        concept: "grunt",
        entry: "3",
        mood: "sad"
    },

    {
        date:"03/07/2019",
        concept: "api",
        entry: "4",
        mood: "sad"
    }

]


const container = document.querySelector(".entryLog")
const makeJournalEntryComponent = (date, concept, entry, mood) => {
    return `
        <div>${date}</div>
        <div>${concept}</div>
        <div>${entry}</div>
        <div>${mood}</div>
    
    `
}

const renderJournalEntries = (entries) => {
        for(let i = 0; i < journalEntries.length; i++) {
            container.innerHTML += makeJournalEntryComponent(
                entries[i].date,
                entries[i].concept,
                entries[i].entry,
                entries[i].mood
            )}
}

renderJournalEntries(journalEntries)





// console.log(makeJournalEntryComponent(journalEntry1))

// console.log(journalEntries)