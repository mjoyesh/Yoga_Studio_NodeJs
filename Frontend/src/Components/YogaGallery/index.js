import React, {Component} from 'react';
import './Yoga.scss';

class YogaGallery extends Component {
    state={
        allImages: ['doyoga_img_1.jpg', 'doyoga_about_2.jpg', 'doyoga_img_3.jpg', 'doyoga_img_3.jpg', 'doyoga_about_2.jpg',
            'doyoga_about_3.jpg', 'doyoga_about_4.jpg', 'doyoga_img_1.jpg', 'doyoga_about_2.jpg', 'doyoga_about_2.jpg',
            'doyoga_about_4.jpg', 'doyoga_img_3.jpg'],
        classes: ['doyoga_about_2.jpg', 'doyoga_img_3.jpg', 'doyoga_img_3.jpg', 'doyoga_about_2.jpg',
            'doyoga_about_3.jpg', 'doyoga_about_4.jpg', 'doyoga_about_2.jpg'],
        intern: ['doyoga_img_1.jpg', 'doyoga_img_3.jpg', 'doyoga_img_3.jpg', 'doyoga_about_2.jpg',
            'doyoga_about_3.jpg', 'doyoga_about_4.jpg', 'doyoga_about_2.jpg'],
        training: ['doyoga_img_1.jpg', 'doyoga_img_3.jpg', 'doyoga_about_2.jpg', 'doyoga_about_4.jpg', 'doyoga_img_1.jpg',
            'doyoga_about_2.jpg', 'doyoga_about_4.jpg'],
        key: ''
    }

    showImages = (key) => {
        if(key === 'All') {
            this.setState({
                key: 'all'
            })
        }
        else if(key === 'Classes') {
            this.setState({
                key: 'classes'
            })
        }
        else if(key === 'Intern') {
            this.setState({
                key: 'intern'
            })
        }
        else if(key === 'Training') {
            this.setState({
                key: 'training'
            })
        }
    }

    render() {
        const { key, allImages, classes, intern, training } = this.state;
        return (
            <div className="yoga-gallery wrapper">
                <span className="border yoga-border"></span>
                <h1>YOGA GALLERY</h1>
                <div className="buttons">
                    <button type="button" onClick={()=> this.showImages('All')}>All</button>
                    <button type="button" onClick={()=> this.showImages('Classes')}>Classes</button>
                    <button type="button" onClick={()=> this.showImages('Intern')}>Intern</button>
                    <button type="button" onClick={()=> this.showImages('Training')}>Training</button>
                </div>
                <div className="yoga-images">
                    {
                        !key ? allImages.map(item => (
                            <img src={`assets/${item}`} alt="yoga"/>
                        ))
                        :
                        (key === 'all' && allImages.map(item => (
                            <img src={`assets/${item}`} alt="yoga"/>
                        )) ||
                        key === 'classes' && classes.map(item => (
                            <img src={`assets/${item}`} alt="yoga"/>
                        )) ||
                        key === 'intern' && intern.map(item => (
                            <img src={`assets/${item}`} alt="yoga"/>
                        )) ||
                        key === "training" && training.map(item => (
                            <img src={`assets/${item}`} alt="yoga"/>
                        )))
                    }
                </div>
            </div>
        );
    }
}

export default YogaGallery;
