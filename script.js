import { map, coordinates } from "./map.js";



    
function addVcoords(coords) {
    let vcoords = document.getElementById('vcoords');
    let span = "";
    
    coords.forEach(coord => {
        return span +=`<span>${coord}</span>`
    });
    
    vcoords.innerHTML= span;
}
addVcoords(coordinates);



function addHcoords() {
    let hcoords = document.getElementById('hcoords');
    let span = "";

    for(let ch = 1; ch <=10; ch++) {
        span += `<span>${ch}</span>`
    }

    hcoords.innerHTML = span;

}
addHcoords();


function addSquares() {
    let form = document.getElementById('form');
    let squares="";

    form.innerHTML = ``;

    for(let ri = 0; ri < 10; ri++) {
        for(let ci = 0; ci < 10; ci++) {
            let coordinates = `${ri}x${ci}`
            // console.log(coordinates)
            

            if(map[ri][ci] == 1){
                squares += `
                    <button 
                        class="ship sq" 
                        name="shoot"
                        formaction="/?shoot=${coordinates}" 
                        onclick="send_the_request(${coordinates})"
                    >
                    </button>
                `
            }else{
                squares += `
                    <button
                        class="sq" 
                        name="shoot"
                        formaction="/?shoot=${coordinates}"
                        onclick="send_the_request(${coordinates})"
                    >
                    </button>
                `

            }

        }
    }
    form.innerHTML = squares;

}

addSquares();


async function send_the_request(coordinates) {
    const response = await fetch(`http://127.0.0.1:5500/?shoot=${coordinates}`)
        if(response.ok){
                console.log(coordinates)
                let coords = coordinates.split('x')
                
                return coords
                // console.log(coords[0])
                // console.log(coords[1])
                location. assign("/")
            }else{
                throw new Error('Network response was not ok');
            }

}

send_the_request('1x1')



// href="/?shoot=${coordinates}"









