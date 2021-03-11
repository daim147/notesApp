// const addBtn = document.getElementById("add")
// const notes = JSON.parse(localStorage.getItem('myNotes'))

//     notes.forEach(note => {
//         if(note && note !== ""){

//             addNewNote(note)
//         }
//     })

// addBtn.addEventListener("click", ()=>{
//     addNewNote()
// })
// function addNewNote(text = ''){
//     const note  = document.createElement("div")
//     note.classList.add("note")
//     note.innerHTML = `
//     <div class="tools">
//     <button class="edit">
//         <i class="fas fa-edit"></i>
//     </button>
//     <button class="delete">
//         <i class="fas fa-trash-alt"></i>
//     </button>
// </div>
// <div class=" main ${text ? "" : "hidden"}"></div>
// <textarea  class = " ${text ? "hidden" : ""}"></textarea>
//     `
//     const editBTn = note.querySelector(".edit")
//     const deleteBTn = note.querySelector(".delete")
//     const main = note.querySelector(".main")
//     const textarea = note.querySelector("textarea")
//     textarea.value = text
//     main.innerHTML = marked(text)

//     deleteBTn.addEventListener("click", ()=>{
//         note.remove()
//         updateLs()
//     })

//     editBTn.addEventListener("click", ()=>{
//         main.classList.toggle("hidden")
//         textarea.classList.toggle("hidden")
//     })
//     textarea.addEventListener("input",(e)=>{
//         const valueText = e.target.value
//         main.innerHTML = marked(valueText)

//         updateLs()
//     })
//     document.body.appendChild(note)
// }

// function updateLs(){
//     const notesText = document.querySelectorAll('textarea')

//         const notes = []
//         notesText.forEach(note => {
//             notes.push(note.value)
//         })
//         localStorage.setItem('myNotes', JSON.stringify(notes))
// }

const addBtn = document.getElementById("add");

addBtn.addEventListener("click", () => {
  newNotes();
});

function newNotes(text = "") {
  const note = document.createElement("div");
  note.classList.add("note");
  note.innerHTML = `
    <div class="tools">
         <button class="edit">
             <i class="fas fa-edit"></i>
         </button>
         <button class="delete">
             <i class="fas fa-trash-alt"></i>
         </button>
     </div>
     <div class=" main ${text ? "" : "hidden"}"></div>
     <textarea  class = " ${text ? "hidden" : ""}"></textarea>
    `;

  const editBTn = note.querySelector(".edit");
  const deleteBTn = note.querySelector(".delete");
  const main = note.querySelector(".main");
  const textarea = note.querySelector("textarea");
  
    textarea.value = text
    main.innerHTML = marked(text)

  deleteBTn.addEventListener("click", ()=>{
      note.remove()
      localStoring()
  })

  editBTn.addEventListener("click", ()=>{
      main.classList.toggle("hidden")
      textarea.classList.toggle("hidden")
  })
  textarea.addEventListener("input", (e)=>{
      const textValue = e.target.value
      main.innerHTML = marked(textValue)
      localStoring()
})

 document.body.appendChild(note);
}

function localStoring(){
    const allTextArea = document.querySelectorAll('textarea')
    const notePad = []
    allTextArea.forEach(text =>{
        notePad.push(text.value)
    })
    localStorage.setItem('myNotes2', JSON.stringify(notePad ))

    
    
}
const updateNotes = JSON.parse(localStorage.getItem('myNotes2'))
    updateNotes.forEach(note =>{
        if(note && note !== ""){
            newNotes(note)
        }
    })
