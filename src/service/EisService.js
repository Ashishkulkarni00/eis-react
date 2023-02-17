import axios from "axios";

const apigee_url = process.env.REACT_APP_APIGEE_URL;


export class EisService{

    createData(data){
        console.log("APIGEE_URL" + apigee_url);
       return axios.post(apigee_url,data);
    }

}

const EisService1 = new EisService();

export default EisService1;