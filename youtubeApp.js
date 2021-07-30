//data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAGFBMVEX+/v7t7e3////u7u74+Pj09PT7+/vz8/OGE4YcAAAE0UlEQVR4nO2dbXPjIAyEFfPi//+PL046KStqlfpMYsTu3NyHblPzFG5OAsnIAgqlbgLeeiu9bHgRvNjsJfAyeCt4UnohIAR6skihJdxKieFl8FbwIngJPXhgBC8Z3gpeBi+AJ+h9lnCxCJGChCQkIQlJSEIS9iLMzd4fCMFThDBQRWh4088hBq1IiFE5EqrIGylKaUKMvJEQI28k3Pcw8kbCm6hsAmcNPD1rkDGoWdv3VDYBD0RPr8tyMOipTAMh5Jx1id7BdbmclE3gP7yjhGIQyrvzJcu71ByelRGSkIQkJCEJSUjCCQnBvGGmoeiNbAIzjaPZhCY8mE0ghKAgRg8qEjW8BB5kExKbvWR4KtMwPAXRJwOGdXk00+A+DQlJSMJmwrdn/M2EwSAM75jD0gsGYfj0HF5slYL5YcI+qzSCpNWTDF4+xRPrgY0DTZrwHno+/zz/wh8qz699fUftyZf54+eeQe1Pn5Pl9UTtvX5e9TEcaOW9nHwL+pPOFB/nFp8eRU/Fx7lFrJaHI+Us+v9nZ1q2HN81oZBwfJFwfJFwfJFwfJFwfC0TxKU5//5t4yqH1XPmJM/80Duh3qfxJhKOLxKOLxKOLxKOr0kI4eDC4j3qvV3FYLa4dF3zpYZ3suLj3MIz4ePcIh05aFWnt5bX40S4/bR4IyzL3FTdgtFsY9TxLaqOD0/u9z1dx4cn91irh+sOB9qlvvRStQnTVdCSkIQkJCEJSfg7IZhmv4XVvX3lfgsM6RKo3YvdvT8MBj27vhTWl57R/TXbvd+imtH9NavOLSaoESYhCUlIQhL+PyGYPvY06jksQCrCwqsIC68iLD1NWHgVYeFVhGWT0h5hCNWuvrEtp7zc7LXvH8Zmr3Wga9VvYTYJD+i577fY4ldJKV/rXOVU3Vf6BHVt/msTSTi6SDi+SDi+SDi+SDi+Zui3qGpTXCmn6Ds/ZL+FA5FwfJFwfJFwfJFwfMU53hP16UF01RaX3nMLx8F3TmmC/DD47ih57GKk78NWlQy3d41YXo+uEWug6KmOksP3zOj60tIz75lRJ/elp0/u9z19oyUSQuGCywraN9QIgzcdITxQEYJ3aUL/q5SEJCThn/otjlbno9fh3jWrOr/qt0DCc5oaomH28P4wGIf3H1pNIzPUCJOQhCQkIQlJSMKNotjuUYQreIfvP1aE+/tS1t7T1lHy7VWEX18O2x00YN1Hgy204GH0lw96SJ/bPYy1caBIWBirvnfNnbZzixw9vycqr2v/cwvr93fUa380+y0ciITji4Tji4Tji4TjawZC5/U0d8J1dd2RkLNnOmG/hQeRcHyRcHyRcHyRcHyRcHw9zi08vyZqu2/Ae37o/9zil44SD8v3OYf5JXQzSAzz3V77QD9eq88a4bMIXyhHCS/1xtIuc2gSgjcq4eVXKQlJOANh736L/yEEwefEuHlMeRjbJsOLzR6W1albyQzPfjcy/DIu3G+hZ439FiQkIQlJSEISknBmwtzsnZTxw0AVoeF9YA7PyDT6zCFmGkiI2cRNZRr7XUFidAXJKW+rCZoQMw0APpxNXPn+Q+b4OxRiEIpBKD0ILY9zSEISkpCEJCQhCZ2ckELGgEGryjRU5A2Zhoq8MZvA6LrV05H3vqfffQn6B1FdfirxvFfrAAAAAElFTkSuQmCC


let navBar = document.getElementById("navBar");

let menuDiv = document.createElement("img");
menuDiv.setAttribute("id", "menu");
menuDiv.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Hamburger_icon_white.svg/2048px-Hamburger_icon_white.svg.png";

let youtubeHead = document.createElement('div');
youtubeHead.setAttribute("id", "head");
youtubeHead.innerHTML = "<img src='https://www.freeiconspng.com/thumbs/youtube-logo-png/hd-youtube-logo-png-transparent-background-20.png'><span>YouTube</span"
youtubeHead.addEventListener("click", function () {
    window.location.href = "youtubeApp.html";
});

let inputSearch = document.createElement('input');
inputSearch.setAttribute('id', "inputSearch");
inputSearch.setAttribute('placeholder', "Search");
inputSearch.setAttribute('type', "text");

let btn = document.createElement('button');
btn.setAttribute("id", "searchButton");
btn.addEventListener("click", function () {
    youtube();
});
btn.innerHTML = `<button>Search</button>`;

let signIn = document.createElement('div');
signIn.innerHTML = "SIGN IN";
signIn.setAttribute("id", "signIn");

let threeDots = document.createElement("div");
threeDots.setAttribute("id","threeDots");
threeDots.innerHTML = `<img src="https://image.flaticon.com/icons/png/512/1828/1828693.png">`;

let nineSquares = document.createElement("div");
nineSquares.setAttribute("id","threeDots");
nineSquares.innerHTML = `<img src="https://image.flaticon.com/icons/png/512/248/248925.png">`;

navBar.append(menuDiv, youtubeHead, inputSearch, btn, signIn, threeDots, nineSquares);

var videos_div = document.getElementById("videos");

async function youtube() {

    videos_div.innerHTML = "";

    var q = document.getElementById("inputSearch").value;

    var res = await fetch(`https://youtube.googleapis.com/youtube/v3/search?q=${q}&key=AIzaSyAHtSLFE9LRsaWu0w3W1RAm1GczN09eVDw&maxResults=20`);
    
    var data = await res.json();
    console.log('data:', data)
    
    let {items} = data;

    items = items.filter((el)=>{
        return el.id.videoId != undefined;
    });

    // console.log(items);
    console.log('items:', items)

    items.forEach(({id:{videoId}})=>{
        
        let div = document.createElement('div');
        div.setAttribute("class", "video")
        
        div.innerHTML = `<iframe height="150" src="https://www.youtube.com/embed/${videoId}" title="YouTube video player"
                        frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen></iframe>`

        videos_div.append(div);
    
    }
    )

}