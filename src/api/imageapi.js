
import axios  from 'axios';
export default axios.create({
  
    headers:{
        Authorization:'Client-ID Zm1vWhPNP6nRgkQrDJSZ6IKBZiq-wAdVdbv16fsB1iM'
    }
   ,
    baseURL:'https://api.unsplash.com'
})