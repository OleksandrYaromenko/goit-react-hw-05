import toast from "react-hot-toast";

export default function ErrorMessage(){
    return(
        <div>
            {toast.error("Oops sori api")}
        </div>
    )
}