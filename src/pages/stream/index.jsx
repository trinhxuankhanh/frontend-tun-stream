import React, { Fragment } from "react";
import Footer from "../../components/footer";
import Header from "../../components/header";
import videojs from "video.js";
import getUserApi from "../../api/getUserApi";
import config from "../../default";
import Comment from "../../components/comment";

export default class Stream extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      stream: false,
      videoJsOptions: null,
    };
  }

  componentDidMount() {
    getUserApi.getUserByStream(this.props.stream_key).then((res) => {
      this.setState(
        {
          stream: true,
          videoJsOptions: {
            autoplay: false,
            controls: true,
            sources: [
              {
                src:
                  "http://127.0.0.1:" +
                  config.rtmp_server.http.port +
                  "/live/" +
                  res.stream_key +
                  "/index.m3u8",
                type: "application/x-mpegURL",
              },
            ],
            fluid: true,
          },
        },
        () => {
          this.player = videojs(this.videoNode, this.state.videoJsOptions);
        }
      );
    });
  }

  componentWillUnmount() {
    if (this.player) {
      this.player.dispose();
    }
  }
  render() {
    return (
      <Fragment>
        <Header />
        <div className="row w-100 m-auto">
          <div className="col-8 p-0">
            {this.state.stream ? (
              <div data-vjs-player>
                <video
                  ref={(node) => (this.videoNode = node)}
                  className="video-js vjs-big-play-centered"
                />
              </div>
            ) : (
              " Loading ... "
            )}
          </div>
          <div className="col-4 p-0">
            <Comment stream_key={this.props.stream_key} />
          </div>
        </div>
        <Footer />
      </Fragment>
    );
  }
}
