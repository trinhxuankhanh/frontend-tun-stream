import React, { useEffect, useState } from "react";
import getLiveApi from "../../api/getLiveApi";
import { FacebookShareButton, FacebookIcon } from "react-share";

const SubStream = (props) => {
  const { id } = props;
  const [live, setLive] = useState({});

  useEffect(() => {
    getLiveApi
      .getLiveByStreamKey(id)
      .then((response) => setLive(response))
      .catch((err) => console.log(err));
  });

  return (
    <div className="sub-video">
      <div className="flex-column">
        <div className="d-flex">
          <span>Chủ đề hôm nay: </span>
          <p>{live.title}</p>
        </div>

        <div className="d-flex">
          <span>Số người cùng đang xem: </span>
          <p>{live.viewer}</p>
        </div>
      </div>
      {live.id_user !== undefined && (
        <div className="share">
          <FacebookShareButton
            quote={`Vào xem streamer ${live.id_user.username} cùng mình nào!!!`}
            url={`${window.location.protocol}//172.0.0.1${window.location.pathname}`}
          >
            <FacebookIcon size={40} round={true} />
          </FacebookShareButton>
        </div>
      )}
    </div>
  );
};

export default SubStream;
