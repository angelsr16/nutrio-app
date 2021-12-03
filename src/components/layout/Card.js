import "./Card.css";

const Card = ({children, handleOnClick}) => {
    return (
        <div className="card" onClick={handleOnClick}>
            {children}
        </div>
    )
}

export default Card
