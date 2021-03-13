import axiosClient from "./axiosClient";

const getCommentsApi = {
  get: (formValue) => {
    if (formValue === {}) return;

    const url = `/comment/${formValue}`;
    return axiosClient.get(url);
  },
};

export default getCommentsApi;
