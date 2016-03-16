var data = [
  {id: 1, author: "Pete Hunt", text: "This is one comment"},
  {id: 2, author: "Jordan Walke", text: "This is *another* comment"}
];

var Comment = React.createClass({

  render: function() {
    return (
      <div className = "comment">
        <h2 className = "commentAuthor">
          {this.props.author}
        </h2>
        {this.props.children}
      </div>
    );
  }

});

var CommentForm = React.createClass({
  render: function() {
    return (
      <div className="commentForm">
        Hello, world! I am a CommentForm.
      </div>
    );
  }
});

var CommentList = React.createClass({
  render: function() {
    var commentNodes = this.props.data.map(function(comment) {
      return (
        <Comment author={comment.author} key={comment.id}>
          {comment.text}
        </Comment>
      );
    });
    return (
      <div className="commentList">
        {commentNodes}
      </div>
    );
  }
});



var CommentBox = React.createClass({
  getInitialState: function() {
    return {
      data {data: []}
    };
  },
  render: function() {

    return(
      <div className = "commentBox">
      <h1> CommentBox </h1>
      <CommentList data={this.state.data}/>
      <CommentForm />
      </div>
      )
  }
});


ReactDOM.render( <CommentBox url="/api/comments" />, document.getElementById('content'));
