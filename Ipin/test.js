import http from 'k6/http';
import {sleep} from 'k6';

export const options = {
    iterations:50,
    vus:10,
}

export default function(){
    const res = http.get('http://10.201.1.138:800/eazyn/login.php');
    res.submitForm({
        formSelector: 'form',
        fields: { username: 'mutiara', password: '123456' },
      });
    

    sleep(3);
}