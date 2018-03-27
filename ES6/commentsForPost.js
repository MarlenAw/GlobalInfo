var post = { id: 2, title: 'New Post'};
var comments = [
  { postId: 2, content: 'great posttt'},
  { postId: 4, content: 'what is thiiiis?'},
  {postId: 2, content: 'neat'}
];


const commentsForPost = (post, comments) => {
  return comments.filter(comment => {
    return comment.postId === post.id;
  });
}

console.log(commentsForPost(post, comments)); // output: [ { postId: 2, content: 'great posttt'}, { postId: 2, content: 'neat' } ]
