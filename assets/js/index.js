"use strict";

// status pending

// status fullfilled (result - payload) -> then
// status rejected   -> catch

function promiseCb(resolve, reject) {
  // actions
  // resolve('succuss result');
  reject(new Error("something went wrong"));
}

const promise = new Promise(promiseCb);

promise
  .then((data) => console.log("data :>> ", data))
  .catch((err) => console.log("err :>> ", err));

// Promise.resolve([{ user: "Test" }]).then((data) =>
//   console.log("data :>> ", data)
// );
// Promise.reject().catch()

console.log("end of sync code");

// проміс - кіт Шредингера

const executor = function (resolve, reject) {
  if (Math.random() < 0.5) {
    resolve("cat is alive");
  } else {
    reject(new Error("cat is not alive"));
  }
};

const shredCat = new Promise(executor);

shredCat
  .then((data) => console.log("data :>> ", data))
  .catch((err) => console.log("err :>> ", err));

// промісифікувати setTimeout
// setTimeout(cb,1000)
// delay(1000).then(cb)

function delay(ms) {
  if (typeof ms !== "number") {
    rej(new TypeError("ms must be number"));
  }
  if (ms < 0 || Number.isInteger(ms)) {
    rej(new RangeError("ms must be positive integer value"));
  }
  const executor = function (res, rej) {
    setTimeout(res, ms);
  };
  return new Promise(executor);
}

// setTimeout(() => console.log('action is over '), 1000);
delay(1000)
  .then((data) => console.log("data :>> ", data))
  .catch((err) => console.log("err :>> ", err));

//___________________________________________________


const src = 'https://klike.net/uploads/posts/2019-01/1547365376_1.jpg';

loadImage(src)
  .then(img => {
    document.body.append(img);
  })
  .catch(e => console.log('e :>> ', e));

function loadImage(src) {
  return new Promise((res, rej) => {
    const img = document.createElement('img');
    img.src = src;
    img.onload = () => {
      res(img);
    };
    img.onerror = () => {
      rej(new Error('image was not loaded'));
    };
  });
}