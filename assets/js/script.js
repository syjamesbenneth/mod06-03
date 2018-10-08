// let size = "M";
// switch (size){
// 	case "S":
// 		// alert("small");
// 		// break;
// 	case "M":
// 		alert("medium");
// 		break;
// 	case "L":
// 		alert("large");
// 		break;
// 	default:
// 		alert("invalid size");

// }


// let entry = "1";
// switch (entry){
// 	case "1":
// 		document.output.button1.value = "On the 1st day of Christmas.";
// 		break;
// 	case "2":
// 		alert("On the 2nd day of Christmas.");
// 		break;
// 	case "3":
// 		alert("On the 3rd day of Christmas.");
// 		break;
// 	case "4":
// 		alert("On the 4th day of Christmas.");
// 		break;
// 	default:
// 		alert("Not Christmas yet.");


const getLyric = () => {
	//input
	let day = Number(document.getElementById('day').value);
	//error checking
	let no_error_flag = true;
	if ((day > 12) || (day < 0)) {
		no_error_flag = false;
	}
	if (no_error_flag){
		//process and output
		switch (day){
			case 1:
			document.getElementById('result').innerHTML = "On the first day of Christmas";
			break;
		
			case 2:
			document.getElementById('result').innerHTML = "On the second day of Christmas";
			break;

			case 3:
			document.getElementById('result').innerHTML = "On the third day of Christmas";
			break;
			default:
			document.getElementById('result').innerHTML = "On the " + day + "th day of Christmas";
		}
	}
}