import React, { Component } from "react";
import Avatar from "react-avatar-edit";

class UploadAvt extends Component {
  constructor(props) {
    super(props);
    const { src } = this.props;
    this.state = {
      preview: null,
      src,
    };
    this.onCrop = this.onCrop.bind(this);
    this.onClose = this.onClose.bind(this);
    this.onBeforeFileLoad = this.onBeforeFileLoad.bind(this);
  }

  onClose() {
    this.setState({ preview: null });

    this.props.seturl({ preview: null });
  }

  onCrop(preview) {
    this.setState({ preview });

    this.props.seturl({ preview });
  }

  onBeforeFileLoad(elem) {
    if (elem.target.files[0].size > 71680) {
      alert("File is too big!");
      elem.target.value = "";
    }
  }

  render() {
    return (
      <div className="uploadavt">
        <Avatar
          width={390}
          height={295}
          onCrop={this.onCrop}
          onClose={this.onClose}
          onBeforeFileLoad={this.onBeforeFileLoad}
          src={this.state.src}
        />
        <img src={this.state.preview} alt="Preview" />
      </div>
    );
  }
}

export default UploadAvt;
