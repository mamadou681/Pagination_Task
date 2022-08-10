const Posts = ({ posts, loading }) => {
  if (loading) {
    return <p>Loading...</p>;
  }
  return (
    <div className="posts">
      {posts.map((post) => (
        <div key={post.id}>{post.title}</div>
      ))}
    </div>
  );
};

export default Posts;
