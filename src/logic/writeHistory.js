export default function writeHistory(obj, buttonName) {
    if(buttonName === 'c') {
        return {            
        }
    }
    if(buttonName !== '=') {
        return {            
            history: obj.history + buttonName,
        }
    }
    if (buttonName === '=') {
        let prev_history = localStorage.getItem('test');
        if(prev_history == null){
            prev_history = '';
        }
        if(!obj.result) {
            prev_history += ', ';
        }
        const history = prev_history + obj.history + ' ' + buttonName + ' ' + obj.total;
        localStorage.setItem('test', history);
        return { 
            history: ' ',
            result: true 
        }
    }
}
