import "./style.css";

export const Layer = ({ color, label }) => {
    return (
        <div className="layer">
            <div className="layer__color" style={{ backgroundColor: color }} />
            <div className="layer__label">{label}</div>
        </div>
    )
}