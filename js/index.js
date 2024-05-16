// // Task 1 Start 
// const sendBtn = document.querySelector(".send-btn");
// sendBtn.addEventListener("click",(e)=>{
//     e.preventDefault();
//     const msgList = document.querySelector(".msg-list");
//     const addMessageForm = document.querySelector(".add-message");
//     let name = addMessageForm.elements.name.value;
//     let txt = addMessageForm.elements.message.value;
//     let currentDateAndTime = new Date();
//     const day = String(currentDateAndTime.getDate()).padStart(2, '0'); // Get day (with leading zero if necessary)
//     const month = String(currentDateAndTime.getMonth() + 1).padStart(2, '0'); // Get month (with leading zero if necessary)
//     const year = currentDateAndTime.getFullYear(); // Get full year
    
//     // Format date as dd.mm.yyyy
//     let formattedDate = `${day}.${month}.${year}`;
//     const msg = `
//     <div class="msg">
//         <div class="msg__header">
//             <p>${name}</p>
//             <p>${new Date().toTimeString()} ${formattedDate}</p>
//         </div>
//         <p>${txt}</p>
//     </div>
//     `;
//     msgList.insertAdjacentHTML("beforeend",msg);
//     addMessageForm.elements.name.value = "";
//     addMessageForm.elements.message.value="";
// });
// // Task 1 End



// Task 2 Start
// let questions = [
//     {
//         question:"1. How many letters are there in 'salam' ?",
//         variants:['1','5'],
//         answer:1
//     },
//     {
//         question:"2. Azerbaijan's flag color count :",
//         variants:['3','10'],
//         answer:0
//     },
//     {
//         question:"3. Who was John Wick ?",
//         variants:["A) Serial Killer","B) Programmer"],
//         answer:0
//     },
//     {
//         question:"4. Russia's capital :",
//         variants:["A) Baku","B) Moscow"],
//         answer:1
//     },
//     {
//         question:"5. Who was Adolf Hitler ?",
//         variants:["A) Germany's Fuhrer","B) Some dude from Germany"],
//         answer:0
//     }
// ];

// let trueAnswers = 0;
// let currentQuestion = 0;

// let question = document.querySelector(".question");
// const btn = document.querySelector(".next-btn");

// function nextQuestion(){
//     if(currentQuestion == 5){
//         alert(`True answer count : ${trueAnswers} \nFalse Answer count : ${5-trueAnswers}`);
//         return;
//     }
//     let options = document.querySelectorAll(`input[name='option${currentQuestion}']`);
//     let selectedAnswer = null;
//     options.forEach(option=>{
//         if(option.checked){
//             selectedAnswer = option.nextElementSibling.textContent;
//         }
//     });
//     if(selectedAnswer == questions[currentQuestion].variants[questions[currentQuestion].answer]){
//         trueAnswers++;
//     }
//     currentQuestion++;
//     if(currentQuestion == 5){
//         alert(`True answer count : ${trueAnswers} \nFalse Answer count : ${5-trueAnswers}`);
//         return;
//     }
//     question.innerHTML = `
//     <p>${questions[currentQuestion].question}</p>
//     <div>
//     <input type="radio" name="option${currentQuestion}">
//     <p>${questions[currentQuestion].variants[0]}</p>
//     </div>
//     <div>
//     <input type="radio" name="option${currentQuestion}">
//     <p>${questions[currentQuestion].variants[1]}</p>
//     </div>
//     <button onclick="nextQuestion()" class="next-btn">Next</button>
//     `;
// } 
// Task 2 End



// Task 3 Start
// let inputText = document.querySelector(".input-text");
// let resultText = document.querySelector(".result-text");

// const form_wordpad = document.querySelector(".task-3__form");

// form_wordpad.addEventListener("submit",(e)=>{
//     e.preventDefault();
// });

// function showText(){
//     let checkBoxes = form_wordpad.elements;
//     resultText.style = '';
//     if(checkBoxes.isBold.checked){
//         resultText.style.fontWeight = 'bold';
//     }if(checkBoxes.isUnderline.checked){
//         resultText.style.textDecoration ='underline';
//     }if(checkBoxes.isItalic.checked){
//         resultText.style.fontStyle = 'italic';
//     }
    
//     let radios = document.querySelectorAll("input[name='group']");
//     radios.forEach(radio=>{
//         if(radio.checked){
//             let text = radio.nextElementSibling.textContent.toLocaleLowerCase();
//             if(text == 'left'){
//                 resultText.style.textAlign = 'start';
//             }else if(text == 'right'){
//                 resultText.style.textAlign = 'end';
//             }else{
//                 resultText.style.textAlign = 'justify';
//             }
//         }
//     });

//     resultText.value = inputText.value;
// }
// Task 3 End



// Task 4 Start
// let menuActive = false;
// let resultActive = false;
// let book__cards = document.querySelector(".book-cards");
// let section = document.querySelector(".task-4");
// book__cards.addEventListener("click",(e)=>{
//     let bookName = e.target.parentElement.children[1].innerText;
//   if(e.target.tagName == 'BUTTON'){
//         if(!menuActive){
//             let menu = `
//             <li class="menu">
//                 <div class="menu__item">
//                     <label for="book">Book :</label>
//                     <input readonly value="${bookName}" type="text" name="book">
//                 </div>

//                 <div class="menu__item">
//                     <label for="quantity">Quantity :</label>
//                     <input type="text" name="quantity">
//                 </div>

//                 <div class="menu__item">
//                      <label for="name">Name :</label>
//                      <input type="text" name="name">
//                 </div>

//                 <div class="menu__item">
//                     <label for="delivery__address">Delivery Address :</label>
//                     <textarea rows="10" name="delivery__address"></textarea>
//                 </div>
                
//                 <div class="menu__item">
//                     <label for="delivery__date">Delivery Date :</label>
//                     <input type="text" name="delivery__date">
//                 </div>

//                 <div class="menu__item">
//                     <label for="comment">Comment :</label>
//                     <textarea rows="10" name="comment"></textarea>
//                 </div>

//                 <button class='buy-btn'>Buy</button>
//             </li>
//             `;
//             book__cards.insertAdjacentHTML('beforeend',menu);
//             menuActive = true;
//         }
//         let menu = document.querySelector(".menu");
//         menu.children[0].children[1].value = bookName;
//         menu.addEventListener("click",(e)=>{
//             if(e.target.className == 'buy-btn'){
//                 let quantity = menu.children[1].children[1].value;
//                 let name = menu.children[2].children[1].value;
//                 let address = menu.children[3].children[1].value;
//                 let date = menu.children[4].children[1].value;

//                 if(!resultActive){
//                     let result =`
//                     <div class='result'>
//                         <h2>Result :</h2>
//                         <div class='result__container'>
//                             <p>${name},thanks for the order !</p>
//                             <p>Book ${bookName} will be delivered on ${date} to ${address}</p>
//                         </div>
//                     </div>
//                     `;
//                     section.insertAdjacentHTML("beforeend",result);
//                     resultActive = true;
//                 }else{
//                     let resultContainer = document.querySelector(".result__container");
//                     resultContainer.children[0].textContent = `${name},thanks for the order !`;
//                     resultContainer.children[1].textContent = `Book ${bookName} will be delivered on ${date} to ${address}`;
//                 }

//                 quantity = "";
//                 name = "";
//                 address = "";
//                 date = "";
//                 bookName = "";
//             }
//         });
//   }
// });
// Task 4 End



// Task 5 Start
// let groups = [
//     {name:"Group 1",students:["Saed","Muhammed","Amin","Rovshan","Ismael"],lessons:[{lesson:1,subject:"Math",participants:[]},{lesson:2,subject:"Algebra",participants:[]},{lesson:3,subject:"Russian",participants:[]}]},
//     {name:"Group 2",students:["Quliyeva","Memmedzadeh","Beshirov","Memmedli","Penahli"],lessons:[{lesson:1,subject:"Programming",participants:[]},{lesson:2,subject:"Cyber",participants:[]},{lesson:3,subject:"Digital-Design",participants:[]}]},
//     {name:"Group 3",students:["Elesgerova","Rafiyev","Memmedov","Agayev","Nebiyev"],lessons:[{lesson:1,subject:"Geography",participants:[]},{lesson:2,subject:"Politology",participants:[]},{lesson:3,subject:"English",participants:[]}]},
// ];

// let groupsFromUi = document.querySelector('.groups');
// groupsFromUi.selectedValue = '';
// let lessons = document.querySelector(".lessons");
// lessons.selectedValue = '';
// let topic = document.querySelector(".topic");

// for(let i = 0 ; i < groups.length ; i++){
//     let option = `
//     <option value='group${i+1}'>
//         ${groups[i].name}
//     </option>
//     `;
//     groupsFromUi.insertAdjacentHTML("beforeend",option);
// }

// let selectedGroup;
// let selectedLesson;

// groupsFromUi.addEventListener("change",(e)=>{
//     lessons.innerHTML = "";
//     selectedGroup = groups[e.target.selectedIndex];
//     for(let i = 0 ; i < selectedGroup.lessons.length; i++){
//         let option = `
//         <option value='lesson${i+1}'>
//             ${selectedGroup.lessons[i].lesson}
//         </option>
//         `;
//         lessons.insertAdjacentHTML("beforeend",option);
//     }
// });

// lessons.addEventListener("change",(e)=>{
//     selectedLesson = selectedGroup.lessons[e.target.selectedIndex].lesson;
// });

// let students = document.querySelector(".students");

// function selectLesson(){
//     topic.value = selectedGroup.lessons[selectedLesson - 1].subject;
//     students.innerHTML = "";
//     students.innerHTML= `
//     <li class="student">
//             <p>Name</p>
//             <p>is present</p>
//     </li>
//     `;
//     let student;
//     selectedGroup.students.forEach(s => {
//         if(selectedGroup.lessons[selectedLesson - 1].participants.includes(s)){
//           student = `
//           <li class='student'>
//             <p>${s}</p>
//             <input class='ispresent' checked type='checkbox' name='isPresent'>
//           </li>
//           `;
//         }else{
//           student = `
//           <li class='student'>
//             <p>${s}</p>
//             <input class='ispresent' type='checkbox' name='isPresent'>
//           </li>
//           `;
//         }
//         students.insertAdjacentHTML("beforeend",student);
//     });
//     let btn = "<li class='student'><button onclick='save()'>Save</button></li>";
//     students.insertAdjacentHTML("beforeend",btn);
//     //console.log(selectedGroup.lessons[selectedLesson - 1].participants.includes('s'));
// };

// function save(){
//     let inputs = document.querySelectorAll(".ispresent");
//     inputs.forEach((checkbox)=>{
//         if(checkbox.checked){
//            selectedGroup.lessons[selectedLesson - 1].participants.push(checkbox.previousElementSibling.textContent);
//         }
//     });

//     inputs.forEach((checkbox)=>{
//         if(!checkbox.checked){
//            selectedGroup.lessons[selectedLesson - 1].participants.splice(selectedGroup.lessons[selectedLesson - 1].participants.indexOf(checkbox.previousElementSibling.textContent),1);
//         }
//     });
//     console.log(selectedLesson);
// }
// Task 5 End



// Task 6 Start
// let flights = [
//     {direction:"Baku  -  Moscow",date:"25.05.2024",emptyPlaces:[],busyPlaces:[]},
//     {direction:"Baku  -  New York",date:"31.05.2024",emptyPlaces:[],busyPlaces:[]},
//     {direction:"Baku  -  Praga",date:"01.06.2024",emptyPlaces:[],busyPlaces:[]}
// ];

// for(let i = 0 ; i < 25 ; i++){
//     flights[0].emptyPlaces.push(i+1);
// }

// for(let i = 0 ; i < 20 ; i++){
//     flights[1].emptyPlaces.push(i+1);
// }

// for(let i = 0 ; i < 15; i++){
//     flights[2].emptyPlaces.push(i+1);
// }

// let directions = document.querySelector(".directions");
// let date = document.querySelector(".date");
// let places = document.querySelector(".places");
// let priceText = document.querySelector(".price");
// let selectedIndex = -1;

// for(let i = 0 ; i < flights.length;i++){
//     let item = `
//     <option>${flights[i].direction}</option>
//     `;
//     directions.insertAdjacentHTML("beforeend",item);
// }

// directions.addEventListener("change",e=>{
//     date.value = flights[e.currentTarget.selectedIndex].date;
//     selectedIndex = e.currentTarget.selectedIndex;
// });

// function searchFlight(){
//     priceText.textContent ="";
//     places.innerHTML = "";
//     for(let i = 0 ; i < flights[selectedIndex].emptyPlaces.length ; i++){
//         let item = `
//         <li class="place">
//             <div>
//                 <input class='check-place' type="checkbox" name="check-place">
//                 <p>${flights[selectedIndex].emptyPlaces[i]}</p>
//             </div>
//         </li> 
//         `;
//         places.insertAdjacentHTML("beforeend",item);
//     }
//     let totalPrice = 0;
//     let inputs = document.querySelectorAll(".check-place");
//     inputs.forEach(i=>{
//        i.addEventListener("change",e=>{
//             if(i.checked){
//                 totalPrice += 50;
//             }else {
//                 totalPrice -= 50;
//             }
//             priceText.textContent = totalPrice + '$';
//        });
//     });
// }

// let deleted_indexes = [];

// function book(){
//     deleted_indexes = [];
//     let inputs = document.querySelectorAll(".check-place");
//    for(let i = 0 ; i < inputs.length ; i ++){
//         if(inputs[i].checked){
//             deleted_indexes.push(inputs[i].nextElementSibling.textContent -1 );
//         }
//    }

//    console.log(deleted_indexes);
//    deleted_indexes.forEach(i=>{
//        (flights[selectedIndex].emptyPlaces.splice(flights[selectedIndex].emptyPlaces.indexOf(i+1),1));
//    });

//     priceText.textContent = "";
//      searchFlight();
// }
// Task 6 End