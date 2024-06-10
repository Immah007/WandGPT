        let body = document.getElementById("body");
    
    let blink = document.getElementById("cursor");
    const text1 = "Hello, welcome to WandGPT.";
    const text2 = "WandGPT is created in the University of Nairobi."
    const text3 = "You are interacting with the UX/UI testing stage.";
    const text4 = "This version of WandGPT is for UX testing only.";
    const text5 = "This is an open source and free research preview for everybody.";
    const text6 = "This module has not yet been linked to its AI engine.";
    const text7 = "The real-time AI response functionality will be launced after this stage."
let index = 0;
let deleting = false;
let displayTexts = [text1, text2, text3,text4, text5, text6, text7];
let displayTextIndex = 0;
// alert(displayTexts[2])


      function navCancel(){
          document.getElementById("navigation").style.width = "0";
      }
            function navShow(){
          document.getElementById("navigation").style.width = "70%";
            }




///////////////////////////////////////////////////////////
function typeText() {

  const element = document.getElementById("footer");

   const text = displayTexts[displayTextIndex];
  if (deleting) {// blink.style.animationPlayState = "running";
  
    element.textContent = text.slice(0, index);
    index--;

    if (index < 0) { 
      deleting = false;
    }
  } else {
   // blink.style.animationPlayState = "running";
    setTimeout(function(){element.textContent = text.slice(0, index + 1);
    index++;}, 2700)

    if (index === text.length) {
      
     // blink.style.animationPlayState = "running";
      setTimeout(function(){deleting = true; }, 1900)
    }
  }

  const typingSpeed = deleting ? 90 : 100; // Speed of typing and deletion
  setTimeout(typeText, typingSpeed)


   if(deleting && index==0 ){displayTextIndex++}
   if(displayTextIndex > 6){ displayTextIndex = 0};

      }
typeText();
////////////////////////////////////////////////////

     
     
     let introDiv = document.getElementById("intro-div");
     let colorGlowEffect = document.getElementById("color-glow-effect");
     let colorGradient = document.getElementById("color-gradient");
     let sendButton = document.getElementById("send");
     
     
     

          let queryArea = document.getElementById("queryArea");
    
    
        let prompt = document.getElementById("input");
        let logo = document.getElementById("AI");
        let mic = document.getElementById("sendBtn");
        let micSvg = document.getElementById("micSvg");
        let sendIcon = document.getElementById("sendIcon");
        let background = document.querySelector("body");
        let colorChanger = document.getElementById("colorChanger");
        let headBar = document.getElementById("heading");
        
        function hideMic(){sendIcon.style.display = "inline-block"; micSvg.style.display = "none" }
     
        
        // Get the input to activate only with a  value

// Add an event listener to the input
prompt.addEventListener('input', function() {
  // Check if the input value is not empty
  if (input.value.trim() !== '') {
    // Enable the button
     hideMic()
  } else {
    // Disable the button
    sendIcon.style.display = "none";
    micSvg.style.display = "inline-block"
  }
});

        //CREATE SVG ICONS...
        
        
        
        const regenerateResponseSvg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
// Set the attributes of the SVG element
regenerateResponseSvg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
regenerateResponseSvg.setAttribute("viewBox", "0 -960 960 960");
regenerateResponseSvg.setAttribute("width", "auto");
regenerateResponseSvg.setAttribute("height", "auto");
// Create a path element
const regeneratePath = document.createElementNS("http://www.w3.org/2000/svg", "path");
// Set the attributes of the path element
regeneratePath.setAttribute("d","M196-331q-20-36-28-72.5t-8-74.5q0-131 94.5-225.5T480-798h43l-80-80 39-39 149 149-149 149-40-40 79-79h-41q-107 0-183.5 76.5T220-478q0 29 5.5 55t13.5 49l-43 43ZM476-40 327-189l149-149 39 39-80 80h45q107 0 183.5-76.5T740-479q0-29-5-55t-15-49l43-43q20 36 28.5 72.5T800-479q0 131-94.5 225.5T480-159h-45l80 80-39 39Z"




);
regeneratePath.setAttribute("fill", "currentColor");
// Append the path to the SVG element
regenerateResponseSvg.appendChild(regeneratePath);

        
        
        
        
        const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
// Set the attributes of the SVG element
svg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
svg.setAttribute("viewBox", "0 0 24 24");
svg.setAttribute("width", "32");
svg.setAttribute("height", "32");
// Create a path element
const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
// Set the attributes of the path element
path.setAttribute("d","M17 1v2h-1.796l-2.47-.966L5.81 2a2.22 2.22 0 0 0-2.045 1.166 1.755 1.755 0 0 0-.062 1.425A2.15 2.15 0 0 0 2.65 5.939a2.19 2.19 0 0 0 .262 1.713 2.253 2.253 0 0 0-.923 1.461 2.165 2.165 0 0 0 .445 1.672 2.705 2.705 0 0 0-.523 2.564A2.084 2.084 0 0 0 3.85 15h3.39c.242 0 .56 0 .8.015a4.966 4.966 0 0 0-1.242 3.153c0 2.194.42 3.457 1.284 3.861a1.363 1.363 0 0 0 .58.126 2.013 2.013 0 0 0 1.213-.46l.179-.151v-.232a7.073 7.073 0 0 1 1.174-3.496 8.993 8.993 0 0 1 2.49-2.649L16.04 12H17v2h5V1zm0 10h-1.473l-2.448 3.395a9.933 9.933 0 0 0-2.683 2.867 8.134 8.134 0 0 0-1.328 3.772.658.658 0 0 1-.562.09c-.166-.08-.708-.521-.708-2.956a4.09 4.09 0 0 1 1.101-2.614 1.051 1.051 0 0 0 .237-1.06C8.886 14 8.266 14 7.24 14H3.85c-.524 0-.847-.48-.976-.928a1.616 1.616 0 0 1 .556-1.821l.582-.363-.525-.443a1.27 1.27 0 0 1-.508-1.175 1.359 1.359 0 0 1 .892-1.013l.747-.305-.604-.533a1.208 1.208 0 0 1-.395-1.227 1.167 1.167 0 0 1 .908-.851l.775-.167-.485-.628a.858.858 0 0 1-.153-.939A1.25 1.25 0 0 1 5.811 3h6.646l2.472.966L17 3.993zm4 2h-3V2h3z"
);
path.setAttribute("fill", "currentColor");
// Append the path to the SVG element
svg.appendChild(path);




const likesvg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
// Set the attributes of the SVG element
likesvg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
likesvg.setAttribute("viewBox", "0 0 24 24");
likesvg.setAttribute("width", "32");
likesvg.setAttribute("height", "32");
// Create a path element
const likepath = document.createElementNS("http://www.w3.org/2000/svg", "path");
// Set the attributes of the path element
likepath.setAttribute("d", "M22.088 10.651a2.07 2.07 0 0 0-1.937-1.636S16.2 9.015 15.96 9a5.017 5.017 0 0 0 1.242-3.168c0-2.194-.42-3.457-1.284-3.861a1.768 1.768 0 0 0-1.793.335l-.179.15v.232a7.073 7.073 0 0 1-1.174 3.496 8.993 8.993 0 0 1-2.49 2.649L7.96 12H7v-2H2v13h5v-2h1.796l2.47.966L18.19 22a2.22 2.22 0 0 0 2.045-1.166 1.755 1.755 0 0 0 .062-1.425 2.15 2.15 0 0 0 1.053-1.348 2.19 2.19 0 0 0-.262-1.713 2.253 2.253 0 0 0 .923-1.461 2.165 2.165 0 0 0-.445-1.672 2.705 2.705 0 0 0 .523-2.564zM6 22H3V11h3zm14.571-9.251l-.582.363.525.443a1.27 1.27 0 0 1 .508 1.175 1.359 1.359 0 0 1-.892 1.013l-.747.305.604.533a1.208 1.208 0 0 1 .395 1.227 1.167 1.167 0 0 1-.908.851l-.775.167.485.628a.858.858 0 0 1 .153.939 1.25 1.25 0 0 1-1.148.607h-6.646l-2.472-.966L7 20.007V13h1.473l2.448-3.395a9.933 9.933 0 0 0 2.683-2.867 8.134 8.134 0 0 0 1.328-3.772.654.654 0 0 1 .562-.089c.166.078.708.52.708 2.955a4.09 4.09 0 0 1-1.101 2.614 1.051 1.051 0 0 0-.237 1.06c.25.494.87.494 1.896.494h3.391c.524 0 .847.48.976.928a1.616 1.616 0 0 1-.556 1.821z"
);
likepath.setAttribute("fill", "currentColor");
likesvg.appendChild(likepath);




const copysvg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
// Set the attributes of the SVG element
copysvg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
copysvg.setAttribute("viewBox", "0 -960 960 960");
copysvg.setAttribute("width", "24");
copysvg.setAttribute("height", "24");
// Create a path element
const copypath = document.createElementNS("http://www.w3.org/2000/svg", "path");
// Set the attributes of the path element
copypath.setAttribute("d", "M180-81q-24 0-42-18t-18-42v-603h60v603h474v60H180Zm120-120q-24 0-42-18t-18-42v-560q0-24 18-42t42-18h440q24 0 42 18t18 42v560q0 24-18 42t-42 18H300Zm0-60h440v-560H300v560Zm0 0v-560 560Z"


);
copypath.setAttribute("fill", "currentColor");
copysvg.appendChild(copypath);

           
        //END OF SVG ICONS...
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        function sendMsg(){
                introDiv.style.display = "none";
                colorGlowEffect.style.visibility = "visible";
                colorGradient.style.visibility = "visible";
                sendButton.style.background = "transparent";
                let userInput = prompt.value;
                let queryArea = document.createElement("div");
                    queryArea.setAttribute("id","queryArea");
                    queryArea.innerText=userInput;
                     
                                         
               let copyArea = document.createElement("div");
                   copyArea.setAttribute("id","copyArea");
                   
                   let regenerateIcon = document.createElement("button");
                      regenerateIcon.setAttribute("class","createdIconHold");
                      regenerateIcon.setAttribute("id", "regenerate")
                //    const buttons = document.querySelectorAll('.createdIconHold'); 
                    regenerateIcon.addEventListener('click',() => { 
                        
                        let thisHolder = regenerateIcon.parentNode;
                         let thisResponse = thisHolder.parentNode;
                             alert("This div will regenerate the response: " + thisResponse.innerText);
                        
                      //  alert("This will regenerate the response...")
                        
                    });
              //        buttons.forEach(button => { regenerateIcon.addEventListener('click', regenerateResponse())}); 
                  
                   copyArea.appendChild(regenerateIcon); 
                   regenerateIcon.appendChild(regenerateResponseSvg.cloneNode(true));
                   queryArea.appendChild(copyArea);
                     
                    body.appendChild(queryArea);  
              
                    
                    
          const greetings = ['hello', 'hi', 'hey', 'greetings', 'hola'];
          const additionResponse = ['Thanks for participating in my training', 'How may I help you today?', 'How can I assist you today?', 'Feel free to let me know how I can further assist']
          const apologies = ['I apologise', 'I am sorry', 'My apologies', 'Oops, I apologise']
          const questions = ["who"];
          const randomGreeting = greetings[Math.floor(Math.random() * greetings.length)];
          const randomadditionResponse = additionResponse[Math.floor(Math.random() * additionResponse.length)];
          const randomApology = apologies[Math.floor(Math.random() * apologies.length)];
          let generatedText = " ";
          
              const lowercaseInput = userInput.toLowerCase(); 
              

              if (greetings.includes(lowercaseInput)) {  generatedText=randomGreeting + ". "+ randomadditionResponse; }
              else if(questions.includes(lowercaseInput)){generatedText="I am AzureAI."}
              else { generatedText= randomApology+ ". At this early training stage, I still can't understand what you meant by " +"\""  + prompt.value + "\". " + "Please note that you are taking part in my UX/UI responsivity testing. I will be able to answer any question you need after quality check of my UX is affirmed by the developing team. My AI Engine will be accessible after the UX/UI test is complete. Thanks and see you more often."; }

             let responseArea = document.createElement("div");
                 responseArea.setAttribute("id", "responseArea")
             
             let reactionArea = document.createElement("div");
                 reactionArea.setAttribute("id", "reactionArea")
                 reactionArea.setAttribute("class", "new")   
             //   newDiv.style.width = "50%";
             //   newDiv.style.background = "blue"
             //   newDiv.style.height = "95px";
                
                  let likeIcon = document.createElement("button");
                      likeIcon.setAttribute("class","createdIconHold");
                      likeIcon.setAttribute("id", "like");
                      likeIcon.appendChild(likesvg.cloneNode(true)); 
                      likeIcon.addEventListener('click', () => {
                          
                          let thisHolder = likeIcon.parentNode;
                         let thisResponse = thisHolder.parentNode;
                             alert("This function will like this response: " + thisResponse.innerText);
                       //   likeResponse()
                          
                      })
                     
                      
                  let copyButton = document.createElement("button");
                      copyButton.setAttribute("class","createdIconHold");
                      copyButton.setAttribute("id", "copy");
                      copyButton.appendChild(copysvg.cloneNode(true))
                      copyButton.addEventListener("click",() => {
                          
                          let thisHolder = copyButton.parentNode;
                         let thisResponse = thisHolder.parentNode;
                         
                         
                       //  function copyTextToClipboard(elementId) {
                       const textarea = document.createElement('textarea');
                     textarea.value = thisResponse.innerText;
                      document.body.appendChild(textarea);
                    textarea.select();
                      document.execCommand('copy');
                      document.body.removeChild(textarea);
                        //}

                      // copyTextToClipboard('myDiv');

                         
                         
                             alert("Response Copied successfully");

                          
                      })
                      
                  let dislikeIcon = document.createElement("button");
                      dislikeIcon.setAttribute("class","createdIconHold");
                      dislikeIcon.setAttribute("id", "dislike");
                      dislikeIcon.appendChild(svg.cloneNode(true)); 
                      dislikeIcon.addEventListener('click',() => {
                          
                         let thisHolder = dislikeIcon.parentNode;
                         let thisResponse = thisHolder.parentNode;
                             alert("This will dislike: " + thisResponse.innerText);
                                
                          
                         // dislikeResponse();
                          
                      }); 
                      
             reactionArea.appendChild(likeIcon);
             reactionArea.appendChild(copyButton);
             reactionArea.appendChild(dislikeIcon);
             
             responseArea.appendChild(reactionArea)
             body.appendChild(responseArea);
                  
             //    responseArea.innerText = generatedText; (RESPONSE WITHOUT GPT-LIKE SIMULATIOM)
                 
                   //SIMULATE CHAT GPT WORD TYPING....
                    function typeText(elementId, text, delay, callback) {
  //var element = document.getElementById(elementId);
  var index = 0;

  function typeNextLetter() {
     // body.scrollTop = body.scrollHeight;
    responseArea.textContent += text[index];
    index++;

    if (index < text.length) {
      setTimeout(typeNextLetter, delay);
    } else {
      if (callback && typeof callback === 'function') {
        callback();
      }
    }
  }

  typeNextLetter();
  
}

// Example usage
//var targetElementId = "myDiv";
var textToType = generatedText;
var typingDelay = 2; // milliseconds

function typingComplete() {
  
  responseArea.appendChild(reactionArea);

  body.scrollTop = body.scrollHeight;
  colorGlowEffect.style.visibility = "hidden";
  colorGradient.style.visibility = "hidden";
  sendButton.style.background = "#2d3438";
  sendIcon.style.display = "inline-block"; 
  // responseArea.appendChild(newDiv)
}

typeText(responseArea, textToType, typingDelay, typingComplete);





















































                   //...THE END.
                   
                   



                  body.appendChild(responseArea);
                  
              
            prompt.value = null; 
            sendIcon.style.display = "none"; 
           // micSvg.style.display = "inline-block"
        }
        
        
        
        
        
        
        
        
        
        
        
        
        
    //SET UP THE REGENERATE RESPONSE FUNCTIONALITY...
    // Iterate over each button and add a click event listener
function regenerateResponse(){
        // Get the parent div of the clicked button
        const parentDiv = regenerateIcon.parentElement; // Generate a random color
        const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16); // Change the background color of the parent div 
        parentDiv.style.backgroundColor = randomColor; };   
    
    
    
    //SET UP THE LIKE ICON FUNCTIONALITY...
      function likeResponse(){
          alert("This will LIKE the reponse.")
      }
    //SET UP THE COPY ICON FUNCTIONALITY...
      function copyResponse(){
          alert("The response has been copied successfully.")
      }
    //SET UP THE DISLIKE FUNCTIONALITY...
     function dislikeResponse(){
          alert("This will DISLIKE the generated reponse.")
      }
      
      
      
