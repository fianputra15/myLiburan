import React from "react";
import ImageHero from "../assets/images/picture.png";
import Frame from "../assets/images/frame.png";
import IconCities from "../assets/images/icons/ic_cities.svg";
import IconTraveleer from "../assets/images/icons/ic_traveler.svg";
import IconTreasure from "../assets/images/icons/ic_traveler.svg";
import Button from "../elements/Button";
import numberFormat from "../utils/numberFormat";

export default function Hero(props){

    const showMostPicked = () => {
        window.scrollTo({
            top: props.refMostPicked.current.offsetTop - 30,
            behavior : "smooth"
        });
    }



    return (
        <section className="container pt-4">
            <div className="row align-items-center">
                <div className="col-auto pr-5" style={{
                    width : 530
                }}>
                    <h1 className="font-weight-bold line-heigt-1 mb-3">
                        Forget Busy Work, <br/>
                        Start Next Vacation
                    </h1>
                    <p className="mb-4 font-weight-light text-gray-500 w-75" style = {{
                        lineHeight : "170% "
                    }}>
                        We provide what yout need to enjoy your holiday with familiy. Time to
                        make another memorable moments.
                    </p>
                    <Button className="btn px-5" hasShadow isPrimary onClick={showMostPicked}>
                        Show Me Now
                    </Button>
                    <div className="row" style={{
                        marginTop : 80
                    }}>
                        <div className="col-auto" style={{
                            marginRight : 35
                        }}>
                            <img
                                src={IconTraveleer}
                                width="36"
                                height="36"
                                alt= {`numberFormat(props.data.travelers)} Travelers`}/>
                            <h6 className="mt-3">
                                {numberFormat(props.data.travelers)}{" "}
                                <span className="text-gray-500 font-weight-bold">travelers</span>
                            </h6>
                        </div>
                        <div className="col-auto" style={{
                            marginRight : 35
                        }}>
                            <img
                                src={IconTreasure}
                                width="36"
                                height="36"
                                alt= {`numberFormat(props.data.treasures)} Treasures`}/>
                            <h6 className="mt-3">
                                {numberFormat(props.data.treasures)}{" "}
                                <span className="text-gray-500 font-weight-bold">treasures</span>
                            </h6>
                        </div>
                        <div className="col-auto" >
                            <img
                                src={IconCities}
                                width="36"
                                height="36"
                                alt={`numberFormat(props.data.cities)} Travelers`}/>
                            <h6 className="mt-3">
                                {numberFormat(props.data.cities)}{" "}
                                <span className="text-gray-500 font-weight-bold">cities</span>
                            </h6>
                        </div>
                    </div>
                </div>
                <div className="col-6 pl-5">
                    <div style={{
                        width : 520,
                        height : 410
                    }}>
                        <img
                            className= "img-fluid position-absolute"
                            style={{
                                margin : '-30px 0 0 -30px',
                                zIndex : 1
                            }}
                            src={ImageHero}
                            alt="Room With Couches"
                        />
                        <img
                            className= "img-fluid position-absolute"
                            style={{
                                margin : '0 -15px -15px 0',
                            }}
                            src={Frame}
                            alt="Room With Couches frame"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}
