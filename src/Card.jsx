import React from "react";

const Card =(props) =>{
    return( 
        <>
                    <div className="col-md-4 col-10 mx-auto">
                    <div className="card">
                                    <img src={props.imgsrc} class="card-img-top" alt={props.imgsrc}/>
                                        <div className="card-body">
                                            <h5 className="card-title font-weight-bold">{props.title}</h5>
                                            <p className="card-text">“Life is uncertain. Eat Coffee first.”</p>
                                            <a href="https://www.swiggy.com/restaurants/tea-kadai-poothole-koorkenchery-thrissur-434823" className="btn btn-primary">Add to Cart</a>
                                        </div>
                                </div>
                    </div>
                    
                
         </>
    );
};
export default Card;