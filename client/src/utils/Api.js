import axios from 'axios';

const baseUrl = 'http://localhost:7000';

export const getImages = async () => {
  const data = await axios.get(`${baseUrl}/images`);
  return data;
};

export const getImagesById = async id => {
  const data = await axios.get(`${baseUrl}/images/${id}`);
  return data;
};

export const postComment = async (id, comment) => {
  const data = await axios.post(`${baseUrl}/images/${id}/comments`, {
    ...comment,
  });
  return data;
};
