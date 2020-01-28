import React, {Component} from 'react';
import './Events.scss';

class Events extends Component {
    state = {
        events: [
            {
                image: 'assets/doyoga_img_1.jpg',
                title: 'Fitness Class Name Here',
                date: 'April 22 2019',
                content: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia'
            },
            {
                image: 'assets/doyoga_about_2.jpg',
                title: 'Fitness Class Name Here',
                date: 'April 22 2019',
                content: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia'
            }
        ]
    }
    render() {
        const {events} = this.state;
        return (
            <div className="events wrapper">
                <span className="border"></span>
                <h1>EVENTS</h1>
                <div className="event-stack">
                    {
                        events.map(item => (
                            <div className="events-type">
                                <img src={item.image} alt={item.title} />
                                <div className="content-wrapper">
                                    <h2>{item.title}</h2>
                                    <p className="date">{item.date}</p>
                                    <p className="content">{item.content}</p>
                                    <button type="button">Read More</button>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        );
    }
}

export default Events;