import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';

//const baseApi = "http://192.168.100.8:10050/api/murabaha/";
const baseApi = "https://localhost:8888/api/v5_2/flow/";
const baseproject=  "com.finomics.ijma.murabahacordap.workflows.";





// Authorization credentials
const USERNAME = "admin";
const PASSWORD = "admin";

// Encode the authorization credentials
const token = btoa(`${USERNAME}:${PASSWORD}`);

// Authorization header
const header = {
    "Authorization": `Basic ${token}`, // Basic Auth with Base64 encoding
    "Content-Type": "application/json"     // Optional: Set content type if sending JSON
}
export const executeflow = async (flowname,requestBody, holdingId) => {
  const flowClassName= baseproject+flowname;
  const clientRequestId=holdingId+"-"+flowname+"_"+((Date.Now()).toString());

  const payload={

    clientRequestId:clientRequestId,
    flowClassName:flowClassName,
    requestBody:requestBody
  }

  const completeapi=baseApi+holdingId;
  console.log(payload, "payload in executeGlow");
  
  try {

    var response = await axios.post(completeapi,payload,{ headers:header });
    console.log("API Response", response);
    toast.success("Successfully Submitted flow");
    return response;
  } catch (error) {
    console.log("Error in Flow Sumission", error);
notify("Error in Proforma");
    return error;
  }
};

export const checkflowresponse = async (holdingId,clientId,dispatch) => {
//https://localhost:8888/api/v5_2/flow/F12BA7BCF8BB/FilteredNotes1.0/result
  const apiUrl = baseApi + holdingId+"/"+clientId+"/result";
  console.log("before calling API", apiUrl);
  try {

    var response = await axios.get(apiUrl,{ headers:header });
    
     console.log("API Response", response);
dispatch(response.data);
return response;

  } catch (error) {
    console.log("Error in  get Data",apiUrl, error);

    return error;
  }
}








  
  const notify = (msg) => toast.error(msg, {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });
