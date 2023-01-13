import React from "react";
import './bike.css'

const Bike = () => {
    return (
        <div className="div__bike">
            <img src={require('./biker.png')} alt="Biker man" className="biker" />
        </div>
    )
}

export default Bike;