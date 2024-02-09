'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////

const renderCountry = function (data, className = '') {
  const html = `<article class="country ${className}">
    <img class="country__img" src="${data.flag}" />
    <div class="country__data">
      <h3 class="country__name">${data.name}</h3>
      <h4 class="country__region">${data.region}</h4>
      <p class="country__row"><span>👫</span>${(
        +data.population / 1000000
      ).toFixed(1)}</p>
      <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
      <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
    </div>
  </article>`;
  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};

const renderError = function (msg) {
  countriesContainer.insertAdjacentText('beforeend', msg);
  countriesContainer.style.opacity = 1;
};

const getJSON = function (url, errorMsg = 'Something went wrong') {
  return fetch(url).then(response => {
    if (!response.ok) throw new Error(`${errorMsg} (${response.status})`);

    return response.json();
  });
};
// const renderCountryandneighbour = function (country) {
//   const request = new XMLHttpRequest();
//   request.open('GET', `https://restcountries.com/v2/name/${country}`);
//   request.send();

//   request.addEventListener('load', function () {
//     const [data] = JSON.parse(this.responseText);
//     console.log(data);
//     renderCountry(data);

//     const [neighbour] = data.borders;
//     if (!neighbour) return;

//     const request2 = new XMLHttpRequest();
//     request2.open('GET', `https://restcountries.com/v2/alpha/${neighbour}`);
//     request2.send();

//     request2.addEventListener('load', function () {
//       const data2 = JSON.parse(this.responseText);
//       console.log(data2);

//       renderCountry(data2, 'neighbour');
//     });
//   });
// };

// renderCountryandneighbour('bharat');
// // renderCountry("usa")

// const renderCountryandneighbour = function (country) {
//      getJSON(`https://restcountries.com/v2/name/${country}`,'country is not identify')
//     .then(data => {
//         renderCountry(data[0]);
//         const neighbour = data[0].borders[0];
//         return  getJSON(`https://restcountries.com/v2/alpha/${neighbour}`,'country is not identify')
//     })
//     .then(Response=> Response.json())
//     .then(data=> renderCountry(data,'neighbour'))
//     .catch(err => {
//         console.error(err);
//         renderError(`Something went wrong 💥💥 ${err.message}. Try again!`)})
//     .finally(()=>{
//        countriesContainer.style.opacity = 1;
//     })
// };

// btn.addEventListener('click',function(){
//     renderCountryandneighbour("bharat")
// })
// renderCountryandneighbour("fgsdrgsdf")

// const whereAmI = function (lat, lng) {
//   fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`)
//     .then(res => {
//       if (!res.ok) throw new Error(`Problem with geocoding ${res.status}`);
//       return res.json();
//     })
//     .then(data => {
//       console.log(data);
//       console.log(`You are in ${data.city}, ${data.country}`);

//       return fetch(`https://restcountries.eu/rest/v2/name/${data.country}`);
//     })
//     .then(res => {
//       if (!res.ok) throw new Error(`Country not found (${res.status})`);

//       return res.json();
//     })
//     .then(data => renderCountry(data[0]))
//     .catch(err => console.error(`${err.message} 💥`));
// };
// whereAmI(52.508, 13.381);
// // whereAmI(19.037, 72.873);
// // whereAmI(-33.933, 18.474);

// setTimeout(() => {
//   console.log("hyy , i am timer")
// }, 0);
// Promise.resolve('hyy i am promise').then((res)=>console.log(res));

const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};

// wait(2)
//   .then(()=> {
//     console.log('2 second passed');
//     return wait(3);
//   })
//   .then(()=> {
//     console.log('3 seocnd passed');
//   });

// const getCurrentLocation = function(){
//   return new Promise(function(resolve,reject){
//     navigator.geolocation.getCurrentPosition(resolve,reject)
//   })
// }
// getCurrentLocation().then(res=>console.log(res))
// .catch(err=>console.log(err));

////////----CHALLENGE - 2 /////////////
// const imgContainer = document.querySelector('.images');

// const createImage = function (imgPath) {
//   return new Promise(function (resolve, reject) {
//     const img = document.createElement('img');
//     img.src = imgPath;

//     img.addEventListener('load', function () {
//       imgContainer.append(img);
//       resolve(img);
//     });

//     img.addEventListener('error', function () {
//       reject(new Error('Image not found'));
//     });
//   });
// };

// createImage(
//   'https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg'
// )
//   .then(img => {
//     currentImg = img;
//     console.log('Image 1 loaded');
//     return wait(2);
//   })
//   .then(() => {
//     currentImg.style.display = 'none';
//     return createImage('img/img-2.jpg');
//   })
//   .then(img => {
//     currentImg = img;
//     console.log('Image 2 loaded');
//     return wait(2);
//   })
//   .then(() => {
//     currentImg.style.display = 'none';
//   })
//   .catch(err => console.error(err));

///----------CHALLENGE - 3 ----------////////

const imgContainer = document.querySelector('.images');

const createImage = function (imgPath) {
  return new Promise(function (resolve, reject) {
    const img = document.createElement('img');
    img.src = imgPath;

    img.addEventListener('load', function () {
      imgContainer.append(img);
      resolve(img);
    });

    img.addEventListener('error', function () {
      reject(new Error('Image not found'));
    });
  });
};

const loadNPause = async function () {
  try {
    let currentImg = await createImage(
      'https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg'
    );
    console.log('Image 1 loaded');
    await wait(2);
    currentImg.style.display = 'none';
    currentImg = await createImage('img/img-2.jpg');
    console.log('Image 2 loaded');
    await wait(2);
    currentImg.style.display = 'none';
  } catch (error) {
    console.log(error);
  }
};

// loadNPause();

const loadAll = async function(imags){
  try {

    const imgs = imags.map(async imag =>await createImage(imag))
    console.log(imgs);

    const imgsEl = await Promise.all(imgs);
    console.log(imgsEl)

    imgsEl.forEach(image => image.classList.add('parallel'));
  } catch (error) {
    console.log(error)
  }
}

loadAll(['img/img-1.jpg', 'img/img-2.jpg']);