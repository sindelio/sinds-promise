const all = (promiseArray) => {
  return new Promise((resolve, reject) => {
    let counter = 0;
    let size = promiseArray.length;
    let values = [];
    for(let i = 0; i < size; i++){
      promiseArray[i].then((value) => {
        values[i] = value;
        counter++;
        if(counter === size) resolve(values);
      });
    }
  });
}

const race = (promiseArray) => {
	return new Promise((resolve, reject) => {
		promiseArray.forEach(p => {
			p.then(resolve).catch(reject);
		});
	});
}

const resolve = (value) => {
	return new Promise((resolve, reject) => {
		resolve(value);
	});
}

const reject = (errorMessage) => {
	return new Promise((resolve, reject) => {
		reject(errorMessage);
	});
}

module.exports = {
	all,
	race,
	resolve,
	reject
}