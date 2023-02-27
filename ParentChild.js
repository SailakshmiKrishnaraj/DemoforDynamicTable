import React from 'react';
import { setUserData } from './actionindex';
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

 class ParentChild extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "",
      items: []
    }
  }

  updateMessage(event) {
    this.setState({
      message: event.target.value
    });
  }

  handleClick() {
    var items = this.state.items;

    items.push(this.state.message);

    this.setState({
      items: items,
      message: ""
    });
  }


  handleItemChanged(i, event) {
    var items = this.state.items;
    items[i]  = event.target.value;

    this.setState({
      items: items
    });
  }
handleSubmit(e){
    
e.preventDefault();
var itemslist = this.state.items;
console.log("The Product  List is :",itemslist)
localStorage.setItem('document',JSON.stringify(itemslist));
}

  handleItemDeleted(i) {
    var items = this.state.items;

    items.splice(i, 1);

    this.setState({
      items: items
    });
  }

  renderRows() {
    var context = this;

    return  this.state.items.map(function(o, i) {
              return (
                <tr key={"item-" + i}>
                  <td>
                    <input
                      type="text"
                      value={o}
                      onChange={context.handleItemChanged.bind(context, i)}
                    />
                  </td>
                  <td>
                    <button
                      onClick={context.handleItemDeleted.bind(context, i)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
                     
                
              );
            });
  }
 
  render() {
    var itemslist = this.state.items;
    return (
      <div>
        <span className='styleh1'><h1><u>Product List</u></h1></span>
        <table className="tableStyle" align='center'>
            
          <thead>
            <tr>
              <th>
                Product
              </th>
              <th>
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {this.renderRows()}
          </tbody>
          <tfoot>
            <button onClick={this.handleSubmit.bind(this)}>Submit</button>
          </tfoot>
        </table>
        <hr/>
        {/* <input
          type="text"
          value={this.state.message}
          onChange={this.updateMessage.bind(this)}
        /> */}
        <button
          onClick={this.handleClick.bind(this)}
        >
          Add Product
        </button>
        <table className="tableStyle" align='left'>
          <tr>
            <th>Product List</th>
          </tr>
          <tr key="items -">
            <td>{itemslist +""}</td>
          </tr>
        </table>
      </div>
    );
  }
}


export default ParentChild