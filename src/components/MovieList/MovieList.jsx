import { Link } from "react-router-dom"

export default function MovieList({films}){
    return(
        <div>
            <ul>
                {films.map(({id,title}) =>{
                     return(
                        <li key={id}>
                            <Link to={`/movies/${id}`}>
                            {title}
                            </Link>
                            
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}






   