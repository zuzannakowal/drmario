"use stric;";
var debug = true;

function debugMe(...debugText){

    if(debug == true ){
       // document.write("<span class='debug'>" + debugText + "</span><br>");
       console.log(...debugText);
    }
}

class Plansza{
    constructor(planszaDiv){
        this.planszaDiv = document.getElementById(planszaDiv)
    }
    tabela(){
        var html = `<table>`
        for (var i = 0; i < 16; i++){
            html += `<tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>`
        }
        html += `</table>`
        this.planszaDiv.innerHTML = html
    }
}

function runMe(planszaDiv){
    plansza = new Plansza(planszaDiv)
    plansza.tabela()
}