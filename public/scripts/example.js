var CommentBox = React.createClass({
  render: function() {
      return (
        <div className="commentBox">
        <h1>Comments</h1>
        <CommentList />
        <CommentForm />
        </div>
      );
    }
});

var CommentList = React.createClass({
  render: function() {
    return (
      <div className="commentList">
      <Comment author="Nikita Pukita">This is first cooment</Comment>
      <Comment author="Nina Konina">This is *another* one</Comment>
      </div>
    );
  }
});

var CommentForm = React.createClass({
  render: function() {
    return (
      <div className="CommentForm">
        My name is CommentForm, hello!
      </div>
    );
  }
});

var Comment = React.createClass({
  render: function() {
    return (
      <div className="comment">
        <h2 className="commentAuthor">
        {this.props.author}
        </h2>
        {this.props.children}
      </div>
    );
  }
});

ReactDOM.render(
  <CommentBox />,
  document.getElementById('content')
);
