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
        debugMe("rysuje plansze")
    }
}

class Tabletka{
    constructor(tabletkaDiv){
        this.tabletkaDiv = document.getElementById(tabletkaDiv)
    }
    losujTabletke(){
        let random1 = Math.floor(3 * Math.random)
        let random2 = Math.floor(3 * Math.random)
        let html = ""
        if (random1 = 0){
            html += `<div class="blue" class="pastylka"></div>`
        }else if (random1 = 1){
            html += `<div class="yellow" class="pastylka"></div>`
        } else {
            html += `<div class="red" class="pastylka"></div>`
        }
        debugMe("rysuje 1 kolor")
        if (random2 = 0){
            html += `<div class="blue" class="pastylka"></div>`
        }else if (random2 = 1){
            html += `<div class="yellow" class="pastylka"></div>`
        } else {
            html += `<div class="red" class="pastylka"></div>`
        }
        debugMe("rysuje 2 kolor")
        this.tabletkaDiv.innerHTML = html
        debugMe("rysuje tabletke")
    }
    usunTabletke(){
        let html = ``
        this.tabletkaDiv.innerHTML = html
    }
}

class Malpa{
    constructor(latajacyDiv){
        this.latajacyDiv = document.getElementById(latajacyDiv)
        this.a = Math.PI / 2
    }
    obrocTabletke(){
        let x = 90
        let y = 100
        let r = 80

        let ox = x + r * Math.sin(this.a)
        let oy = y + r * Math.cos(this.a)

        this.latajacyDiv.style.left = ox + "px";
        this.latajacyDiv.style.top = oy + "px";
        this.latajacyDiv.innerHTML = `obracam a: ${this.a} x:${ox} y:${oy}`;
        debugMe("obracam tabletke", this.a)
        //debugMe(a,a*57.2)
        /*this.latajacyDiv.style.transform = "rotate("+parseInt(a*2*180/Math.PI)+"deg)";*/
    }
    async rzucTabletke(){
        let delta = Math.PI/10;
        let krok = 0;
        let that=this
        var cokolwiek = await new Promise(function(resolve){
            debugMe("wchodze do promise")
            let timer = setInterval(function() {
                that.a = Math.PI/2 + krok * delta;
                krok++;
                that.obrocTabletke()
                if (krok > 10){
                    clearInterval(timer)
                    resolve(null)
                    debugMe("opuszczam promise")
                }
            }, 2000);
        })
        debugMe("wyszedlem")
    }
}

async function runMe(planszaDiv, tabletkaDiv, latajacyDiv){
    plansza = new Plansza(planszaDiv)
    plansza.tabela()
    tabletka = new Tabletka(tabletkaDiv)
    tabletka.losujTabletke()
    malpa = new Malpa(latajacyDiv)
    malpa.rzucTabletke()
    //tabletka.usunTabletke()
}