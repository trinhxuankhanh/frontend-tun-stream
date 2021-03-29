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
    getUserApi.getUserByStream(this.props.match.params.id).then((res) => {
      this.setState(
        {
          stream: true,
          videoJsOptions: {
            autoplay: false,
            controls: true,
            sources: [
              {
                src:
                  "http://localhost:" +
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
          {/* col-12 col-md-6 col-lg-4 col-xl-3 */}
          <div className="col-12 col-md-12 col-lg-8 col-xl-10 p-0">
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
          <div className="col-12 col-md-12 col-lg-4 col-xl-2 p-0">
            <Comment stream_key={this.props.match.params.id} />
          </div>
        </div>
        <Footer />
      </Fragment>
    );
  }
}
