var audio = document.getElementById("myAudio");
let word = document.getElementById("word");
let phonetic = document.getElementById("phonetic");
let meaning = document.getElementById("meaning");
let example = document.getElementById("example");
let verb = document.getElementById('verb');
let searchBtn = document.getElementById("searchBtn");

searchBtn.addEventListener("click", function() {
    
    let inputWord = document.getElementById("input").value;

    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${inputWord}`)
    .then(response => response.json())
    .then(data => {
        
        word.innerText = data[0].word;
        audio.src = data[0].phonetics[0].audio;
        phonetic.innerText = data[0].phonetic;
        meaning.innerText = data[0].meanings[0].definitions[0].definition;
        verb.innerText = data[0].meanings[2].definitions[0].definition;
        let example = data[0].meanings[0].definitions[0].example;
        console.log(example);

    })
    .catch(error => {
        
        console.log(error);
    });

});



function playSound() {
    audio.play();
}



