// console.log('hoooooo');

window.onload = showingNotes();

 let addBtn = document.getElementById('addBtn');

 addBtn.addEventListener('click', function(e){

    let addTxt = document.getElementById('addTxt');

    let addTitle = document.getElementById('addTitle');

    

    let notes = localStorage.getItem('notes');

    if(notes == null)
    {
      notesObj = [];
    }
    else{
      notesObj = JSON.parse(notes);
    }
    notesObj.push(addTxt.value);
    localStorage.setItem('notes',JSON.stringify(notesObj));
    addTxt.value='';
   //  console.log(notes);

     showingNotes();

 })

 function showingNotes() {

   let notes = localStorage.getItem('notes');

   if(notes == null)
    {
      notesObj = [];
    }
    else{
      notesObj = JSON.parse(notes);
    }

    let html = '';

    notesObj.forEach(function(element, index) {
      html += `
              <div class="noteCard my-2 mx-2 card" style="width: 18rem;">
                      <div class="card-body">
                          <h5 class="card-title">Note ${}</h5>
                          <p class="card-text"> ${element}</p>
                          <button id="${index}"onclick="deleteNote(this.id)" class="btn btn-primary">Delete Note</button>
                      </div>
                  </div>`;
    });

    let notesElem = document.getElementById('notes');

    if(notesObj.length != 0)
    {
          notesElem.innerHTML = html;
    }
   
 }
 
 function deleteNote(index) {
    
   //   console.log("i am deleting ", index);

 let notes = localStorage.getItem('notes');

   if(notes == null)
    {
      notesObj = [];
    }
    else{
      notesObj = JSON.parse(notes);
    }

    notesObj.splice(index,1);
    
     localStorage.setItem('notes', JSON.stringify(notesObj))
     showingNotes();
   
 }
 
let search = document.getElementById('searchTxt');

search.addEventListener('input', function(){

  let inputVal = search.value;

  let noteCard  = document.getElementsByClassName('noteCard');

  Array.from(noteCard).forEach(function(element)
  {
   let cardTxt = element.getElementsByTagName("p")[0].innerText;
   if(cardTxt.includes(inputVal) )
   {
      element.style.display = "block";
   }
   else{
      element.style.display = "none"
   }
  });



})
 

 

 
