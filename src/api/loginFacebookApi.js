import axiosClient from "./axiosClient";

const loginFacebookApi = {
  addUser: (formValue) => {
    if (formValue === {}) return;

    const url = `/loginfb/${formValue}`;
    return axiosClient.get(url);
  },
};

export default loginFacebookApi;
