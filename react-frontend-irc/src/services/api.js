import axios from 'axios';

// Springboot API URL
const URL = 'http://localhost:7777/api';

const GetData = () => axios.get(`${URL}/list`);
const AddData = (product) => axios.post(`${URL}/add`,product);
const FindData = (id) => axios.get(`${URL}/data/${id}`);
const EditData = (id, formData) => axios.put(`${URL}/edit/${id}`, formData);
const DeleteData = (id) => axios.delete(`${URL}/delete/${id}`);

const xSignin = (formData) => axios.post(`${URL}/Signin`, formData);
const xSignup = (formData) => axios.post(`${URL}/Signup`, formData);

export {
  GetData,
  AddData,
  FindData,
  EditData,
  DeleteData,
  xSignin,
  xSignup
};
