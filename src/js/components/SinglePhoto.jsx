import React, { PureComponent } from 'react';

class SinglePhoto extends PureComponent {

  render() {
    let id = this.props.match.params.photoId;
    let url = this.props.images[id].url;
    return (
      <img src={url}/>
    );
  }
}

export default SinglePhoto;
