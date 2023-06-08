const p = document.getElementById("p");
const special = /[\\[{().+*?|^$]/g;

function search(){
    let input = document.getElementById("input").value;

    if(input !== ""){
        if(special.test(input)) input = input.replace(special, "\\$&");
        let regExp = new RegExp(input, "gi");
        p.innerHTML = (p.textContent).replace(regExp, "<mark>$&</mark>");
    }
}