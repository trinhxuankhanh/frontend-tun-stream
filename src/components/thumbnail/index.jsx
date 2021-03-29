import React, { Fragment } from "react";
import FileBase64 from "react-file-base64";

class Thumbnail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      files: [],
    };
  }

  getFiles(files) {
    if (files.file.size > 300000) {
      return alert("File is too big!");
    } else {
      this.setState({ files: files });
      this.props.seturl(this.state.files);
    }
  }

  render() {
    return (
      <Fragment>
        <FileBase64 multiple={false} onDone={this.getFiles.bind(this)} />
        {this.state.files !== {} && <img src={this.state.files.base64} />}
      </Fragment>
    );
  }
}

export default Thumbnail;
