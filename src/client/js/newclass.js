// $(document).on('ready', () => {
//   console.log('connected to newclass.js')
//   $('.postNewClass').on('submit', (eve)=> {
//     eve.preventDefault();
//     function convertTime(timeVal){
//       let initialTime = timeVal;
//       let timeArr = initialTime.split(':')
//       if(timeArr[0] > 12) {
//         timeArr[0] = parseInt(timeArr[0]);
//         timeArr[0] -= 12;
//         timeArr[0] = timeArr[0].toString();
//         return timeArr = timeArr.join(':') + ' pm'
//       }
//       else if(timeArr[0] == 0) {
//         timeArr[0] = '12';
//         return timeArr = timeArr.join(':') + ' am'
//       }
//       else {
//         return initialTime + ' am'
//       }
//     }
//     const className = $('.nameOfClass option:selected').val();
//     const description = $('.description').val()
//     const instructorId = $('.instructorID option:selected').attr()
//     console.log(instructorId);
//     const startTime = convertTime($('#start_time').val());
//     const endTime = convertTime($('#end_time').val());
//     const classSize = $('#size').val()
//   })
// })
