import React from 'react';
import {Link} from 'react-router';


const DisplayProduct = React.createClass({
  render: function(){
    var category = this.props.category === undefined ? "tech" : this.props.category
    return (
      <article className={"modal1 text-center ." + this.props.flex}>
        <Link to={"/category/" + category + "/" + this.props.itemName}><img alt={this.props.itemName} className="modalImage" src={this.props.src} /></Link>
        <p>{this.props.itemName}</p>
      </article>
    )
  }
})


export default DisplayProduct;