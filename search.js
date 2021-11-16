async function dat() {
  var str = "https://imdb8.p.rapidapi.com/title/find?q=";
  var txt = sessionStorage.getItem('text');
  str += txt;
        const response  = await fetch( str  , {
    "method": "GET",
    "headers": {
      "x-rapidapi-host": "imdb8.p.rapidapi.com",
      "x-rapidapi-key": "42b335afe4msh059047f6dd934fcp1ae100jsnd461e06d483c"//375b2246aamsh93066013e6969ddp19b88ejsn3c709bc72951"//"01aa8e97aemsh225de66ae41be67p18cc8bjsna54c3d59a7a3"
    }});
      let response_2 = await response.json();
  try {
  let movieId = response_2["results"]
  var i=0
  console.log(movieId);
  objectLenght = Object.keys(movieId).length;
  console.log(objectLenght);
  var a = document.getElementById('core')
  a.innerHTML =`  <!-- code will be added here -->`;
  while(i<objectLenght)
  {
    if(movieId[i]["titleType"]=="movie"){
  let data = movieId[i++]
  let output =`
      <a href="https://www.imdb.com${data["id"]}" target="_blank"><div class="new-card">
      <div class="card-image1">
      <img src="${data["image"]["url"]}" alt="Movie id"/>
      </div>
      <div class="card-content">
        <p class="card-name" >
          ${data["title"]}
        </p>
        <div class="card-info">
          <p class="genre" >Type : ${data["titleType"]}</p>
          <p class="year" >${data["year"]}</p>
        </div>
      </div>
    </div></a>
    `;
    a.innerHTML += output;
  }
  else i++;
}
}catch (e) {
  console.error(e);
}
finally {
  let button= `
          <a href="index.html">
          <img id="image" src="return.jpg" alt=return></a>
          `;
      a.innerHTML +=button;
}
}

window.addEventListener("load",   dat)
