import React, {useEffect, useState} from 'react'
import firebase from '../firebase/config'

const useApi = () => {

  useEffect(() =>{
    async function request() {
      try {
        setError(false);
        setLoading(true);
  
  
        const db = firebase.firestore()
        const responseData = await db.collection('avengers-characters').get()
        
        const avengers = responseData.docs.map(doc => ({...doc.data(), id: doc.id}))

        setLoading(false)
        setData(avengers);
  
      } catch (error) {
        setLoading(false);
        setError(false);
        console.log('API #####', error);
      }
    }
    
    request()
  },[])


  
  let [data, setData] = useState<any>([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  return {data, error, loading};
};

export default useApi;