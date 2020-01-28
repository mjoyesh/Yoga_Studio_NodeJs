import React, {Component, Fragment} from 'react';
import './Schedule.scss';

class Schedule extends Component {
    state={
        yogas: [
            {
                title: 'Yinyasa',
                content: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts...',
                time: '5:30 PM',
                date: 'April 22, 2019',
                buttonText: 'Join from $15',
                image: '/assets/doyoga_img_1.jpg'
            },
            {
                title: 'Surya Vinyasa',
                content: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts...',
                time: '5:30 PM',
                date: 'April 22, 2019',
                buttonText: 'Join from $15',
                image: '/assets/doyoga_about_1.jpg'

            },
            {
                title: 'Chandra Vinyasa',
                content: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts...',
                time: '5:30 PM',
                date: 'April 22, 2019',
                buttonText: 'Join from $15',
                image: '/assets/doyoga_about_2.jpg'
            },
            {
                title: 'Ashtanga Foundations',
                content: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts...',
                time: '5:30 PM',
                date: 'April 22, 2019',
                buttonText: 'Join from $15',
                image: '/assets/doyoga_img_1.jpg'
            }
        ]
    }
    render() {
        const {yogas} = this.state;
        return (
            <Fragment>
                <div className="schedule wrapper">
                    <span className="border"></span>
                    <h1>SCHEDULE</h1>
                    <p className="schedule-content">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley.
                    </p>
                </div>
                <div className="schedule-images">
                    {
                        yogas && yogas.map(item => (
                            <div className={`yoga-details 
                                ${item.title == 'Chandra Vinyasa' || item.title == 'Ashtanga Foundations' ? 'reverse' : ''} 
                                ${item.title == 'Yinyasa' || item.title == 'Ashtanga Foundations' ? 'je' : 'js'}`}
                            >
                                <div className="yoga-wrapper">
                                    <h2>{item.title}</h2>
                                    <p className="content">{item.content}</p>
                                    <p className="time">{item.time}</p>
                                    <p className="date">{item.date}</p>
                                    <button type="button">{item.buttonText}</button>
                                </div>
                                <img src={item.image} alt={item.title}/>
                            </div>
                        ))
                    }
                </div>
            </Fragment>
        );
    }
}

export default Schedule;