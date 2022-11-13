import axios from "axios";
const basApi = "http://192.168.100.211:10050/api/murabaha/";

export const createTerm = async (payload) => {
  console.log(payload, "payload");
  
  const apiURL = basApi + "termSheet/issue";
  try {
    var response = await axios.post(apiURL, payload);

    console.log("API Response", response);

    return response;
  } catch (error) {
    console.log("Error in Create Proforma", error);

    return error;
  }
};
