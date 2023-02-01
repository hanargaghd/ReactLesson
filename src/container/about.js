import React from "react";
import Slider from "react-slick";
import Zurag1 from "../assets/ulirliin_ontslokh_angilal-owliin_sport.webp"
import Zurag2 from "../assets/ulirliin_ontslokh_angilal-gaduur_huwtsas.webp"
import Zurag3 from "../assets/owoldoo_beldey_angilal-agaar_tsewershuulegch.webp"
import Zurag4 from "../assets/huuhdiin_dulaan_tsamts.webp"
import Zurag5 from "../assets/owoldoo_beldey_angilal-malgai_oroolt.webp"
import Zurag6 from "../assets/ulirliin_ontslokh_angilal-vitamin.webp"
import Zurag7 from "../assets/owoldoo_beldey_angilal-owliin_gutal.webp"
import NewAbout from "../components/newAbout";

const About = () =>{
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear"
    }
    const data = [
        {
            key:1,
            image : Zurag1,
            description:"Өвлийн спорт",
        },
        {
            key:2,
            image : Zurag2,
            description:"Гадуур хувцас",
        },
        {
            key:3,
            image : Zurag3,
            description:"Агааржуулагч",
        },
        {
            key:4,
            image : Zurag4,
            description:"Хүүхдийн дулаан цамц",
        },
        {
            key:5,
            image : Zurag5,
            description:"Малгай ороолт бээлий",
        },
        {
            key:6,
            image : Zurag6,
            description:"Витамин",
        },
        {
            key:7,
            image : Zurag7,
            description:"Өвлийн гутал",
        },
    ]
    
    return(
        <div className="bigbox">
        <div className="title">
            <h2>Онцлох Ангилал</h2>
        </div>
        <div className="Slider-box">
            
                <div className="container">
                <Slider {...settings}>
                    {
                        data.map((row)=>(
                            <div className="category">
                                <div className="image">
                                    <img src={row.image} alt=""/>
                                </div>
                                <div className="description">
                                    <p>{row.description}</p>
                                </div>
                            </div>
                        ))
                    }
                    </Slider>
                </div>
        </div>
        <NewAbout/>
        </div>
    )
    
}
export default About;