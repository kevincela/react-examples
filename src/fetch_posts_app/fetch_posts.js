import React from "react";

function Post(props) {
  return (
    <div>
      <h2>{props.title}</h2>
      <p>{props.body}</p>
    </div>
  );
}

export default class FetchPosts extends React.Component {
  constructor(props) {
    super(props);
    this.state = { posts: [], isLoading: true, userId: "" };

    this.onUserIdChange = this.onUserIdChange.bind(this);
  }

  componentDidMount() {
    this.fetchPosts();
  }

  async fetchPosts() {
    const result = await fetch(
      "https://jsonplaceholder.typicode.com/posts" +
        (this.state.userId !== "" ? `?userId=${this.state.userId}` : "")
    );
    const jsonObj = await result.json();
    this.setState({
      posts: jsonObj,
      isLoading: false,
    });
  }

  onUserIdChange(event) {
    this.setState(
      {
        userId: event.target.value,
        isLoading: true,
      },
      () => {
        this.fetchPosts();
      }
    );
  }

  render() {
    return (
      <div>
        <h1>Posts</h1>
        <input
          type="text"
          value={this.state.userId}
          onChange={this.onUserIdChange}
        />
        {this.state.isLoading ? (
          <p>Loading...</p>
        ) : (
          this.state.posts.map((post) => (
            <Post key={post.id} title={post.title} body={post.body} />
          ))
        )}
      </div>
    );
  }
}
