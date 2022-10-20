const data1 = new Date();
console.log(data1);

const data2 = new Date("March 06 2019 09:30");
console.log(data2);

const data3 = new Date(2019,02,06,9,30);
console.log(data3);

data3.setFullYear(2030);
console.log(data3);