import axios from "axios";
import Cookies from "js-cookie";

const getHandler = async (URL, protect) =>{        
  const headers = {
      'Content-Type': 'application/json'
  };
  if(protect) headers['Authorization'] = `Bearer ${Cookies.get('token')}`
  const response={
    status:0,
    data:''
  };
  await axios.get(URL, headers)
            .then((res)=>{
                            response.status=1;
                            response.data=res.data
                            })
            .catch((err)=>{
                            response.status=0;
                            response.data=err.response.data
                            });
  return response                        
}

export default getHandler