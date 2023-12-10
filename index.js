//funciones:
//function square(number){
    //return number+number
//}
//Arros fuctions
//console.log(square(10))
  /*const divideByTwoque =(numero)=>{
    return numero /2 ;
  }
    function App(){
        const resultado=divideByTwoque(numero);
        
    }
    
  console.log(divideByTwoque(10))*/
  //OBJECTS
  /*const Student = {
    firstName: 'Mayra',
    lastName:'chumacero',
    age:'26',
    hubby:'escuchar musica'
  }
  console.log(Student)*/
 //Destructuring
 /*const person = {
  head:{
      eyes:'8',
      mouth:{
          teeth: '7',
          tongue:'4'
        }
      },
      body: {
        shoulders: '10',
        chest: '9',
        arms: '8.5',
        hands: '9',
        legs: '10'
      }
    };
    const{legs: mylegs, eyes,teeth,tongue,shoulders,chest,arms,hands,legs}= person;
    console.log('legs: ${myLegs}');
    console.log('eyes: ${myEyes}');*/


    //Plantaillas de cadena:
    /*const nombre="Mayra";
    const FirstName="chumacero";
    const lastName="vargas";
    const Age="26";
    const hubby="escuchar musica";
    console.log(`mi nombre es:${nombre}`);
    console.log(`nombre completo:${FirstName} ${lastName}`);
    console.log(`edad:${Age}`);
    console.log(`escuchar musica:${hubby}`);*/
    


    //Operator Ternary
    
/*const Edad = 25;
const Status = Edad >= 18 ? "Adulto" : "Menor";

console.log({Status});*/



//Modulos

// index.js
import {dates} from'./dates';
import {profession}from'./profession';

console.log('Datos personales:');
console.log(`Nombre: ${dates.name}`);
console.log(`Nombre completo: ${dates.firstName} ${dates.lastName}`);
console.log(`Edad: ${dates.age} años`);

console.log(dates);
console.log(profession);





    



  