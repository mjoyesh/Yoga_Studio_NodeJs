import React, {Component, createRef, Fragment} from 'react';
import Slider from "react-slick";
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import './FeaturedClasses.scss';

class FeaturedClasses extends Component {
    constructor(props) {
        super(props);
        this.feature = createRef();
        this.state = {
            images: ['doyoga_img_1.jpg', 'doyoga_about_2.jpg', 'doyoga_img_3.jpg', 'doyoga_img_3.jpg', 'doyoga_about_2.jpg',
                'doyoga_about_3.jpg', 'doyoga_about_4.jpg', 'doyoga_img_1.jpg', 'doyoga_about_2.jpg', 'doyoga_about_2.jpg',
                'doyoga_about_4.jpg', 'doyoga_img_3.jpg']
        }
    }

    previous = () => {
        console.log('FFF',this.feature.current)
        this.feature.current.slickPrev();
    }

    next = () => {
        this.feature.current.slickNext();
    }

    render() {
        const settings = {
            infinite: true,
            speed: 650,
            slidesToShow: 3,
            slidesToScroll: 1,
            centerMode: true,
            focusOnSelect: true,
            cssEase: 'linear',
            touchMove: true,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: true
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        initialSlide: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        };
        const { images } = this.state;
        return (
            <div className="featured-wrapper">
                <div className="featured-content wrapper">
                    <div className="featured-head">
                        <span className="border"></span>
                        <h1>FEATURED CLASSES</h1>
                        <p>
                            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
                            there live the blind texts. Separated they live in Bookmarksgrove right at the coast of
                            the Semantics, a large language ocean.
                        </p>
                    </div>
                    <div className="slick-buttons">
                        <button className="button" onClick={this.previous}>
                            Previous
                        </button>
                        <button className="button" onClick={this.next}>
                            Next
                        </button>
                    </div>
                </div>
                <div className="featured-slider">
                    <Slider {...settings} ref={this.feature}>
                        {
                            images.map(item => (
                                <div className="img-wrapper">
                                    <img src={`./assets/${item}`} alt="Do Yoga" height="100"/>
                                    <span className="circle">$34.99</span>
                                    <span className="title">Yinyasa</span>
                                    <span className="bg"></span>
                                </div>
                            ))
                        }
                    </Slider>
                </div>
            </div>
        );
    }
}

export default FeaturedClasses;
