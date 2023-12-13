import axios from "axios";

const useAxios = () => {
  return axios.create({
    baseURL: 'http://localhost:3000'
  });
};

export default useAxios;
