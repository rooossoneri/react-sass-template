"use strict";

var data = [{ id: 1, author: "Pete Hunt", text: "This is one comment" }, { id: 2, author: "Jordan Walke", text: "This is *another* comment" }];

var Comment = React.createClass({
  displayName: "Comment",


  render: function render() {
    return React.createElement(
      "div",
      { className: "comment" },
      React.createElement(
        "h2",
        { className: "commentAuthor" },
        this.props.author
      ),
      this.props.children
    );
  }

});

var CommentForm = React.createClass({
  displayName: "CommentForm",

  render: function render() {
    return React.createElement(
      "div",
      { className: "commentForm" },
      "Hello, world! I am a CommentForm."
    );
  }
});

var CommentList = React.createClass({
  displayName: "CommentList",

  render: function render() {
    var commentNodes = this.props.data.map(function (comment) {
      return React.createElement(
        Comment,
        { author: comment.author, key: comment.id },
        comment.text
      );
    });
    return React.createElement(
      "div",
      { className: "commentList" },
      commentNodes
    );
  }
});

var CommentBox = React.createClass({
  displayName: "CommentBox",

  render: function render() {

    return React.createElement(
      "div",
      { className: "commentBox" },
      React.createElement(
        "h1",
        null,
        " CommentBox "
      ),
      React.createElement(CommentList, { data: this.props.data }),
      React.createElement(CommentForm, null)
    );
  }
});

ReactDOM.render(React.createElement(CommentBox, { data: data }), document.getElementById('content'));