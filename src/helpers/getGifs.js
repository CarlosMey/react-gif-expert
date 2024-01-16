export const getGifs = async(category) => {

    const url = `https://api.giphy.com/v1/gifs/search?api_key=NoU4BzclXPaIHx3r4M6VFANVA89PZfRR&q=${category}&limit=10`

    const resp = await fetch(url);

    const {data} = await resp.json();

    // console.log(data);

    const gifs = data.map(img => ({
        id:img.id,
        title: img.title,
        url: img.images.downsized_medium.url,
    }))
        console.log(gifs);

        return gifs;
}
