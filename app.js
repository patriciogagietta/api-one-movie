const apikey = 'd629b4ef5d81044204043b6ab7c3a810'   // api key de movies

const peticion = fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${apikey}`)     //enpoint api key

peticion
    // esto se conoce como promesa en cadena
    .then(resp => resp.json())
    .then((json) => {

        const mainContainer = document.querySelector("#main")
        const arrayPeliculas = json.results
        // console.log(arrayPeliculas)

        arrayPeliculas.forEach(peliculas => {

            const titulo = peliculas.original_title
            const description = peliculas.overview
            const image = peliculas.poster_path

            const div = document.createElement("div")
            div.classList.add("container-peliculas")

            const tituloHtml = document.createElement("h3")
            tituloHtml.textContent = titulo
            tituloHtml.classList.add("titulo")

            const imageHtml = document.createElement("img")
            imageHtml.src = `https://image.tmdb.org/t/p/w500/${image}`
            imageHtml.classList.add("img")

            const descriptionHtml = document.createElement("p")
            descriptionHtml.textContent = description
            descriptionHtml.classList.add("parrafo-description")

            div.appendChild(tituloHtml)
            div.appendChild(imageHtml)
            div.appendChild(descriptionHtml)

            mainContainer.appendChild(div)
        });
    })

    .catch(console.warn);   // por si hay un error en el codigo anterior