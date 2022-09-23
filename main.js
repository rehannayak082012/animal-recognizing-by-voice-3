https://teachablemachine.withgoogle.com/models/RcG8-ZyIC/
function startClassification() 
{
     navigator.mediaDevices.getUserMedia({ audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/RcG8-ZyIC/model.json', modelReady); 
} 

function modelReady()
{
    classifier.classify( gotResults); 
}

function gotResults(error, results){
     if (error) {
         console.error(error);
     
     } else { 
        console.log(results);
        random_number_r = Math.floor(Math.random() * 255) + 1;
        random_number_g = Math.floor(Math.random() * 255) + 1;
        random_number_b = Math.floor(Math.random() * 255) + 1;

        document.getElementById("result_label").innerHTML = 'I can hear - '+ results[0].label;
        document.getElementById("result_confidence").innerHTML = 'Accuracy - '+ (results[0].confidence*100).toFixed(2)+" %";
        document.getElementById("result_label").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_r+")";
        document.getElementById("result_confidence").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_r+")";

        img = document.getElementById('lion');
        img1 = document.getElementById('cat');
        img2 = document.getElementById('cow');
        img3 = document.getElementById('dog');

        if (results[0].label == "Roaring") {
          img.src = 'black-maned-lion-shem-compion-786x500.jpg';
        } else if (results[0].label == "Mooing") {
          img.src = 'cow image.jpg';
          
        } else if (results[0].label == "Meow"){
          img.src = 'cat image.jpg';
          
        } else  (results[0].label == "Barking") 
          img.src = 'golden-retriever-royalty-free-image-506756303-1560962726.jpg';
          
        }
    }    
     