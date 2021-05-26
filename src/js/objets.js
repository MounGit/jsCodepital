import {traitIndent, traitUnsave, trait404, traitAzma, traitSynt} from "./main.js"
let doc = {
    nom: "doc",
    argent: 0,
    cabinet: [],
    diagnostique(patient) {

        if (patient.maladie == "mal indenté") {
            console.log(`La maladie de ${patient.nom} est ${patient.maladie} le traitement prescrit est ${traitIndent.nom}`);
            return 1
        } else if (patient.maladie == "unsave") {
            console.log(`La maladie de ${patient.nom} est ${patient.maladie} le traitement prescrit est ${traitUnsave.nom}`);
            return 2
        } else if (patient.maladie == 404) {
            console.log(`La maladie de ${patient.nom} est ${patient.maladie} le traitement prescrit est ${trait404.nom}`);
            return 3
        } else if (patient.maladie == "azmatique") {
            console.log(`La maladie de ${patient.nom} est ${patient.maladie} le traitement prescrit est ${traitAzma.nom}`);
            return 4
        } else if (patient.maladie == "syntaxError") {
            console.log(`La maladie de ${patient.nom} est ${patient.maladie} le traitement prescrit est ${traitSynt.nom}`);
            return 5
        } else {
            console.log("vérifie l'ortho");
        };

    },


    patientIn(patient, endroit){
        this.cabinet.push(patient);
        console.log()
        endroit.lieu.splice(endroit.lieu.indexOf(patient), 1);
        console.log(`${patient.nom} est dans le cabinet`);
    },
    patientOut(patient, endroit){
        endroit.lieu.push(patient);
        this.cabinet.splice(this.cabinet.indexOf(patient),1);
        console.log(`${patient.nom} sort du cabinet`);
        console.log(`${patient.nom} est à la ${endroit.nom}`);
    },
};


let pharmacie = {
    nom : "pharmacie",
    lieu : [],
    argent: 0,
};

let cimetiere = {
    nom : "cimetière",
    lieu : [],
    etat : "mort",
};

let maison = {
    nom : "maison",
    lieu : [],
    etat : "en bonne santé",
};

let attente = {
    nom : "salle d'attente",
    lieu : [],
}



export { doc, pharmacie, cimetiere, maison, attente };