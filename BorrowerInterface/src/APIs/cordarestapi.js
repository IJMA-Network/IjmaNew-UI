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
  const clientRequestId=holdingId+"-"+flowname+"_"+((Date.now()).toString());

  const payload={

    clientRequestId:clientRequestId,
    flowClassName:flowClassName,
    requestBody:requestBody
  }

  const completeapi=baseApi+holdingId;
  console.log(payload, "payload in executeFlow");
  
  try {

    var response = await axios.post(completeapi,payload,{ headers:header });
    console.log("API Response", response);
       setTimeout(() => checkflowresponse(holdingId, clientRequestId), 5000);
    
    toast.success("Successfully Submitted flow");

    //checkflowresponse(holdingId,clientRequestId);
    return response;
  } catch (error) {
    console.log("Error in Flow Sumission", error);
notify("Error in Proforma");
    return error;
  }
};

export const checkflowresponse = async (holdingId,clientId) => {
 // const apiUrl='https://localhost:8888/api/v5_2/flow/EE05C2099ED2/EE05C2099ED2-IssueProformaFlow_1735019287225/result';
  const apiUrl =baseApi + holdingId+"/"+clientId+"/result";
  console.log("before calling check responseAPI",apiUrl);
  try {

    var response = await axios.get(apiUrl,{ headers:header });
    alert("in check response");
     console.log("Check API Response", response);
     const status= response.data.flowStatus;
     toast.info("The Submitted Flow is "+status);
//dispatch(response.data);
return response;

  } catch (error) {
    console.log("Error in  check flow ", error);

    return error;
  }
}

export const fetchDataflow = async (flowname,requestBody, holdingId,dispatch) => {
  const flowClassName= baseproject+flowname;
  const clientRequestId=holdingId+"-"+flowname+"_"+((Date.now()).toString());

  const payload={

    clientRequestId:clientRequestId,
    flowClassName:flowClassName,
    requestBody:requestBody
  }

  const completeapi=baseApi+holdingId;
  console.log(payload, "payload in fetchflow");
  
  try {

    var response = await axios.post(completeapi,payload,{ headers:header });
    console.log("After fetch data API", response);
       setTimeout(() => fetchresponse(holdingId, clientRequestId,dispatch), 500);
    
  //  toast.success("Successfully Submitted flow");

    //checkflowresponse(holdingId,clientRequestId);
    return response;
  } catch (error) {
    console.log("Error in  fetch data API", error);
//notify("Error in Proforma");
    return error;
  }
};

export const fetchresponse = async (holdingId,clientId,dispatch) => {
  // const apiUrl='https://localhost:8888/api/v5_2/flow/EE05C2099ED2/EE05C2099ED2-IssueProformaFlow_1735019287225/result';
   const apiUrl =baseApi + holdingId+"/"+clientId+"/result";
   console.log("before calling check responseAPI",apiUrl);
   try {
 
     var response = await axios.get(apiUrl,{ headers:header });
    // alert("in fetch response");
      console.log("After Check Fetch Response", response.data.json);
  //    const status= response.data.flowStatus;
   //   toast.info("The Submitted Flow is "+status);
 dispatch(response.data.json);
 return response;
 
   } catch (error) {
     console.log("Error in  fetch response", error);
 
     return error;
   }
 }

 export const formatDate=(dateArray)=> {
  // Map month numbers to their corresponding short names
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  
  // Destructure the array into year, month, and day
  const [year, month, day] = dateArray;
  
  // Format the day and month
  const formattedDay = String(day).padStart(2, "0");
  const formattedMonth = months[month - 1]; // Month is 1-based in the array
  
const finaldate=`${formattedDay}-${formattedMonth}-${year}`;
console.log("Final date",finaldate);
  return `${formattedDay}-${formattedMonth}-${year}`;
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
