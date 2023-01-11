var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition()
var textbox = document.getElementById("textbox")

function start(){
    textbox.innerHTML = ""
    recognition.start()
}

recognition.onresult = function(event){
    console.log(event)
    var content = event.results[0][0].transcript
    console.log(content)
    document.getElementById("textbox").innerHTML = content
    speak()
}

function speak(){
    var synth = window.speechSynthesis
    speakdata = document.getElementById("textbox").innerHTML
    var  utterthis = new SpeechSynthesisUtterance(speakdata)
    synth.speak(utterthis)
    Webcam.attach( camera );
}

camera = document.getElementById("camera")
Webcam.set({
    width: 360,
    height: 250,
    image_format: 'jpeg',
    jpeg_quality: 90
 });
 
