export default function writeHistory(obj, buttonName) {
    console.log('TY', obj, buttonName);
    const len = obj.history.length; 
    if(buttonName === 'c') {
        return {
            history: [],
        }
    }
    if(buttonName !== '=') {
        if(len) {
            obj.history[len-1] = obj.history[len-1] + buttonName;
        }else {
            obj.history = [buttonName];
        }
        return {            
            history: obj.history,
        }
    }
    if (buttonName === '=') {
        let prevHistory = JSON.parse(localStorage.getItem('history'));
        if(prevHistory == null){
            prevHistory = [];
        }
        const history = [...prevHistory, obj.history[len-1] + buttonName  + obj.total];
        localStorage.setItem('history', JSON.stringify(history));
        return { 
            history: [obj.total],
            result: true, 
        }
    }
}
