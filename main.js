https://teachablemachine.withgoogle.com/models/
Webcam.set({
    width:350,
    height:300,
    image_format:"png",
    png_quality:90
});

camera=document.getElementById("webcam");
Webcam.attach(camera);

function capture_image(){
    Webcam.snap(function(data_uri){
        document.getElementById("output").innerHTML="<img id='captured_image'src="+data_uri+">";
    });
}

console.log("ml5 Version:"+ml5.version);
classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/CvGaQl6pf/model.json",modelloaded);
function modelloaded(){
    console.log("Model is Loaded");
}
function check(){
    var image=document.getElementById("captured_image");
    classifier.classify(image,gotResult);
}
function gotResult(error,results){
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
        document.getElementById("result_label").innerHTML=results[0].label;
        document.getElementById("result_accuracy").innerHTML=results[0].confidence.toFixed(2);
    }
}