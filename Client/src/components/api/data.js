let ApiColor = "";

async function getColor() {
  function trimUrl(url) {
    const parsedUrl = new URL(url);
    return parsedUrl.hostname + (parsedUrl.port ? ":" + parsedUrl.port : "");
  }
  let currentUrl = window.location.href;
  currentUrl = trimUrl(currentUrl);
  let result2 = await fetch("https://psyrealestate.in/client/" + currentUrl);
  result2 = await result2.json();
  let result = await fetch("https://psyrealestate.in/color");
  result = await result.json();

  const filteredResults = result.filter((value) => {
    // console.log(value.clientId);
    return value.clientId == result2._id;
  });
  ApiColor = filteredResults[filteredResults.length - 1].color;
  console.log(ApiColor);
}
getColor();

export { ApiColor };
