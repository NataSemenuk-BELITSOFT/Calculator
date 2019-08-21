import calculate from "./calculate";
export default function writeHistory(obj, buttonName) {
    if(buttonName === 'c') {
        return {}
    }
    if(buttonName != '=') {
        return {
            history: obj.history + buttonName
        }
    }
    if (buttonName === '=') {
        return { 
            history: obj.history + buttonName + obj.total
        }
    }
}