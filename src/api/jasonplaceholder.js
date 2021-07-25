

import axios  from 'axios';
export default axios.create({
   headers:{
    'x-rapidapi-key':'76b69d9c58mshf5164bc8f48a017p13fa35jsnafcb698afcf4',
      'x-rapidapi-host':'healthruwords.p.rapidapi.com'
   },
    baseURL:'https://api.quotable.io'
})