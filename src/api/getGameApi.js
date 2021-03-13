import axiosClient from "./axiosClient";

const getGameApi = {
  getGame: (formValue) => {
    if (formValue === {}) return;

    const url = "/games";
    return axiosClient.post(url, formValue);
  },
};

export default getGameApi;
