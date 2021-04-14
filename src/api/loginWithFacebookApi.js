import axiosClient from "./axiosClient";

const loginWithFacebookApi = {
  addUser: (formValue) => {
    if (formValue === {}) return;

    const url = "/facebook";
    return axiosClient.post(url, formValue);
  },
};

export default loginWithFacebookApi;
