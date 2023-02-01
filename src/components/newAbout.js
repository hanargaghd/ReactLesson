import React from "react";
import "./newAbout.css"
import Slider from "react-slick";
import Zurag1_1 from "../assets/ulirliin_ontslokh_angilal-owliin_sport.webp"
import Zurag2_1 from "../assets/ulirliin_ontslokh_angilal-gaduur_huwtsas.webp"
import Zurag3_1 from "../assets/owoldoo_beldey_angilal-agaar_tsewershuulegch.webp"
import Zurag4_1 from "../assets/huuhdiin_dulaan_tsamts.webp"
import Zurag5_1 from "../assets/owoldoo_beldey_angilal-malgai_oroolt.webp"
import Zurag6_1 from "../assets/ulirliin_ontslokh_angilal-vitamin.webp"
import Zurag7_1 from "../assets/owoldoo_beldey_angilal-owliin_gutal.webp"



const NewAbout = () =>{
    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear"
      };
    const newData = [
        {
            key:1,
            image : Zurag1_1,
            description:"Өвлийн спорт",
        },
        {
            key:2,
            image : Zurag2_1,
            description:"Гадуур хувцас",
        },
        {
            key:3,
            image : Zurag3_1,
            description:"Агааржуулагч",
        },
        {
            key:4,
            image : Zurag4_1,
            description:"Хүүхдийн дулаан цамц",
        },
        {
            key:5,
            image : Zurag5_1,
            description:"Малгай ороолт бээлий",
        },
        {
            key:6,
            image : Zurag6_1,
            description:"Витамин",
        },
        {
            key:7,
            image : Zurag7_1,
            description:"Өвлийн гутал",
        },
    ]
    
    return(
        <>
        <div className="title">
            <h2>Онцлох Ангилал</h2>
        </div>
        <div className="Slider-box">
            
                <div className="container">
                <Slider {...settings}>
                    {
                        newData.map((count)=>(
                            <div className="category">
                                <div className="image">
                                    <img src={count.image} alt=""/>
                                </div>
                                <div className="description">
                                    <p>{count.description}</p>
                                </div>
                            </div>
                        ))
                    }
                    </Slider>
                </div>
        </div>
        
        </>
    )
    
}
export default NewAbout;