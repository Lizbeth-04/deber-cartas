'use strict'

function Juego (apodo,Vidas,valorCartas){ 
    this.apodo=apodo;
     this.Vidas= Vidas;
    this.valCartas=valorCartas;

    this.restvidas = function(){
     this.Vidas= this.Vidas-1;
    }
    this.showApodo= function(){

     alert(`te quedan : "${ this.Vidas}vidas`);  
     } 

 
     this.updatenuevaVidas = function(){
      
         alert(`Su apodo es:  ${this.apodo}  y tiene: ${ this.Vidas}   vidas.`);
        }
 }
 let jugadorone= new jugador (promt("ingrese su apodo"));
 Number(prompt("ingresar la cantidad de vidas"));
Number(prompt("ingrese el valor de la carta"));
jugadorone.showApodo();
jugadorone.restvidas(Number(prompt("cuantas vidas perdio")));
jugadorone.showApodo();