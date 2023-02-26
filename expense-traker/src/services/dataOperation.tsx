import axios from 'axios'
import IDataList from '../models/IDataList';

const DataUrl = process.env.REACT_APP_API_BASE_URL; 

const GetExpenseData= () => {
   return axios.get(`${DataUrl}/items`).then(response => response.data)
}

const pushDataFromUser = ( newpurchase : Omit<IDataList, 'id'> ) => {
   return axios.post<IDataList>(
       `${DataUrl}/items`,
       newpurchase,
       {
           headers: {
               'Content-Type': 'application/json'
           }
       }
   )
   .then( response => response.data )
};

export { GetExpenseData, pushDataFromUser }