import axiosClient from "./axiosClient";

const getLiveApi = {
  get: () => {
    const url = `/live`;
    return axiosClient.get(url);
  },

  getLiveByStreamKey: (id) => {
    const url = `/live/${id}`;
    return axiosClient.get(url);
  },

  getLiveByIdLive: (id) => {
    const url = `/liveIdLive/${id}`;
    return axiosClient.get(url);
  },
};

export default getLiveApi;
