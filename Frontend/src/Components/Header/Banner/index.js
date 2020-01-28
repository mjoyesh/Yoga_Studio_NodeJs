import React, {Component} from 'react';
import {faPlayCircle, faPauseCircle} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Banner extends Component {
    render() {
        const { playVideo, play } = this.props;
        return (
            <div className="banner wrapper">
                <p className="heading">A Yoga Studio</p>
                <p className="content">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry
                    will uncover many web sites still in their infancy.
                </p>
                <div className="play">
                    <span className="play-vid" onClick={playVideo}>
                        {
                            play ?
                            <FontAwesomeIcon icon={faPauseCircle} />
                            :
                            <FontAwesomeIcon icon={faPlayCircle} />
                        }
                    </span>
                    <span>Watch the video</span>
                </div>
            </div>
        );
    }
}

export default Banner;