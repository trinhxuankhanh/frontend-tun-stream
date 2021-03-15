import axiosClient from "./axiosClient";

const postNewStreamApi = {
  post: (formValue, id) => {
    if (formValue === {} || id === undefined) return;

    const url = `/newstream/${id}`;
    return axiosClient.post(url, formValue);
  },
};

export default postNewStreamApi;
