const tareaInput = document.querySelector("#agregar")
const btnAgregar = document.querySelector("#btn")
const btnReiniciar = document.querySelector("#btn2")
const listaDeTarea = document.querySelector("#listaTarea")
const idDeTarea = document.querySelector("#idTarea")
const spanTotalTarea = document.querySelector("#spanTotal")
const totalRealizadas = document.querySelector("#totalRealizada")


const tareas = []

const eliminarTarea = function(idTarea){
    const posicion = tareas.findIndex ((e) => e.id == idTarea);

    if (posicion >= 0) {
        tareas.splice(posicion,1);
        renderizarLista();
    }

}

const marcaRealizada = function(idTarea){
    const posicion = tareas.findIndex ((e) => e.id == idTarea);
    
if(tareas[posicion].realizada ==true )
    tareas[posicion].realizada = false;
    
 else if(tareas[posicion].realizada == false)
    tareas[posicion].realizada = true;

renderizarLista();
}

const renderizarLista = function(){

        let textLista="";
        let idLista ="";
        for (const tarea of tareas) {
        if(tarea.realizada){
            statusCheck = "checked";
        } else{
            statusCheck = "";
        }
            textLista += `
                <li class="lista2"> ${tarea.nombre}
                <div>
                <input class="check" type="checkbox" ${statusCheck} onclick="marcaRealizada(${tarea.id})">
                <button class="btnX"  onclick="eliminarTarea(${tarea.id});">X</button></div</li>`
    
            idLista += `<li class="idlista">${tarea.id}</li>`     
        }

        idDeTarea.innerHTML = idLista;
        listaDeTarea.innerHTML = textLista;
        spanTotalTarea.innerHTML = tareas.length;


        const marcaTareaRealizadas = tareas.filter((e) => e.realizada == true);
        console.log(marcaTareaRealizadas);

    totalRealizadas.innerHTML = marcaTareaRealizadas.length;

        
        input.reset();
}

let contId = 1257;

btnAgregar.addEventListener("click", () => {
const nuevaTarea = tareaInput.value
const id = contId;
const realizada = false;

const arregloTarea = {
    id: id,
    nombre: nuevaTarea,
    realizada: realizada
}

let agregaTarea = tareaInput.value
if(agregaTarea == ""){
    alert("No has agregado una tarea.")
}else{
    tareas.push(arregloTarea)
    contId = contId+13;
    renderizarLista();
}


})


//boton reiniciar//
btnReiniciar.addEventListener("click", () => {
    document.location.reload();
})