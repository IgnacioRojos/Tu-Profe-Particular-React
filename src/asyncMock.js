const profes = [
    {nombre:"Sergio",materia: "1",provincia:"cordoba",id:"0"},
    {nombre:"Horacio",materia:"1",provincia:"Buenos aires",id:"1"},
    {nombre:"José",materia:"1",provincia:"salta",id:"2"},
    {nombre:"Andres",materia:"2",provincia:"misiones",id:"3"},
    {nombre:"Silvina",materia:"2",provincia:"la pampa",id:"4"},
    {nombre:"Nelson",materia:"2",provincia:"chubut",id:"5"},
    {nombre:"Sara",materia:"3",provincia:"santiago del estero",id:"6"},
    {nombre:"Emiliano",materia:"3",provincia:"san juan",id:"7"},
    {nombre:"Malena",materia:"3",provincia:"santa fe",id:"8"},
    {nombre:"Laura",materia:"3",provincia:"cordoba",id:"9"},
    {nombre:"Magali",materia:"4",provincia:"buenos aires",id:"10"},
    {nombre:"Francisco",materia:"4",provincia:"san luis",id:"11"},
    {nombre:"Marcos",materia:"1",provincia:"misiones",id:"12"},
    {nombre:"Miguel",materia:"2",provincia:"santiago del estero",id:"13"},
    {nombre:"Martin",materia:"1",provincia:"cordoba",id:"14"},

]


export const getProfes = ()=>{
    return new Promise((resolve)=>{
        setTimeout(() => {
            resolve(profes)
        }, 5000);
    })
}


export const getProfesId = async (profeId)=>{
    return new Promise((resolve)=>{
        setTimeout (() => {
            resolve(profes.find(prof => prof.id == profeId))
        }, 5000);

    })
   
}


export const getProfesCategoria = async(profeCategoria)=>{
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(profes.find(prof => prof.materia === profeCategoria))
        },5000)
    })



}






