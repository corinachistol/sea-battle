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
                    <a
                        class="ship sq" 
                        href="/?shoot=${coordinates}"
                        onclick="getCoords(${coordinates})"
                    >
                    </a>
                `
            }else{
                squares += `
                    <a
                        class="sq" 
                        href="/?shoot=${coordinates}"
                        onclick="getCoords(${coordinates})"
                    >
                    </a>
                `

            }

        }
    }
    form.innerHTML = squares;

}

addSquares();


async function getCoords(coordinates) {
    const response = await fetch(`http:localhost:5500/?shoot=${coordinates}`)
        if(response.ok){
                console.log(coordinates)
                let coords = coordinates.split('x')
                // location. assign("/")
                
                return coords
                // console.log(coords[0])
                // console.log(coords[1])
            }else{
                throw new Error('Network response was not ok');
            }

}














