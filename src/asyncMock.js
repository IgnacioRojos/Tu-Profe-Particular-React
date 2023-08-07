const profes = [
    {nombre:"Sergio",materia: "matematicas",provincia:"cordoba",id:"0"},
    {nombre:"Horacio",materia:"matematicas",provincia:"Buenos aires",id:"1"},
    {nombre:"José",materia:"matematicas",provincia:"salta",id:"2"},
    {nombre:"Andres",materia:"lengua",provincia:"misiones",id:"3"},
    {nombre:"Silvina",materia:"lengua",provincia:"la pampa",id:"4"},
    {nombre:"Nelson",materia:"lengua",provincia:"chubut",id:"5"},
    {nombre:"Sara",materia:"quimica",provincia:"santiago del estero",id:"6"},
    {nombre:"Emiliano",materia:"quimica",provincia:"san juan",id:"7"},
    {nombre:"Malena",materia:"quimica",provincia:"santa fe",id:"8"},
    {nombre:"Laura",materia:"universitarios",provincia:"cordoba",id:"9"},
    {nombre:"Magali",materia:"quimica",provincia:"buenos aires",id:"10"},
    {nombre:"Francisco",materia:"universitario",provincia:"san luis",id:"11"},
    {nombre:"Marcos",materia:"matematica",provincia:"misiones",id:"12"},
    {nombre:"Miguel",materia:"lengua",provincia:"santiago del estero",id:"13"},
    {nombre:"Martin",materia:"matematica",provincia:"cordoba",id:"14"},

]


export const getProfes = ()=>{
    return new Promise((resolve)=>{
        setTimeout(() => {
            resolve(profes)
        }, 500);
    })
}


export const getProfesId = async (profeId)=>{
    return new Promise((resolve)=>{
        setTimeout (() => {
            resolve(profes.find(prof => parseInt(prof.id) == profeId))
        }, 500);

    })
   
}



