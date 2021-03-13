import axiosClient from "./axiosClient";

const registerApi = {
  addUser: (formValue) => {
    if (formValue === {}) return;

    const url = "/register";
    return axiosClient.post(url, formValue);
  },
};

export default registerApi;
