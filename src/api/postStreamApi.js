import axiosClient from "./axiosClient";

const postStream = {
  postStream: (formValue, id) => {
    if (formValue === {}) return;

    const url = `/playstream/${id}`;
    return axiosClient.post(url, formValue);
  },
};

export default postStream;
