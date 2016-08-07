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
      Hello! It is a commentList
      </div>
    );
  }
});

var CommentForm = React.createClass({
  render: function() {
    return (
      <div>
        My name is CommentForm, hello!
      </div>
    );
  }
});



ReactDOM.render(
  <CommentBox />,
  document.getElementById('content')
);
