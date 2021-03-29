import axiosClient from "./axiosClient";

const postUpdateUserApi = {
  post: (formValue, id) => {
    if (formValue === {}) return;

    const url = `/updateuser/${id}`;
    return axiosClient.post(url, formValue);
  },
};

export default postUpdateUserApi;
