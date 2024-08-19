const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");
const btn4 = document.getElementById("btn4");
const btn5 = document.getElementById("btn5");
const btn6 = document.getElementById("btn6");
const btn7 = document.getElementById("btn7");
const btn8 = document.getElementById("btn8");
const btn9 = document.getElementById("btn9");
const btn10 = document.getElementById("btn10");
const btn11 = document.getElementById("btn11");
const btn12 = document.getElementById("btn12");
const btn13 = document.getElementById("btn13");
const btn14 = document.getElementById("btn14");
const btn15 = document.getElementById("btn15");
const btn16 = document.getElementById("btn16");
const btn17 = document.getElementById("btn17");

const buttons = [btn1, btn2, btn3, btn4, btn5, btn6, btn7, btn8, btn9, btn10, btn11, btn12, btn13, btn14, btn15, btn16, btn17]

buttons.forEach(btn => {
    btn.style.backgroundImage = "url('https://www.hebe.pl/on/demandware.static/-/Library-Sites-HebeSharedLibrary/pl_PL/v1720742560624/landing-myhebe2/images/button_down.png')";
});

    

    const myInsertText1 = 'Jako my hebe STANADARD můžete sbírat diamanty za každých 25 kč utracených najednou s kartou my hebe  v drogeriích nebo po přihlášení na hebe.cz, v aplikaci.';
    const myInsertText2 = 'Každý diamant je platný 365 dní od dne získání.';
    const myInsertText3 = 'V případě zrušení objednávky nebo vrácení výrobku se z vašeho účtu odečtou diamanty.';
    const myInsertText4 = 'Svůj aktuální počet a historii diamantů si můžete zkontrolovat na svém účtu my hebe po přihlášení v aplikaci a na stránkách hebe.cz';
    const myInsertText5 = 'Diamanty za nákupy jsou účtovány do 24 hodin od nákupu. V opačném případě nás prosím kontaktujte.';
    const myInsertText6 = 'Ano, za nákupy produktů Hebe Partner vám budou připsány diamanty za každých 25 kč utracených najednou  s kartou my hebe v drogerii nebo po přihlášení na hebe.cz a v aplikaci.';
    const myInsertText7 = 'Jakmile jako zákazník my hebe STANDARD nasbíráte 20 diamantů, vyměníme vám je za status my hebe VIP. Status my hebe VIP je platný 12 měsíců od okamžiku jeho nabytí.';
    const myInsertText8 = 'Jako my hebe STANADARD můžete sbírat diamanty za každých 25 kč utracených najednou s kartou my hebe. Získáním 20 diamantů bude nasbíraný fond vyměněn za status my hebe VIP.';
    const myInsertText9 = 'Jakmile získáte VIP status, nakupujte a sbírejte diamanty, které můžete vyměnit za poukázky. Čím více diamantů nasbíráte, tím více výhod získáte.';
    const myInsertText10 = 'Informace o dostupných a aktivních kupónech najdete po přihlášení ke svému účtu na webu hebe.cz nebo v aplikaci v záložce Moje kupóny.';
    const myInsertText11 = 'Každý slevový kupón má datum vypršení platnosti, jakmile platnost kupónu vyprší, nemůžete jej uplatnit a diamanty vám nebudou vráceny do fondu.';
    const myInsertText12 = 'V případě vrácení nebo zrušení budou diamanty získané za nákupy odečteny z vašeho fondu.';
    const myInsertText13 = 'Pro uplatnění kupónu v drogerii je třeba předložit kartu my hebe. Při nákupu online se musíte pro uplatnění poukazu přihlásit na webu hebe.cz nebo v aplikaci.';
    const myInsertText14 = 'Pokud na kupónu není uvedeno, že jej lze uplatnit na produkty Hebe Partner, znamená to, že se na něj tato nabídka nevztahuje. ';
    const myInsertText15 = 'Během jedné transakce nelze kombinovat žádné kupóny, a to jak na stránkách hebe.cz, tak v kamenných obchodech. Platí pravidlo 1 transakce = 1 kupón.';
    const myInsertText16 = 'Abyste mohli prodloužit svůj status my hebe VIP, musíte během 12 měsíců nasbírat 20 diamantů. Jakmile nasbíráte celou částku, bude váš status my hebe VIP prodloužen o dalších 12 měsíců. ';
    const myInsertText17 = 'Obnovení statusu my hebe VIP neubírá diamanty z vašeho účtu.';

    function toggleAnswears(button, answearPlace, answearText) {
        // const isMobile = window.innerWidth <= 600
        if (answearPlace.innerHTML === answearText) {
            answearPlace.innerHTML = '';
            button.style.backgroundImage = "url('https://www.hebe.pl/on/demandware.static/-/Library-Sites-HebeSharedLibrary/pl_PL/v1720742560624/landing-myhebe2/images/button_down.png')"
        } else {
            answearPlace.innerHTML = answearText;
            button.style.backgroundImage = "url('https://www.hebe.pl/on/demandware.static/-/Library-Sites-HebeSharedLibrary/pl_PL/v1720742560624/landing-myhebe2/images/button_up.png')"
        }
    }

    const btnSH = document.getElementById("showHide")

    const qaSectors = [
        document.querySelector(".qaSector17"),
        document.querySelector(".qaSector16"),
        document.querySelector(".qaSector15"),
        document.querySelector(".qaSector14"),
        document.querySelector(".qaSector13"),
        document.querySelector(".qaSector12"),
        document.querySelector(".qaSector11"),
        document.querySelector(".qaSector10"),
        document.querySelector(".qaSector9"),
        document.querySelector(".qaSector8"),
        document.querySelector(".qaSector7"),
        document.querySelector(".qaSector6"),
        document.querySelector(".qaSector5")
    ];

    qaSectors.forEach(qa => qa.style.display = "none")


    function buttonSHClick() {
        if (btnSH.innerHTML === "Zobrazit více") {
            qaSectors.forEach(qa => qa.style.display = "flex");
            btnSH.innerHTML = "Ukažte méně";
        } else {
            qaSectors.forEach(qa => qa.style.display = "none");
            btnSH.innerHTML = "Zobrazit více";
        }
    }
    

function btn1Click(){
    const answear1Place = document.getElementById("answear1");
    const answear1Text = myInsertText1;

    toggleAnswears(btn1, answear1Place, answear1Text);
}

function btn2Click(){
    const answear2Place = document.getElementById("answear2");
    const answear2Text = myInsertText2;

    toggleAnswears(btn2, answear2Place, answear2Text);
}

function btn3Click(){
    const answear3Place = document.getElementById("answear3");
    const answear3Text = myInsertText3;

    toggleAnswears(btn3, answear3Place, answear3Text);
}

function btn4Click(){
    const answear4Place = document.getElementById("answear4");
    const answear4Text = myInsertText4;

    toggleAnswears(btn4, answear4Place, answear4Text);
}

function btn5Click(){
    const answear5Place = document.getElementById("answear5");
    const answear5Text = myInsertText5;

    toggleAnswears(btn5, answear5Place, answear5Text);
}

function btn6Click(){
    const answear6Place = document.getElementById("answear6");
    const answear6Text = myInsertText6;

    toggleAnswears(btn6, answear6Place, answear6Text);
}

function btn7Click(){
    const answear7Place = document.getElementById("answear7");
    const answear7Text = myInsertText7;

    toggleAnswears(btn7, answear7Place, answear7Text);
}

function btn8Click(){
    const answear8Place = document.getElementById("answear8");
    const answear8Text = myInsertText8;

    toggleAnswears(btn8, answear8Place, answear8Text);
}

function btn9Click(){
    const answear9Place = document.getElementById("answear9");
    const answear9Text = myInsertText9;

    toggleAnswears(btn9, answear9Place, answear9Text);
}

function btn10Click(){
    const answear10Place = document.getElementById("answear10");
    const answear10Text = myInsertText8;

    toggleAnswears(btn10, answear10Place, answear10Text);
}

function btn11Click(){
    const answear11Place = document.getElementById("answear11");
    const answear11Text = myInsertText11;

    toggleAnswears(btn11, answear11Place, answear11Text);
}

function btn12Click(){
    const answear12Place = document.getElementById("answear12");
    const answear12Text = myInsertText12;

    toggleAnswears(btn12, answear12Place, answear12Text);
}

function btn13Click(){
    const answear13Place = document.getElementById("answear13");
    const answear13Text = myInsertText13;

    toggleAnswears(btn13, answear13Place, answear13Text);
}

function btn14Click(){
    const answear14Place = document.getElementById("answear14");
    const answear14Text = myInsertText14;

    toggleAnswears(btn14, answear14Place, answear14Text);
}

function btn15Click(){
    const answear15Place = document.getElementById("answear15");
    const answear15Text = myInsertText15;

    toggleAnswears(btn15, answear15Place, answear15Text);
}

function btn16Click(){
    const answear16Place = document.getElementById("answear16");
    const answear16Text = myInsertText16;

    toggleAnswears(btn16, answear16Place, answear16Text);
}

function btn17Click(){
    const answear17Place = document.getElementById("answear17");
    const answear17Text = myInsertText17;

    toggleAnswears(btn17, answear17Place, answear17Text);
}