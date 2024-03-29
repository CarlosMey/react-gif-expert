import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";



export const GifGrid = ({category}) => {

    const { images, isLoading } = useFetchGifs(category);

    // const [counter, setCounter] = useState(10);

    return (
        <>
            <h3>{category}</h3>

            {
                isLoading && ( <h2>Cargando...</h2> )
            }

            <div className="card-grid">
                {
                    images.map(image => (

                        <GifItem key={image.id} {...image}/>
                        // <li key={image.id}>{image.title}</li>
                        // <img src={image.url} alt="" />
                    ))
                }
            </div>

            {/* <button onClick={ () => setCounter(counter + 1) }>+1</button> */}
        </>
    
    );
}