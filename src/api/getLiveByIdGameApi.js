import axiosClient from "./axiosClient";

const getLiveByIdGameApi = {
  get: (formValue) => {
    if (formValue === {}) return;

    const url = `/lives/${formValue}`;
    return axiosClient.get(url);
  },
};

export default getLiveByIdGameApi;
