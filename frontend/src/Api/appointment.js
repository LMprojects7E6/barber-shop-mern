import api from "./api";

export const getAppointmentsByUserId = async () => {
  const response = await api.get(`/appointments`);
  return response.data;
};
export const createAppointment = async (formData) => {
  const response = await api.post(`/appointments`, formData);
  return response.data;
};

// export const updateAppointment = async (formData) => {
//   const response = await api.put(`/appointments${id}`, formData);
//   return response.data;
// };

export const deleteAppointment = async (appointmentID) => {
  const response = await api.delete(`/appointments/${appointmentID}`);
  return response.data;
};
