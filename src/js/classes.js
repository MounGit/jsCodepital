import { trait404, traitAzma, traitIndent, traitSynt, traitUnsave } from "./main.js";
import { doc, pharmacie, cimetiere, maison, attente } from "./objets.js"
class Malades {
    constructor(nom, maladie, argent, poche, etatSante) {
        this.nom = nom;
        this.maladie = maladie;
        this.argent = argent;
        this.poche = poche;
        this.etatSante = etatSante;
        this.traitement = (docteur, service, nom) => {
            if(this.maladie == "mal indenté"){
                console.log(`${nom} coûte ${traitIndent.prix}€`)
                if(this.paye(service, traitIndent.prix, nom) == true){
                    maison.lieu.push(this);
                    service.lieu.splice(service.lieu.indexOf(this), 1);
                    console.log(`${this.nom} est ${maison.etat} il est maintenant à la ${maison.nom}`)
                }else{
                    cimetiere.lieu.push(this);
                    service.lieu.splice(service.lieu.indexOf(this), 1);
                    console.log(`${this.nom} est ${cimetiere.etat} il est maintenant au ${cimetiere.nom}`)
                };
            }else if(this.maladie == "unsave"){
                console.log(`${nom} coûte ${traitUnsave.prix}€`)
                if(this.paye(service, traitUnsave.prix, nom) == true){
                    maison.lieu.push(this);
                    service.lieu.splice(service.lieu.indexOf(this), 1);
                    console.log(`${this.nom} est ${maison.etat} il est maintenant à la ${maison.nom}`)
                }else{
                    cimetiere.lieu.push(this);
                    service.lieu.splice(service.lieu.indexOf(this), 1);
                    console.log(`${this.nom} est ${cimetiere.etat} il est maintenant au ${cimetiere.nom}`)
                };
            }else if(this.maladie == 404){
                console.log(`${nom} coûte ${trait404.prix}€`)
                if(this.paye(service, trait404.prix, nom) == true){
                    maison.lieu.push(this);
                    service.lieu.splice(service.lieu.indexOf(this), 1);
                    console.log(`${this.nom} est ${maison.etat} il est maintenant à la ${maison.nom}`)
                }else{
                    cimetiere.lieu.push(this);
                    service.lieu.splice(service.lieu.indexOf(this), 1);
                    console.log(`${this.nom} est ${cimetiere.etat} il est maintenant au ${cimetiere.nom}`)
                };
            }else if(this.maladie == "azmatique"){
                console.log(`${nom} coûte ${traitAzma.prix}€`)
                if(this.paye(service, traitAzma.prix, nom) == true){
                    maison.lieu.push(this);
                    service.lieu.splice(service.lieu.indexOf(this), 1);
                    console.log(`${this.nom} est ${maison.etat} il est maintenant à la ${maison.nom}`)
                }else{
                    cimetiere.lieu.push(this);
                    service.lieu.splice(service.lieu.indexOf(this), 1);
                    console.log(`${this.nom} est ${cimetiere.etat} il est maintenant au ${cimetiere.nom}`)
                };
            }else if( this.maladie == "syntaxError"){
                console.log(`${nom} coûte ${traitSynt.prix}€`)
                if(this.paye(service, traitSynt.prix, nom) == true){
                    maison.lieu.push(this);
                    service.lieu.splice(service.lieu.indexOf(this), 1);
                    console.log(`${this.nom} est ${maison.etat} il est maintenant à la ${maison.nom}`)
                }else{
                    cimetiere.lieu.push(this);
                    service.lieu.splice(service.lieu.indexOf(this), 1);
                    console.log(`${this.nom} est ${cimetiere.etat} il est maintenant au ${cimetiere.nom}`)
                };
            }else{
                console.log("Error");
            };
        };

        this.paye = (service, prix, nom) => {
            if (this.argent >= prix) {
                this.argent -= prix;
                service.argent += prix;
                console.log(`${this.nom} a payé ${nom} il lui reste ${this.argent}€`)
                return true
            }else{
                console.log(`${this.nom} n'a pas assez d'argent et ne peut pas payer ${nom}`)
                return false
            }
        };
    };
};

class Traitement{
    constructor(nom, prix){
        this.nom = nom;
        this.prix = prix;
    }
}
export { Malades, Traitement};