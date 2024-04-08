const myObject = {
    js: 'Javascript',
    cpp: 'C++',
    rb: 'ruby',
    swift: 'swift by apple'
}

for (const key in myObject) {
    // console.log(`${key} :- ${myObject[key]}`);
}

const programming = ['js' ,'ruby' , 'python' , 'java' , 'cpp']

for (const key in programming) {
    console.log(programming[key]);
}