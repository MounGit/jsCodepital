import {Malades, Traitement} from "./classes.js";
import { doc, pharmacie, cimetiere, maison, attente } from "./objets.js";

let marcus = new Malades ("Marcus", "mal indenté", 100, [], "malade");
let optimus = new Malades ("Optimus", "unsave", 200, [], "malade");
let sangoku = new Malades ("Sangoku", 404, 80, [], "malade");
let darthVader = new Malades ("Darth Vader", "azmatique", 110, [], "malade");
let semicolon = new Malades ("Semicolon", "syntaxError", 60, [], "malade");


let traitIndent = new Traitement ("ctrl+maj+f", 60);
let traitUnsave = new Traitement ("saveOnFocusChange", 100);
let trait404 = new Traitement ("CheckLinkRelation", 35);
let traitAzma = new Traitement ("Ventoline", 40);
let traitSynt = new Traitement ("f12+doc", 20);
export {traitIndent, traitUnsave, trait404, traitAzma, traitSynt};


attente.lieu.push(marcus, optimus, sangoku, darthVader, semicolon);
// console.log(attente.lieu);
console.log(`Dans la ${attente.nom} il y a ${attente.lieu.length} personne(s)`);

doc.patientIn(marcus, attente);
marcus.paye(doc, 50, "la consultation");
doc.diagnostique(marcus);
doc.patientOut(marcus, pharmacie);
marcus.traitement(doc, pharmacie, "le traitement");

console.log(" ");
console.log(`Dans la ${attente.nom} il y a ${attente.lieu.length} personne(s)`);

doc.patientIn(optimus, attente);
optimus.paye(doc, 50, "la consultation");
doc.diagnostique(optimus);
doc.patientOut(optimus, pharmacie);
optimus.traitement(doc, pharmacie, "le traitement");

console.log(" ");
console.log(`Dans la ${attente.nom} il y a ${attente.lieu.length} personne(s)`);

doc.patientIn(sangoku, attente);
sangoku.paye(doc, 50, "la consultation");
doc.diagnostique(sangoku);
doc.patientOut(sangoku, pharmacie);
sangoku.traitement(doc, pharmacie, "le traitement");

console.log(" ");
console.log(`Dans la ${attente.nom} il y a ${attente.lieu.length} personne(s)`);

doc.patientIn(darthVader, attente);
darthVader.paye(doc, 50, "la consultation");
doc.diagnostique(darthVader);
doc.patientOut(darthVader, pharmacie);
darthVader.traitement(doc, pharmacie, "le traitement");

console.log(" ");
console.log(`Dans la ${attente.nom} il y a ${attente.lieu.length} personne(s)`);

doc.patientIn(semicolon, attente);
semicolon.paye(doc, 50, "la consultation");
doc.diagnostique(semicolon);
doc.patientOut(semicolon, pharmacie);
semicolon.traitement(doc, pharmacie, "le traitement");

console.log(" ");
console.log(`Dans la ${attente.nom} il y a ${attente.lieu.length} personne(s)`);
