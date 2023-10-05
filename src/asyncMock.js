const profes = [
    {nombre:"Sergio",materia: "100",provincia:"cordoba",id:"0"},
    {nombre:"Horacio",materia:"100",provincia:"Buenos aires",id:"1"},
    {nombre:"José",materia:"100",provincia:"salta",id:"2"},
    {nombre:"Andres",materia:"200",provincia:"misiones",id:"3"},
    {nombre:"Silvina",materia:"200",provincia:"la pampa",id:"4"},
    {nombre:"Nelson",materia:"200",provincia:"chubut",id:"5"},
    {nombre:"Sara",materia:"300",provincia:"santiago del estero",id:"6"},
    {nombre:"Emiliano",materia:"300",provincia:"san juan",id:"7"},
    {nombre:"Malena",materia:"300",provincia:"santa fe",id:"8"},
    {nombre:"Laura",materia:"300",provincia:"cordoba",id:"9"},
    {nombre:"Magali",materia:"400",provincia:"buenos aires",id:"10"},
    {nombre:"Francisco",materia:"400",provincia:"san luis",id:"11"},
    {nombre:"Marcos",materia:"100",provincia:"misiones",id:"12"},
    {nombre:"Miguel",materia:"200",provincia:"santiago del estero",id:"13"},
    {nombre:"Martin",materia:"100",provincia:"cordoba",id:"14"},

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
            const filtro = profes.filter(prof => prof.materia === parseInt(profeCategoria))
            resolve(filtro)
        },5000)
    })



}






