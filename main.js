//https://teachablemachine.withgoogle.com/models/vjwQ5W-Y2/
var prediction1=""
var prediction2=""
Webcam.set({
    width:350,
    height:300,
    image_format:"png",
    png_quality:90,
   
})

camera=document.getElementById("camera")
Webcam.attach("#camera")
function takeSnapshot(){
    Webcam.snap(function(data_uri){
      document.getElementById("result").innerHTML='<img id="captured_image" src="'+data_uri+'"/>' 
    })
}

console.log("ml5:versions",ml5.version )
classifier= ml5.imageClassifier("//https://teachablemachine.withgoogle.com/models/vjwQ5W-Y2/model.json", modelLoaded)

function modelLoaded(){
    console.log("model is loaded")
}

function speak(){
    var synthesis= window.speechSynthesis
    speakData1="The first prediction is "+ prediction1
    speakData2="The second prediction is "+ prediction2
    var utterThis= new SpeechSynthesisUtterance(speakData1+speakData2)
    synthesis.speak(utterThis)
}




function check(){

}