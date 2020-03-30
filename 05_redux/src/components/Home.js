import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import PockaBoll from '../pokeball.png';
import {connect} from 'react-redux';

class Home extends Component {
  render(){
    const { posts } = this.props;
    const postList = posts.length ? (
        posts.map(post => {
          return(
            <div className="post card" key={post.id}>
              <img src={PockaBoll} alt="Background" />
              <div className="card-content">
                <Link to={'/' + post.id}>
                  <span className="card-title red-text">
                    {post.title}
                  </span>
                </Link>
                {post.body}
              </div>
            </div>
          )
        })
    ) : (
      <div className="center">
        No Posts yet
      </div>
    )

    return (
      <div className="container home">
        <h4 className="center">Home</h4>
        { postList }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.posts
  }
}

export default connect(mapStateToProps)(Home)