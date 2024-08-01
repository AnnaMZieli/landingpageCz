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

    

    const myInsertText1 = 'Jako my hebe STANADARD możesz zbierać diamenty za każde jednorazowo wydane 25 zł z kartą my hebe w drogeriach lub po zalogowaniu na hebe.pl, w aplikacji.';
    const myInsertText2 = 'Każdy diament jest ważny 365 dni od daty jego zdobycia.';
    const myInsertText3 = 'Diamenty są zabierane z Twojego konta w przypadku anulacji zamówenia lub zwrotu produktów.';
    const myInsertText4 = 'Aktualną ilość i historię diamentów możesz sprawdzić na swoim koncie my hebe po zalogowaniu w aplikacji i na hebe.pl.';
    const myInsertText5 = 'Diamenty za zakupy naliczane są w ciągu 24 godzin od ich zrobienia. W przeciwnym razie skontaktuj się z nami.';
    const myInsertText6 = 'Tak, za zakupy produktów Hebe Partner naliczene są diamenty za każde jednorazowo wydane 25 zł z kartą my hebe w drogeriach lub po zalogowaniu na hebe.pl, w aplikacji.';
    const myInsertText7 = 'Po zebraniu 20 diamentów jako klient my hebe STANDARD, wymienimy je na status my hebe VIP. Status my hebe VIP jest ważny przez 12 miesięcy od momentu jego uzyskania.';
    const myInsertText8 = 'Jako my hebe STANADARD możesz zbierać diamenty za każde jednorazowo wydane 25 zł z kartą my hebe. Zdobycie 20 diamentów spowoduje, że zebrana pula zostanie wymieniona na status my hebe VIP.';
    const myInsertText9 = 'Po uzyskaniu statusu my hebe VIP rób zakupy i zbieraj diamenty, które możesz wymieniać na kupony. Im więcej diamentów tym więcej korzyści.';
    const myInsertText10 = 'Informację o dostępnych i aktywnych kuponach znajdziesz po zalogowaniu na swoje konto na hebe.pl lub aplikacji w zakładce Moje Kupony.';
    const myInsertText11 = 'Każdy kupon rabatowy posiada swój termin ważności, po jego upływie nie ma możliwości na jego realizację, a diamenty nie zostaną przywrócone do Twojej puli.';
    const myInsertText12 = 'W przypadku zwrotu lub anulacji zdobyte diamenty za zakupy zostaną odjęte z Twojej puli.';
    const myInsertText13 = 'W celu realizacji kuponu w drogerii należy okazać kartę my hebe. W przypadku zakupów online, aby móc wykorzystać kupon należy zalogować się na hebe.pl lub w aplikacji.';
    const myInsertText14 = 'Jeśli na Twoim kuponie nie ma informacji, że można zrealizować go na produkty Hebe Partner to znaczy, że kupon jest wyłączony na tą ofertę. ';
    const myInsertText15 = 'Nie można łączyć żadnych kuponów podczas jednej transakcji zarówno w na hebe.pl jak i w sklepach stacjonarnych. Obowiązuje zasada 1 transakcja = 1 kupon';
    const myInsertText16 = 'W celu przedłużenia statusu my hebe VIP należy w przeciągu 12 miesięcy zebrać 20 diamentów. Po uzyskaniu pełnej puli Twój status my hebe VIP zostanie przedłużony na okres kolejnych 12 miesięcy.';
    const myInsertText17 = 'Przedłużenie statusu my hebe VIP nie powoduje zabrania diamentów z Twojego konta.';

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
    const answear5Text = myInsertText6;

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
    const answear13Text = myInsertText12;

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