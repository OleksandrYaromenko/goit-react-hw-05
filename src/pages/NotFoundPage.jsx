import { Link } from "react-router-dom";

export default function NotFoundPage(){
    return (
        <div>
            <h1>Not Found Page!!!!! </h1>
            <p>Please go to <Link to="/">HOME PEGE</Link></p>
        </div>
    )
}