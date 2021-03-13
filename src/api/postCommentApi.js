import axiosClient from "./axiosClient";

const postComment = {
  postComment: (formValue) => {
    if (formValue === {}) return;

    const url = "/comment";
    return axiosClient.post(url, formValue);
  },
};

export default postComment;
