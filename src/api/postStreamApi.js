import axiosClient from "./axiosClient";

const postStream = {
  postStream: (formValue) => {
    if (formValue === {}) return;

    const url = "/playstream";
    return axiosClient.post(url, formValue);
  },
};

export default postStream;
