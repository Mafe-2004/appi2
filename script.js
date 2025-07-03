async function getEmoji() {
    const res  = await fetch("https://nekos.best/api/v2/hug?amount=20")
    const anime = await res.json()
    animelist = ""
    anime.results.forEach(anime => {
        animelist += `<img src="${anime.url}" alt="">
                   <h2>${anime.anime_name}</h2>`
        
    });

    console.log(animelist)



    document.getElementById("anime").innerHTML += animelist


                    
}