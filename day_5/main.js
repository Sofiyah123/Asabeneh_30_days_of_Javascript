import { countries } from "./countries.js";
import { webTechs } from "./webTech.js";
// for (let country of countries){
    // console.log(country)
    // }
    // console.log(countries)
// for (let webTech of webTechs){
//     console.log(webTech)
// }
    // question 4
    if(countries.includes('Ethiopia')){
        console.log('ETHIOPIA')
    }else{
        countries.push('Ethiopia')
        console.log(countries)
    }
    // question 5

     if(webTechs.includes('Sass')){
        console.log('Sass is a CSS preprocess')
    }else{
        webTechs.push('Sass')
        console.log(webTechs)
    }

    // question 6

    const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
    const backEnd = ['Node','Express', 'MongoDB']
    const fullStack = frontEnd.concat(backEnd)
    console.log(fullStack)


