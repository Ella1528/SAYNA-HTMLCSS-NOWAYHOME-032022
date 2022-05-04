// //premiere etape//
// //Moyen pour faire le hover sur les boutons//
// let voirlesadversaires = document.getElementById("buttonheros")

 //console.log(voirlesadversaires);
// voirlesadversaires.addEventListener(`mouseover`, buttonheros)
// voirlesadversaires.addEventListener(`mouseleave`, buttonheros1)

// function buttonheros(){
//     voirlesadversaires.classList.add(`voirlesadversaires`) 
// }
// function buttonheros1(){
//     voirlesadversaires.classList.remove(`voirlesadversaires`) 
// }


// // on va essayer de faire un nouveau methode pour demonter l`effet hover pour les boutons//
// mety
let voirslesheros = document.getElementsByClassName("button1")


for (let i = 0; i < voirslesheros.length; i++) {
    voirslesheros[i].addEventListener('mouseover', () => {
        voirslesheros[i].classList.add('voirlesheros')
    })

    voirslesheros[i].addEventListener('mouseleave', () => {
        voirslesheros[i].classList.remove('voirlesheros')
    })
}

// faire le hover de la bouton2//
 
let adversaires = document.getElementById(`adversaires`)
console.log(adversaires);


 adversaires.addEventListener(`mouseover`, buttonheros)
 adversaires.addEventListener(`mouseleave`, buttonheros1)

function buttonheros(){
    adversaires.classList.add(`adversaires`) 
}
 function buttonheros1(){
    adversaires.classList.remove(`adversaires`) 
}

//on va poursuivre avec l`effet soulignee quand le curseur survole les menus//

let acceuil = document.getElementsByClassName('nouveau')

for (let i = 0; i < acceuil.length; i++) {
        acceuil[i].addEventListener('mouseover', () => {
                acceuil[i].classList.add('menus')
        })

        acceuil[i].addEventListener('mouseleave', () => {
                acceuil[i].classList.remove('menus')
        })
}


// // faire un effet hover sur les icones dans le footer de la page web//
// // On va proceder comme on a fait pour les boutons adversaires//

let logoicones = document.getElementsByClassName('logoicone')

for (let i = 0; i < logoicones.length; i++) {
        logoicones[i].addEventListener('mouseover', () => {
                logoicones[i].classList.add('logoicones')
        })

        logoicones[i].addEventListener('mouseleave', () => {
                logoicones[i].classList.remove('logoicones')
        })
}


// Faire le fade in pour le mot MARVEL//
//let fades = document.getElementById(fade)

    //$(`fade`).click(function(){
        //$(`fade`).fadein(2000);
        
    //});
// fade in sur le logo
let logo = document.getElementById("marvel1")
logo.classList.add('move')

console.log(logo);

// fade in sur le h1
let logo1 = document.querySelectorAll("h1")

console.log(logo1);

for (let i = 0; i < logo1.length; i++) {
    logo1[i].classList.add('move1')
}

// logo1.classList.add('move1')

console.log(logo1);

// faire le scroll de l`image
const spiderman = document.getElementsByClassName("spider")[0]
const spiderman1 = document.getElementsByClassName("spider1")[0]
let my = [0,]

if (window.pageYOffset>=1000) {
    console.log("lol");
    let spider =document.querySelector(".spider");
    spider.style.opacity = "0";
}

//  window.addEventListener('scroll', () =>{
//      my.push(window.scrollY)
//      console.log(my);
//     if(my[0]< 2000){
//         //  spider.innerHTML = `<img src="../img/home2.png" alt="">`;
//         //  spider.style.opacity ="70%";
//          spider1.style.opacity = ``;
//         } else{
//             spider.innerHTML = ``;
//              spider1.innerHTML = `img src="../img/img5.png" alt="">` ;
//              spider1.style.opacity =`70%`;
//      }
//    my.shift()

//  });

//Afin de signaler a l`utilisateur ou bien pour confirmer que les inforfations sont envoyer.
// on va utiliser du pop up box 

let popup = document.getElementById("popop")
let body = document.querySelector("#spiderman")
let bouton =document.getElementsByClassName("form-button")


function opens(){
    popup.classList.add("open");
    alert('Bravo! Vous avez reussi ')
    // body.style.visibility ="hidden";
    // body.style.background = "red";
    console.log(1);

}
function closes(){
    popup.classList.remove("open");
    body.style.visibility ="visible"
}
  
bouton[0].addEventListener("click",opens)