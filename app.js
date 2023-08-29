const apikey = '8fa8fe67b5f6b84aedfe04b2350639db'   // api key de movies

const peticion = fetch(`https://api.themoviedb.org/3/movie/550?api_key=${apikey}`)     //enpoint api key


peticion
    // esto se conoce como promesa en cadena
    .then(resp => resp.json())
    .then((json) => {

        const titulo = json.original_title
        // console.log(titulo)
        const description = json.overview
        // console.log(description)
        const image = json.poster_path
        // console.log(image)

        const tituloHtml = document.createElement("h1")
        tituloHtml.textContent = titulo
        
        const imageHtml = document.createElement("img")
        imageHtml.src = `https://image.tmdb.org/t/p/w500/${image}`

        const descriptionHtml = document.createElement("p")
        descriptionHtml.textContent = description

        document.body.appendChild(tituloHtml)
        document.body.appendChild(imageHtml)
        document.body.appendChild(descriptionHtml)

    })

    .catch(console.warn);   // por si hay un error en el codigo anterior