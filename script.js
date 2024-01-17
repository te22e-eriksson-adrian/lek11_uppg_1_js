const rubrik_ruta = document.querySelector("#rubrik");
const text_ruta = document.querySelector("#text");
const main = document.querySelector("main");
let array=[];
const nyckel = "artiklar";

function add_text(){
    let artikel ={
        rubrik:rubrik_ruta.value ,
        text:text_ruta.value
    }
    array.push(artikel);
    let json = JSON.stringify(array);
    window.localStorage.setItem(nyckel, json); 
    rita_artiklar(); 
}

function rita_artiklar(){
    main.innerHTML="";
    for (let i = 0; i < array.length; i++) {
        let art = document.createElement("article");
        let h2 = document.createElement("h2");
        let p = document.createElement("p");
        h2.textContent =array[i].rubrik;
        p.textContent =array[i].text;
        art.appendChild(h2);
        art.appendChild(p);
        main.appendChild(art);
    }
}

function read_from_ls(){
    let json = window.localStorage.getItem("nyckel");
    array = JSON.parse("json");
    console.log("get_local:\n",array);
}

function toggle_mode(){
    let articles = document.querySelectorAll("article");
    document.body.classList.toggle("dark");
    for (let index = 0; index < articles.length; index++) {
        articles[index].classList.toggle("dark");
    }
}