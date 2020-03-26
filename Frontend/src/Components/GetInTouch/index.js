import React, {Component} from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { contactFormAction } from "../../Actions/form.action";
import './GetInTouch.scss';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class GetInTouch extends Component {
    constructor(props){
        super(props);
        this.state={
            name: "",
            phone: "",
            email: "",
            message: ""
        };
    }

    handleInputBox = (event)=> {
        const {name, value} = event.target;
        this.setState({
            [name]: value
        });
    }

    sendContactData = async (e) => {
        e.preventDefault();
        const {name, phone, email, message} = this.state;
        const {contactForm} = this.props;
        const data = {
            name,
            phone,
            email,
            message
        }
        await contactForm(undefined, data);
        toast.success("Message Has Been Sent !");
    }

    render() {
        return (
            <div className="get-in-touch wrapper">
                <span className="border git-border"></span>
                <h1>GET IN TOUCH</h1>
                <div className="git-wrapper">
                    <form onSubmit={(e)=> this.sendContactData(e)}>
                        <div className="name-phone">
                            <div>
                                <label>Name</label>
                                <input type="text" name="name" onChange={(e)=>this.handleInputBox(e)} required/>
                            </div>
                            <div>
                                <label>Phone</label>
                                <input type="tel" name="phone" onChange={(e)=>this.handleInputBox(e)} required/>
                            </div>
                        </div>
                        <div>
                            <label>Email</label>
                            <input type="email" name="email" onChange={(e)=>this.handleInputBox(e)} required/>
                        </div>
                        <div>
                            <label>Write Message</label>
                            <textarea name="message" onChange={(e)=>this.handleInputBox(e)}/> 
                        </div>
                        <button type="submit">Send Message</button>
                    </form>
                    <div className="contact-details">
                        <h2>Contact Details</h2>
                        <div className="detail">
                            <p>34 Street Name, City Name Here,<br/>
                                United States
                            </p>
                            <p>+1 242 4942 290</p>
                            <p>info@gourdomain.com</p>
                        </div>
                    </div>
                </div>
                <ToastContainer autoClose={2000}/>
            </div>
        );
    }
}

// const mapStateToProps = (state) => {
//     return{
//         formData: state.formReducer.data
//     }
// };

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
            contactForm: contactFormAction,
        }, dispatch
    );
};

export default connect(null, mapDispatchToProps)(GetInTouch);