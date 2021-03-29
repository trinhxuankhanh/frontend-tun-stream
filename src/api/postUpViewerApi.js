import axiosClient from "./axiosClient";

const postUpViewerApi = {
  post: (id) => {
    if (id === "") return;

    const url = `/upviewer/${id}`;
    return axiosClient.post(url);
  },
};

export default postUpViewerApi;
