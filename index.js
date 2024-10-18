let btn = document.querySelector("#btn")
let content = document.querySelector("#content")
let voice=document.querySelector("#voice")

function speak(text){
    let text_speak = new SpeechSynthesisUtterance(text)
    text_speak.rate =1
    text_speak.pitch=1
    text_speak.volume=1
    text_speak.lang="EN-GB"
    window.speechSynthesis.speak(text_speak)

}

function wishMe(){
    let day = new Date()
    let hours = day.getHours()
    if(hours >= 0 && hours <12)
    {
        speak("good morning kuldeep sir")
    }
    else if(hours>=12 && hours <16)
    {
        speak("good afternoon kuldeep sir")
    }
    else{
        speak("good evening kuldeep sir")
    }
}
window.addEventListener('load',()=> {
    wishMe()
})

let SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
let recognition = new SpeechRecognition()

recognition.onresult =(event)=>
{
    let currentIndex = event.resultIndex
    let transcript = event.results[currentIndex][0].transcript
    content.innerText=transcript
    takeCommand(transcript.toLowerCase())
 
}


btn.addEventListener("click", ()=> {
    recognition.start()
    btn.style.display="none"
    voice.style.display="block"
})

function takeCommand(message){
   
    btn.style.display="flex"
    voice.style.display="none"
    if(message.includes("hello, jarvis.")){
        speak("hi kuldeep sir .  i am fine what about you. is everthing okay")
    }
    else if(message.includes("who created you")){
        speak("kuldeep sir he created me")
  
    }
    else if(message.includes("open youtube")){
        speak("okay i will open")
        window.open("https://www.youtube.com/")
    }
    else if(message.includes("open google")){
        speak("okay i will open google")
        window.open("https://www.google.com/")
    }
    else if(message.includes("open linkedin")){
        speak("okay i will open linkedin")
        window.open("https://www.linkedin.com/feed/")
    }
    else if(message.includes("open calculator")){
        speak("khol rahi hu")
        window.open("calculator://")
    } 
    else if(message.includes(" tu hai kahan")){
        speak("khol rahi hu")
        window.open("https://youtu.be/AX6OrbgS8lI?si=HVocpE6IK2km38Zy")
    }
    else if(message.includes("what is time")){
        let time=new Date().toLocaleString(undefined,{hour:"numeric",minute:"numeric"})
        speak(time)

    }
    else if(message.includes('what is')  || message.includes('what are') 
        || message.includes('speak in')) {
        window.open(`https://www.google.com/search?q=${message.replace(" ", "+")}`, "_blank");
        const finalText = "This is what i found on internet regarding " + message;
	    speak(finalText);
  
    }
    
    else if(message.includes('tell me')){
        
        speak(`this is what i found on internet regarding ${message.replace("jarvis", "")}`)
        window.open(`https://www.google.com/search?q=${message.replace("jarvis", "")}`)
    }
    else if(message.includes("stop jarvis")){
        stop.recognition()

    }
    else{
        speak("this is not a right command")
    }

}

