import axios from "axios";
const basApi = "http://192.168.100.211:10050/api/murabaha/";

export const createTerm = async (payload) => {
  console.log(payload, "payload",payload);
  
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


export const getData = async (api, payload,dispatch) => {

  const apiUrl = basApi + api;
  console.log("before calling API", apiUrl,payload);
  try {

    var response = await axios.post(apiUrl, payload);
    
     console.log("API Response", response);
dispatch(response.data);
return response;

  } catch (error) {
    console.log("Error in  get Data",apiUrl, error);

    return error;
  }
};

export const postData = async (api, payload) => {

  const apiUrl = basApi + api;
  console.log("before calling API", apiUrl,payload);
  try {

    var response = await axios.post(apiUrl, payload);
    
     console.log("postData API Response", response);

return response;

  } catch (error) {
    console.log("Error in  get Data",apiUrl, error);

    return error;
  }
};