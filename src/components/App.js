var React = require('react');
var ReactDOM = require('react-dom');
var Action = require("./Action.js");
var Books = require("./Books.js");
var Haoduo = require("./Haoduo.js");

var App = React.createClass({
  render: function() {
    return (
      <div>
        <Action />
        <Haoduo />
        <Books />
      </div>
    );
  }
});

module.exports = App;
