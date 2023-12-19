let url = 'https://api.dictionaryapi.dev/api/v2/entries/en/';
let btn = document.getElementById('btn');
 
btn.addEventListener('click',()=>{
    let inp = document.getElementById('inp').value;
    fetch(`${url}${inp}`)
        .then((response)=> response.json())
        .then((data)=>{
            let container = document.getElementById('result');
            let container2 = document.getElementById('desc');
            let pContainer = document.getElementById('phonetics');
            container2.innerHTML = '';
            container.innerHTML = '';
            pContainer.innerHTML = '';

            let pron = document.getElementById('pron');
            let volume = document.getElementById('sound');
            volume.style.opacity = 1;
            
            let word = data[0].word;
            let newWord = document.createElement('h3');
            newWord.innerText = word;
            container.prepend(newWord);

            let sound = data[0].phonetic;
            let newSound = document.createElement('p');
            newSound.innerText = sound;
            pContainer.prepend(newSound);
            newSound.classList.add('phonetic');

            let soundArray = new Audio(data[0].phonetics[0].audio);
            volume.addEventListener('click',()=>{
                soundArray.play();
            });

            let meaningArray = data[0].meanings;
            for (let i = 0; i < meaningArray.length; i++) {
                const element = meaningArray[i];
                let partOfSpeech = element.partOfSpeech;
                let definitionsArray = element.definitions;
                let antonymsArray = element.antonyms;
                let synonymsArray = element.synonyms;

                let pos = document.createElement('h5');
                pos.innerText = partOfSpeech.toUpperCase();
                pos.style.fontWeight = 900;
                container2.appendChild(pos);


                let synonyms = synonymsArray.map( (e, i) => ("," + " " + e ) ).join('');
                let finalSynos = synonyms.slice(2);
                let synos = document.createElement('p');
                synos.innerHTML = `<b>Synonyms: </b>${finalSynos}`;
                synos.style.fontWeight = 600;
                if (synonymsArray.length) {
                    pos.appendChild(synos);
                }

                let antonyms = antonymsArray.map( (e, i) => ("," + " " + e ) ).join('');
                let finalAntos = antonyms.slice(2);
                let antos = document.createElement('p');
                antos.innerHTML = `<b>Antonyms: </b>${finalAntos}`;
                antos.style.fontWeight = 400;
                if (antonymsArray.length) {
                    pos.appendChild(antos);
                }

                for (let i = 0; i < definitionsArray.length; i++) {
                    const element = definitionsArray[i];

                    let synoArray = element.synonyms;
                    let antoArray = element.antonyms;
                    let def = element.definition;

                    let defi = document.createElement('li');
                    defi.innerText = def;
                    defi.style.fontWeight = 400;
    
                    let list = document.createElement('ul');
                    pos.appendChild(list);
                    list.appendChild(defi);

                    let synonym = synoArray.map( (e, i) => ("," + " " + e ) ).join('');
                    let finalSyno = synonym.slice(2);
                    let syno = document.createElement('p');
                    syno.innerHTML = `<b>Synonyms: </b>${finalSyno}`;
                    syno.style.fontWeight = 600;
                    if (synoArray.length) {
                        defi.appendChild(syno);
                    };

                    let antonym = antoArray.map( (e, i) => ("," + " " + e ) ).join('');
                    let finalAnto = antonym.slice(2);
                    let anto = document.createElement('p');
                    antos.innerHTML = `<b>Antonym: </b>${finalAnto}`;
                    antos.style.fontWeight = 400;
                    if (antonymsArray.length) {
                        defi.appendChild(anto);
                    };
                };

            };
            console.log(data);
            data.innerHTML = '';
        })
        .catch((e)=>{
            let err = document.createElement('h1');
            err.innerText = "Oops! That doesn't exist.";

            let cont = document.getElementById('result');
            err.style.textAlign = 'center';
            cont.appendChild(err);

            let idk = document.getElementById('idk');
            idk.style.opacity=0;

            console.log('ERROR:'+ e);
        })
});