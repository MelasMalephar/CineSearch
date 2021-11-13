async function load() {
  var txt = document.querySelector('#Movie-name').value;
  var str = "https://imdb8.p.rapidapi.com/title/find?q=";
  str += txt;
        const response  = await fetch( str  , {
  	"method": "GET",
  	"headers": {
  		"x-rapidapi-host": "imdb8.p.rapidapi.com",
  		"x-rapidapi-key": "375b2246aamsh93066013e6969ddp19b88ejsn3c709bc72951"//"01aa8e97aemsh225de66ae41be67p18cc8bjsna54c3d59a7a3"
  	}});
      const response_2 = await response.json();
      var index = 0;
      var count = 0;
      while ((index < 9 && count < 11) || count+index < 20) {
        var a = index+count;
      if(response_2["results"][a]["titleType"]==="movie")
        {
          try {
          index+= 1;

          document.getElementById('a'+(index)).href = "https://www.imdb.com"+response_2["results"][a]["id"]
          document.getElementById('t'+(index)).textContent =   response_2["results"][a]["title"]
          document.getElementById('r'+ (index)).textContent =   response_2["results"][a]["year"]
          document.getElementById('g'+ (index)).textContent =   response_2["results"][a]["titleType"]
          document.getElementById('im'+ (index)).src= response_2["results"][a]["image"]["url"]

        }  catch (e) {
            console.error(e);

          } finally {
            continue;
          }}
      else {
        count+=1;
      }
    }
  }



async function TopR() {
        const response  = await fetch(
        'https://imdb8.p.rapidapi.com/title/get-top-rated-movies', {
      	"method": "GET",
      	"headers": {
      		"x-rapidapi-host": "imdb8.p.rapidapi.com",
      		"x-rapidapi-key":"375b2246aamsh93066013e6969ddp19b88ejsn3c709bc72951"// "01aa8e97aemsh225de66ae41be67p18cc8bjsna54c3d59a7a3"
      	}
      });
      const response_1 = await response.json();
     return response_1;

    }

  async function MostP() {
            const response  = await fetch("https://imdb8.p.rapidapi.com/title/get-most-popular-movies", {
	          "method": "GET",
	          "headers": {
		        "x-rapidapi-host": "imdb8.p.rapidapi.com",
		        "x-rapidapi-key": "375b2246aamsh93066013e6969ddp19b88ejsn3c709bc72951"//"01aa8e97aemsh225de66ae41be67p18cc8bjsna54c3d59a7a3"
          	}
          });
          const response_3 = await response.json();
         return response_3;

        }

async function Upcom() {
            const response  = await fetch("https://imdb8.p.rapidapi.com/title/get-coming-soon-movies", {
	          "method": "GET",
	          "headers": {
		        "x-rapidapi-host": "imdb8.p.rapidapi.com",
		        "x-rapidapi-key":"375b2246aamsh93066013e6969ddp19b88ejsn3c709bc72951" //"01aa8e97aemsh225de66ae41be67p18cc8bjsna54c3d59a7a3
          	}
          });
          const response_4 = await response.json();
         return response_4;

        }



  async function details(val)  {
  if (val == 0) {
    id = await TopR();
  } else {
    if(val == 1) {
      id = await MostP();
    }
    else {
      id = await Upcom();
    }
  }
  console.log(id);
  var index = 0;
  var count = 0;
  var a;
  var idd;
    while (index < 9 || a < 5 ) {
    var a = index+count;
    console.log(a);
      if(val == 1) idd= id[a];
      else idd = id[a]["id"] ;
      idd = idd.substring(7, 16);
      // console.log(idd);
      var str = "https://imdb8.p.rapidapi.com/title/get-overview-details?tconst=";
      str += idd;
      const response  = await fetch(str, {
    	"method": "GET",
    	"headers": {
    		"x-rapidapi-host": "imdb8.p.rapidapi.com",
        //"x-rapidapi-key": "42b335afe4msh059047f6dd934fcp1ae100jsnd461e06d483c"
    		"x-rapidapi-key": "37497024c5msh312b4129e555d7ep143315jsn5e0b10be98bc"
    	}
    });
    const dt = await response.json();
    if(dt["title"]["titleType"]=="movie"){
      index+=1;
      try {
        if(val != 1){document.getElementById('a'+(index)).href  = "https://www.imdb.com/title/"+idd}
        else { document.getElementById('a'+(index)).href  = "https://www.imdb.com/title/"+idd}
        document.getElementById('t'+(index)).textContent = dt["title"]["title"]
        document.getElementById('r'+ (index)).textContent = dt["ratings"]["rating"]
        document.getElementById('g'+ (index)).textContent = dt["genres"][0]+ " " + (dt["genres"][1] ? ", " + dt["genres"][1]:"  ")
        document.getElementById('im'+ (index)).src  = dt["title"]["image"]["url"]
          } catch (e) {
            console.error(e);
          } finally {
            continue;
          }
        }
        else{
        count+=1;}
      }
}

details(1);
// window.addEventListener("load",   details(1))



var Dropdown = document.getElementById("option")
 Dropdown.addEventListener("change", function (f) {
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
