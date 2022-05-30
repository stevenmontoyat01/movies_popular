
// scripts 
const url = "https://api.themoviedb.org/3/movie/popular?api_key=ee593158fa70dbf857c1347f00315b82&language=es-ES";
const contenteParent = document.querySelector('#contentFlex');
//--------------------------------------------------------------------------------------------


const loadMovie = async() => {

    try{
        const respuesta = await fetch(url);
        //console.log(respuesta)
        if(respuesta.status === 200){
            const json = await respuesta.json();
            //console.log(json);
            createMovie(json.results)
        }else if(respuesta.status === 401){
            console.log(`error ${respuesta.status}`)
        }else if(respuesta.status === 404){
            console.log(`error ${respuesta.status}`)
        }
        else{
            console.log(`error desconocido`);
        }
    }catch(e){
        console.log(e);
    }
}

loadMovie();

const createMovie = (url) => {
    try{
        url.forEach(element => {
            const contentSon = document.createElement('div');
            contentSon.setAttribute('id',element.id);
            contentSon.classList.add('contentSon');

            const img = document.createElement('img');
            img.setAttribute('src',`https://image.tmdb.org/t/p/w500/${element.poster_path}`);
            img.setAttribute('alt',element.id);
            img.classList.add('img');

            const title = document.createElement('h2');
            let text1 = document.createTextNode(element.title);
            title.appendChild(text1);

            const description = document.createElement('p')
            let text2 = document.createTextNode(element.overview);
            description.appendChild(text2);

            contentSon.appendChild(img);
            contentSon.appendChild(title);
            contentSon.appendChild(description);
            contenteParent.appendChild(contentSon);
        });
    }catch(e){
        console.log(e)
    }
}

