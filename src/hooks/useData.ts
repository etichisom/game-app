import { CanceledError } from "axios";
import { useEffect, useState } from "react";
import apiClient from "../services/api-client";


interface FecthResponse<T>{
    results: T[]
}
const useData=<T>(url:string)=>{
  const [data , setData] = useState<T[]>([]);
  const [loading , setLoading] = useState(false);
  const [error , setError] = useState("");
   
  useEffect(()=>{
    setLoading(true)
    apiClient.get<FecthResponse<T>>(url).then((e)=>{
     setData(e.data.results);
     setLoading(false)
    }).catch((e)=>{
        setLoading(false)
      if(e instanceof CanceledError){
        return
      }
      setError(e.message);
    })
  },[url])
  
  return{data, error,loading}
}

export default useData;