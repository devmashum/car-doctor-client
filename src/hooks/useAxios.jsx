import axios from "axios";

const useAxios = () => {
  
  return axios.create({
    baseURL: 'https://cardoctor-server-xi.vercel.app'
  });
};

export default useAxios;
