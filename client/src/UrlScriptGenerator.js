import Axios from "axios";

const componentUrls = [
  process.env.KEN_URL,
  process.env.DAVID_URL,
  process.env.MATT_URL,
  process.env.LOUIS_URL,
];

const componentUrlPromises = componentUrls.map(url => {
  return Axios.get(url);
});

Promise.all(componentUrlPromises)
  .then(scripts => {
    scripts.forEach(script => {
      eval(script.data);
    });
  })
  .catch(err => {
    console.log(err);
  });
