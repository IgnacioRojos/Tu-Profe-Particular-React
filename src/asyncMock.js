const profes = [
    {nombre:"Sergio",materia: "Matemática",provincia:"cordoba",id:"0"},
    {nombre:"Horacio",materia:"Matemática",provincia:"Buenos aires",id:"1"},
    {nombre:"José",materia:"Matemática",provincia:"salta",id:"2"},
    {nombre:"Andres",materia:"Inglés",provincia:"misiones",id:"3"},
    {nombre:"Silvina",materia:"Inglés",provincia:"la pampa",id:"4"},
    {nombre:"Nelson",materia:"Inglés",provincia:"chubut",id:"5"},
    {nombre:"Sara",materia:"Física",provincia:"santiago del estero",id:"6"},
    {nombre:"Emiliano",materia:"Física",provincia:"san juan",id:"7"},
    {nombre:"Malena",materia:"Física",provincia:"santa fe",id:"8"},
    {nombre:"Laura",materia:"Física",provincia:"cordoba",id:"9"},
    {nombre:"Lourdes",materia:"Historia",provincia:"buenos aires",id:"10"},
    {nombre:"Francisco",materia:"Historia",provincia:"san luis",id:"11"},
    {nombre:"Marcos",materia:"Matemática",provincia:"misiones",id:"12"},
    {nombre:"Miguel",materia:"Inglés",provincia:"santiago del estero",id:"13"},
    {nombre:"Martin",materia:"Matemática",provincia:"cordoba",id:"14"},

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






