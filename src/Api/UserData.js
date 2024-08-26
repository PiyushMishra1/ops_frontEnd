import axios from "axios";

const UserData = async (data) => {
  const url = `https://opsserver-production.up.railway.app/login`;
  try {
    const response = await axios.post(url, data);
    console.log("Response:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error:", error);
    return error;
  }
};

export default UserData;
