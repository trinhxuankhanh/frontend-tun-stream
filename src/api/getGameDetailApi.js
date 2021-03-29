import axiosClient from "./axiosClient";

const getGameDetailApi = {
  get: (formValue) => {
    if (formValue === {}) return;

    const url = `/game/${formValue}`;
    return axiosClient.get(url);
  },
};

export default getGameDetailApi;
