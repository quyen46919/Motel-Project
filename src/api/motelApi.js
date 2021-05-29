import axiosClient from "./axiosClient";

const motelApi = {
    getAll : (params) => {
        const url = '/motels';
        return axiosClient.get(url, {params});
    },
    getById: (id) => {
        const url = `/motels/details?motel_id=${id}`;
        return axiosClient.get(url);
    },
    getMergeMotel : (params) => {
        const url = '/motels/merge';
        return axiosClient.get(url, {params});
    },
    getAreaList : (params) => {
        const url = '/motels/area';
        return axiosClient.get(url, {params});
    },
};

export default motelApi;
