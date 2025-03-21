// function weekDay(dayNum){
//     switch (dayNum) { // 8
//       case 1:
//           console.log(`${dayNum} - Monday`);
//           break;
//       case 2:
//           console.log(`${dayNum} - Tue`);
//           break;
//       case 3:
//           console.log(`${dayNum} - Wed`);
//           break;
//       case 4:
//           console.log(`${dayNum} - Thur`);
//           break;
//       case 5:
//           console.log(`${dayNum} - Fri`);
//           break;
//       case 6:
//           console.log(`${dayNum} - Saturday`);
//           break;
//       case 7:
//           console.log(`${dayNum} - Sunday`);
//           break;
//       default:
//           console.log(`Invalid Data: ${dayNum}`);
//           break;
//     }
//   }
//   weekDay(9);
  // 1 -- Monday
  // 2 -- Tuesday
  // 3 -- Wed
  // 7 -- Sunday

  function monthOfYear(month) {
    switch (month) {
        case 1:
            console.log(`${month}-January`);
            break;
        case 2:
            console.log(`${month}-Feb`);
            break;
         case 3:
            console.log(`${month}-March`);
            break;
        case 4:
            console.log(`${month}-April`);
             break;
        case 5:
            console.log(`${month}-May`);
            break;
        case 6:
            console.log(`${month}-June`);
            break;
        case 7:
            console.log(`${month}-Jully`);
            break;   
        case 8:
            console.log(`${month}-August`);
            break;
        case 9:
            console.log(`${month}-Sept`);
            break;
        case 10:
            console.log(`${month}-Oct`);
            break;
        case 11:
             console.log(`${month}-Nov`);
            break;
        case 12:
            console.log(`${month}-Dec`);
            break;                         
        default:
            console.log(`Invalid data: ${month}`); 
            break;
    }
  }
  monthOfYear(0);
  monthOfYear(2);
  monthOfYear(5);
  monthOfYear(12);
  monthOfYear(15);
  monthOfYear(100);