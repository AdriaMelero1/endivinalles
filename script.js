const questions = [
    {
        questio: "Quin país té mes població?",
        respostaCorrecte: "La Xina",
        respostaIncorrecta: "Rusia"
    },
    {
        questio: "El primer astronauta a trepitjar la lluna?",
        respostaCorrecte: "Neil Amstrong",
        respostaIncorrecta: "Louis Amstrong"
    },
    {
        questio: "Quina part de la planta s'utilitza com a font d'amidó?",
        respostaCorrecte: "L'arrel",
        respostaIncorrecta: "La flor"
    },
    {
        questio: "Quina és la capital del Japó?",
        respostaCorrecte: "Tòquio",
        respostaIncorrecta: "Kioto"
    },   
    {
        questio: "Qui va escriure 'Don Quijote de la Manxa'?",
        respostaCorrecte: "Miguel de Cervantes",
        respostaIncorrecta: "Federico García Lorca"
    },
    {
        questio: "Quin gas és més abundant a l'atmosfera de la Terra?",
        respostaCorrecte: "Nitrogen",
        respostaIncorrecta: "Oxigen"
    },
    {
        questio: "Quin metall té l'element químic amb el símbol 'Fe'?",
        respostaCorrecte: "Ferro",
        respostaIncorrecta: "Plata"
    },
    {
        questio: "Quina és la llengua oficial d'Argentina?",
        respostaCorrecte: "Castellà",
        respostaIncorrecta: "Portuguès"
    },    
    {
        questio: "Quina és la ciutat més poblada del món?",
        respostaCorrecte: "Tokio",
        respostaIncorrecta: "Nova York"
    },        
    {
        questio: "Qui va pintar 'La Gioconda'?",
        respostaCorrecte: "Leonardo da Vinci",
        respostaIncorrecta: "Vincent van Gogh"
    }
];

let indexQuestioActual = 0;
let respostesCorrectes = 0;
let respostesIncorrectes = 0;

const questioProposada = document.getElementById("questioProposada");
const btnEsquerre = document.getElementById("btnEsquerre");
const btnDret = document.getElementById("btnDret");
const missatge = document.getElementById("missatge");
const btnReiniciar = document.getElementById("btnReiniciar");


function barrejaRespostes(correcta, incorrecta) {
    const respostes = [correcta, incorrecta];
    respostes.sort(() => Math.random() - 0.5);

    return respostes;
}


function mostraQuestio() {
    if (indexQuestioActual < questions.length) {
        const questioActual = questions[indexQuestioActual];
        questioProposada.textContent = questioActual.questio;

        const [barrejatCorrecte, barrejatIncorrecte] = barrejaRespostes(
            questioActual.respostaCorrecte, questioActual.respostaIncorrecta
        );

        btnEsquerre.textContent = barrejatCorrecte;
        btnDret.textContent = barrejatIncorrecte;
    } else {
        //Joc ha acabat
        if (respostesCorrectes === questions.length) {
            missatge.textContent = "Has guanyat! Has respost totes les questions correctament!";
        } else {
            missatge.textContent = `Joc acabat. Respostes Correctes: ${respostesCorrectes}
              Respostes incorrectes: ${respostesIncorrectes}`;
        }
        btnEsquerre.style.display = "none";
        btnDret.style.display = "none";
        btnReiniciar.style.display = "block";
    }
}

function comprovaResposta(respostaSeleccionada) {

    const questioActual = questions[indexQuestioActual];

    if (respostaSeleccionada === questioActual.respostaCorrecte) {
        respostesCorrectes++;
    } else {
        respostesIncorrectes++;
    }

    indexQuestioActual++;

    mostraQuestio();
}


btnEsquerre.addEventListener("click", () => comprovaResposta(btnEsquerre.textContent));
btnDret.addEventListener("click", () => comprovaResposta(btnDret.textContent));


btnReiniciar.addEventListener("click", () => {

    indexQuestioActual = 0;
    respostesCorrectes = 0;
    respostesIncorrectes = 0;
    missatge.textContent = "";
    btnEsquerre.style.display = "inline-block";
    btnDret.style.display = "inline-block";
    btnReiniciar.style.display = "none";

    mostraQuestio();
});

//Començar el joc

mostraQuestio();