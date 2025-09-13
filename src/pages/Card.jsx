import { useParams } from "react-router-dom";

const Card = () => {

    const { id } = useParams();

    return (
        <div>
            <p>{id}</p>
        </div>
    )
}

export default Card