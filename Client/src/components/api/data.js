let ApiColor = "";
function trimUrl(url) {
  const parsedUrl = new URL(url);
  return parsedUrl.hostname + (parsedUrl.port ? ":" + parsedUrl.port : "");
}
async function getColor() {
 
  const currentUrl = trimUrl(window.location.href);
  let response = await fetch("https://psyrealestate.in/client/" + currentUrl);
  const clientData = await response.json();
  

  response = await fetch("https://psyrealestate.in/color");
  const colorsData = await response.json();
  

  const filteredResults = colorsData.filter((value) => {
    // console.log(value.clientId);
    return value.clientId == clientData._id;
  });
if(filteredResults.length>0){

  ApiColor = filteredResults[filteredResults.length - 1].color;
}else{
  ApiColor="#000"
}
  
}
getColor();

export { ApiColor };
