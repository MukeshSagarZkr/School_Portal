import axios from 'axios';

const API_BASE_URL = 'https://localhost:7205/api/Designation';

export const getAllDesignations = () => axios.get(`${API_BASE_URL}`);
export const getDesignationById = (id) => axios.get(`${API_BASE_URL}/${id}`);
export const addDesignation = (data) => axios.post(`${API_BASE_URL}`, data);
export const updateDesignation = (id, data) => axios.put(`${API_BASE_URL}/${id}`, data);
export const deleteDesignation = (id) => axios.delete(`${API_BASE_URL}/${id}`);
