import React, { Component } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Link } from "react-router-dom";
import { yogaTableAction } from "../../Actions/yogatable.action";
import './YogaTable.scss';

class YogaTable extends Component {

  componentDidMount(){
    const { yogaTableAction } = this.props;
    yogaTableAction();
  }

  render() {
    const { yogaData } = this.props;
    return (
      <div className="yoga-table">
        <div className="wrapper">
          <h1>Yoga Classes</h1>
          <div className="breadcrumb">
            <Link to="/">Home</Link>
          </div>
          <table width="100%" cellPadding="0" cellSpacing="0">
            <tr>
            <th>Types</th>
            <th>Ideal</th>
            <th>Sweat Rating</th>
            <th>Peace of Mind Rating</th>
            </tr>
            {
              yogaData && yogaData.map(item=> 
                <tr>
                  <td>
                    {item.types}
                  </td>
                  <td>
                    {item.ideal}
                  </td>
                  <td>
                    {item.sweat}
                  </td>
                  <td>
                    {item.peace}
                  </td>
                </tr>
              )
            }
          </table>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
        yogaTableAction: yogaTableAction,
      }, dispatch
  );
};

const mapStateToProps = (state) => {
    return{
        yogaData: state.yogaReducer.data
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(YogaTable);