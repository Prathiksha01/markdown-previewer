import React from 'react';
import ReactDOM from 'react-dom';

var Left = React.createClass({
  handleChange(e)
  {
    var text = e.target.value;
    this.props.updateValue(text);
  },
  
  render: function()
  {
    return <textarea className = "left" value = {this.props.content} onChange={this.handleChange} /> 
  }
        
});

var Right = React.createClass(
{
   //A function to mark new text
  rawMarkup :function(value)
  {
    var rawMarkup = marked(value, {sanitize:true});
    return ({__html : rawMarkup});
  },
  
  
  render :function()
  {
   return(
    <div className = "right">
       <span dangerouslySetInnerHTML={this.rawMarkup(this.props.content)} />
    </div>
    );
  }
});

var Body = React.createClass({
  
  //Initial State
  getInitialState : function()
  {
    return ({content : "Heading\n=======\n\nSub-heading\n-----------\n \n### Another deeper heading\n \nParagraphs are separated\nby a blank line.\n\nLeave 2 spaces at the end of a line to do a  \nline break\n\nText attributes *italic*, **bold**, \n`monospace`, ~~strikethrough~~ .\n\nShopping list:\n\n  * apples\n  * oranges\n  * pears\n\nNumbered list:\n\n  1. apples\n  2. oranges\n  3. pears\n\nThe rain---not the reign---in\nSpain.\n\n *[Herman Fassett](https://freecodecamp.com/hermanfassett)*" });
  },
  
  //A function to update view after marking the new text
  updateValue :function(modifiedValue)
  {
    this.setState({
      content : modifiedValue
    });
  },
  
  render: function ()
  {
    return (
    <div>
        <Left content = {this.state.content} updateValue = {this.updateValue.bind(this)}/>
        <Right content = {this.state.content}/>
    </div>
    );
  }
});


//UI rendering
ReactDOM.render(<Body />, document.getElementById('app'));


