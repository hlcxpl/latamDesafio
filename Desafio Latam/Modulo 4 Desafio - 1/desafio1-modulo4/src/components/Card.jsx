import React from 'react';

function Card({ title, src, description }) {
    return (
        <div className='card animate__animated animate__flipInX'>
            <div className="overflow">
                <img className=' img-top w-100' src={src} alt="" />
            </div>
            <div className="card-body text-dark text-center bg-light">

                <h4 className="car-title">{title}</h4>
                <p className='car-text'>{description}</p>
            </div>
            <button className="btn btn-secondary ">Mew</button>
        </div>
    )
}
export default Card;    