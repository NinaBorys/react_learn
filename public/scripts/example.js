var CommentBox = React.createClass({
  render: function() {
      return (
        <div className="commentBox">
          It is a commentBox named Sraka
        </div>
      );
    }
});

ReactDOM.render(
  <CommentBox />,
  document.getElementById('content')
);
