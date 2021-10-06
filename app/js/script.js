const btnHamburger= document.querySelector("#btnHamburger");
const header = document.querySelector('.header');
const overlay =document.querySelector('.overlay');
const fades =document.querySelectorAll('.has-fade');
const body =document.querySelector('body');


btnHamburger.addEventListener("click", () =>{

    if(header.classList.contains("open")){//closing menu 
        header.classList.remove("open");
        body.classList.remove('lock');
        fades.forEach((element) => {
            element.classList.add('fade-out');
            element.classList.remove('fade-in');

        })
       
    }
    else{//open menu 
        header.classList.add("open");
        body.classList.add('lock');
        fades.forEach( (element) =>{
            element.classList.add('fade-in');
            element.classList.remove('fade-out');
        }
        )
       

    }

})