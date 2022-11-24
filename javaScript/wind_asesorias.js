//Apuntadores
const detail = document.getElementsByClassName('vr_detalles');
const modifAsesoria = document.querySelector('.oper_assero');

const btnAcepmodif = document.querySelector('#btAgreMod');
const btnCancelmodif = document.querySelector('#btCanMod');
const winAdd = document.querySelector('.add_student');
const winAddCerrar = document.querySelector('#btnCloseBusc');

const opciAdd = document.querySelector('.addEstu');
const opciElim = document.querySelector('.elimEstu');

const diagOpciAdd = document.querySelector('.us_Cadd');
const diagOpciElim = document.querySelector('.us_Cdelete')

const confdiagOpciAdd = document.querySelector('.us_add');
const confdiagOpciElim = document.querySelector('.us_delete');

const operAdd = document.querySelector('#addAlumno');
const canOperAdd = document.querySelector("#canceladdAlumno");

const operDelete = document.querySelector('#deleteAlumno');
const canOperDelete = document.querySelector('#cancelDeleteAlumno');

const msjAgregado = document.querySelector('#btnAcepAdd');
const msjEliminado = document.querySelector('#btnAceptElim');
//Eventos
for (let i =0; i<detail.length; i++)
detail[i].addEventListener("click",function(){
    modifAsesoria.classList.toggle('inactivo'); 
    console.log(i);
});
btnAcepmodif.addEventListener("click",WinDetalle_Open_Add);
btnCancelmodif.addEventListener("click",WinDetalle_Cancel);
winAddCerrar.addEventListener("click",closeWinAdd);

opciAdd.addEventListener("click",dialogoAgregarAlumnos);
opciElim.addEventListener("click",dialogoEliminarAlumnos);

operAdd.addEventListener("click",AgregarAlumno);
canOperAdd.addEventListener("click",CAgregarAlumno);

operDelete.addEventListener("click",EliminarAlumno);
canOperDelete.addEventListener("click",CEliminarAlumno);

msjAgregado.addEventListener("click",cerrarMsjFinalAdd);
msjEliminado.addEventListener("click",cerrarMsjFinalDelete);

//funciones
function closeWinAdd(){
    winAdd.classList.toggle('inactivo');
    modifAsesoria.classList.toggle('inactivo');
}
/* function WinDetalle(){
modifAsesoria.classList.toggle('inactivo');
console.log("Detalle")
} */

function WinDetalle_Open_Add(){
    modifAsesoria.classList.toggle('inactivo');
    winAdd.classList.toggle('inactivo');
}

function WinDetalle_Cancel(){
    modifAsesoria.classList.toggle('inactivo');
}

function dialogoAgregarAlumnos(){
    diagOpciAdd.classList.toggle('inactivo');
    winAdd.classList.toggle('inactivo');
}

function dialogoEliminarAlumnos(){
    diagOpciElim.classList.toggle('inactivo');
    modifAsesoria.classList.toggle('inactivo');
}



function AgregarAlumno(){
console.log("Alumno Agregado");
diagOpciAdd.classList.toggle('inactivo');
confdiagOpciAdd.classList.toggle('inactivo');
}


function CAgregarAlumno(){
    diagOpciAdd.classList.toggle('inactivo');
}



function EliminarAlumno(){
    console.log("Alumno Eliminado");
    diagOpciElim.classList.toggle('inactivo');
    confdiagOpciElim.classList.toggle('inactivo');
}

function CEliminarAlumno(){
    diagOpciElim.classList.toggle('inactivo');
}
function cerrarMsjFinalAdd(){
    confdiagOpciAdd.classList.toggle('inactivo');
}
function cerrarMsjFinalDelete(){
    confdiagOpciElim.classList.toggle('inactivo');
}