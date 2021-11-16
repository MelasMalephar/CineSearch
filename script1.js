api = {"method": "GET",
          "headers": {
            "x-rapidapi-host": "imdb8.p.rapidapi.com",
            // "x-rapidapi-key": "42b335afe4msh059047f6dd934fcp1ae100jsnd461e06d483c"//"01aa8e97aemsh225de66ae41be67p18cc8bjsna54c3d59a7a3"
            "x-rapidapi-key": "375b2246aamsh93066013e6969ddp19b88ejsn3c709bc72951"
          }}

 function load() {
  var txt = document.querySelector('#Movie-name').value;
  if(txt=='') return 0;
     sessionStorage.setItem('text', txt)
      window.location = 'search.html';
  }


async function TopR() {
        const response  = await fetch(
        'https://imdb8.p.rapidapi.com/title/get-top-rated-movies', api);
      const response_1 = await response.json();
     return response_1;

    }

  async function MostP() {
          const response  = await fetch("https://imdb8.p.rapidapi.com/title/get-most-popular-movies", api);
          const response_3 = await response.json();
         return response_3;

        }

async function Upcom() {
            const response  = await fetch("https://imdb8.p.rapidapi.com/title/get-coming-soon-movies", api);
          const response_4 = await response.json();
         return response_4;

        }



  async function details(val)  {
    if (val == 0) {id = await TopR();}
    else {
      if(val == 1) {id = await MostP(); }
      else {id = await Upcom();}
         }
    try{
    var index = 0;
    var ct=0,limit=10;
    var idd;
        var a = document.getElementById('cott')
      a.innerHTML = `<!-- Nothing here-->`;
    while (index < limit )
    { if(val == 1) {idd= id[ct+index];}
      else {idd = id[ct+index]["id"] ;}
      idd = idd.substring(7, 16);
      console.log(idd);
      var str = "https://imdb8.p.rapidapi.com/title/get-overview-details?tconst=";
      str += idd;
      const response  = await fetch(str, api);
      const dt = await response.json();
      str ='';
      ct=ct+1;
      if(dt["title"]["titleType"]=="movie")
      {
        index+=1;
        let add=`
              <a  href="https://www.imdb.com/${idd}" target="_blank">
              <div class="new-card">
              <div class="image">
              <img  src="${dt["title"]["image"]["url"]}" alt="Movie id"/>
              </div>
              <div class="card-content">
              <p class="card-name" >${dt["title"]["title"]}
              </p>
              <div class="card-info">
              <p class="genre" id="g1">${dt["genres"][0]}  ${(dt["genres"][1] ? ", " + dt["genres"][1]:"  ")}</p>
              <p class="rating" id="r1">${dt["ratings"]["canRate"] ==false ?"N/A" :dt["ratings"]["rating"] }</p>
              </div>
              </div>
              </div></a>`;
        a.innerHTML += add;
        add =''
      }}
  }catch (e) {
    console.error(e);
  }
}


details(0);
// window.addEventListener("load",   details(1))



var Dropdown = document.getElementById("option")
 Dropdown.addEventListener("change", function () {
   if(Dropdown.value == "Popular"){
   var c = details(1); }
   else if (Dropdown.value == "Top Rated") { console.log("Top Rated");
      var c = details(0);
   }
   else {
      console.log("upcoming");
     var c = details(2);
   }
 });


document.body.addEventListener('keyup', function (e) {
if (e.keyCode == 13) {
  // Simulate clicking on the submit button.
  var c = load();
}
});
