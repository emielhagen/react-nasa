import React, { Component } from 'react'

class ResultCard extends Component {
  render() {
    return (
      <div className="cardborder">
        <div className="leftbox">
          <div className="image"><img src={this.props.links} alt="" /></div>
        </div>
        <div className="rightbox">
          {<div className="title">{this.props.content}</div>}
        </div>
        <div className="clearfix">
          <div className="bottombox">
            <div className="desc">
              {this.props.sameContent}
            </div>
          </div>
        </div>
        <div className="creator">
          {this.props.creator}
        </div>
      </div>
      )
  }
}

export default ResultCard;
