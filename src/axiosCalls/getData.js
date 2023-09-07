import { axiosInstance } from "./axiosInstance";

export const fetchData =  async()=>{
    let res;

    try{
         res = await axiosInstance.get("/posts"); 

    }catch(err){
        res =  err.resposne;
    }

            return res ?  res : "";

}