module.exports = function toReadable (number) {
    let arr =[];
    if (number === 0){
        return 'zero';
    }
    if (number >= 100){
        number = number.toString().split('');
        switch (number[0]) {
        case '1':
        arr.push('one hundred');
            break;
        case '2':
        arr.push('two hundred');
            break;
        case '3':
        arr.push('three hundred');
            break;
        case '4':
        arr.push('four hundred');
            break;
        case '5':
        arr.push('five hundred');
            break;
        case '6':
        arr.push('six hundred');
            break;
        case '7':
        arr.push('seven hundred');
            break;
        case '8':
        arr.push('eight hundred');
            break;
        case '9':
        arr.push('nine hundred');
            break;
      
            default:
            break;
    }
    number = number.splice(1, 2);
    number = number.join('');
    number = +number
 	
 } 

 	if (number >= 10 && number < 20){
 		 number = number.toString().split('');
 		switch (number[1]) {
            case '0':
            arr.push('ten');
                break;
            case '1' :
            arr.push('eleven');
                break;
            case '2':
            arr.push('twelve');
                break;
            case '3':
            arr.push('thirteen');
                break;
            case '4':
            arr.push('fourteen');
                break;
            case '5':
            arr.push('fifteen');
            break;
            case '6':
            arr.push('sixteen');
                break;
            case '7':
            arr.push('seventeen');
                break;
            case '8':
            arr.push('eighteen');
            break;
            case '9':
            arr.push('nineteen');
                break;
                
                default:
                    break;
    }
    return arr.join(' ');
     	} else if ( number >= 20 && number < 100 ){
 		 number = number.toString().split('');
 		switch (number[0]) {

            case '2':
            arr.push('twenty');
                break;
            case '3':
            arr.push('thirty');
                break;
            case '4':
            arr.push('forty');
                break;
            case '5':
            arr.push('fifty');
            break;
            case '6':
            arr.push('sixty');
                break;
            case '7':
            arr.push('seventy');
                break;
            case '8':
            arr.push('eighty');
            break;
            case '9':
            arr.push('ninety');
                break;
                
                default:
                    break;

    }
   
    number = number.splice(1, 1);
    number = number.join('');
    number = +number
 	} 
 	 if (number > 0 && number < 10) { 
 	 	 number = number.toString().split('');
 	 	 
 		switch (number[0]) {
             
 			case '1':
            arr.push('one');
                break;
            case '2':
            arr.push('two');
                break;
            case '3':
            arr.push('three');
                break;
            case '4':
            arr.push('four');
                break;
            case '5':
            arr.push('five');
            break;
            case '6':
            arr.push('six');
                break;
            case '7':
            arr.push('seven');
                break;
            case '8':
            arr.push('eight');
            break;
            case '9':
            arr.push('nine');
                break;
                
                default:
                    break;
    }

 	}


         
return arr.join(' ');
}
