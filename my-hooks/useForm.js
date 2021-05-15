import useSWR from 'swr';
import Formulario from '../my-components/Formulario';
import Texto from '../my-components/Texto';
import Numero from '../my-components/Numero';

const fetcher = (...args) => fetch(...args).then(res => res.json())
const API_SERVER_URL = 'http://localhost:8080/api/v1'

export default function useForm (id) {
    console.log(Date.now())
    const { data, error } = useSWR(`${API_SERVER_URL}/formulario/${id}`, fetcher);
    console.log(Date.now());
    console.log(data);
    console.log("100"+Date.now());

    
    const miForm = JSON.stringify(data);
    console.log(miForm);
    return {
      form: data,
      isLoading: !error && !data,
      isError: error
    }
  }
