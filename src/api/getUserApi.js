import axiosClient from "./axiosClient";

const getUserApi = {
  getUserByStream: (formValue) => {
    if (formValue === {}) return;

    const url = `/user/${formValue}`;
    return axiosClient.get(url);
  },
  getUserById: (formValue) => {
    if (formValue === {}) return;

    const url = `/userdetail/${formValue}`;
    return axiosClient.get(url);
  },
};

export default getUserApi;
