
import moment from 'moment'

const toFixed = (num, l, tag2, tag) => {

    var arrNum = num.toString().split(".");
    var newNum = num.toString().replace(".","");
    var fLegnth = arrNum[1]?arrNum[1].length:0;
    if(l > fLegnth){
        var _l = Math.pow(10,fLegnth);
        var _num = num.toString().replace(".","");
    }else{
        var _l = Math.pow(10,l);
        var _num = newNum.substring(0,arrNum[0].length+l);
    }

    var ru = 0;
    if(tag == 1){
        return tag2?num.toFixed(l)*1:num.toFixed(l);
    }else if(tag == 2){
        ru = Math.ceil(_num)/_l;
    }else{
        ru = Math.floor(_num)/_l;
    }
    if(tag2){
        var arr = ru.toString().split(".");
        arr[1] = arr[1]?arr[1]:"";
        var l = tag2 - arr[1].length;
        for(var i = 0; i < l; i++){
            arr[1] += "0";
        }
        return arr[0] + "." + arr[1];
    }else{
        return ru;
    }
}

const formatNumber = (num) => {
    var nums = num.toString().split(".");
    var n = nums[0].replace(/\B(?=(\d{3})+$)/g,",");
    return nums[1]?n+"."+nums[1]:n;
}

const price = (value,float,tag,status) =>{

    if(!value && value !== 0){ return 0;}
    value = toFixed(value,float||0,tag,status);
    return formatNumber(value);
}

function dateFormat(value,formatString){
    formatString = formatString || 'YYYY-MM-DD';
    return moment(value).format(formatString);
}
export { 
	price,
    dateFormat
}