

let ApiColor=''

async function getColor(){
    let result = await fetch('https://psyrealestate.in/color')
    result = await result.json()
    ApiColor=result[result.length-1].color
  }
  getColor() 

export {ApiColor}