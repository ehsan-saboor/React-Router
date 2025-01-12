import axiosInstance from "../config/axios";

const createPostService = async (postdata) => {
  const response = await axiosInstance.post('/posts', postdata);
  return response.data;
};

export default createPostService; // Ensure this line is present