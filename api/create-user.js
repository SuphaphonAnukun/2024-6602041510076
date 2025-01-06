const axios = require("axios");
const API_URL = "http://192.168.1.86:8080/api/auth/local/register";
const API_TOKEN = "bearer 1f584da5c1b574b3ca87ebbef7200980ac208d7a3bc63dce4776078365b2a311aee4fa45ff9b39094d8f8d4b58e40bb3a4f1932c03b60c2abc644f21ec5b46e372fb415fb918d81babd049f8a9843fcbe8eb42c568913227f006d7327ae516319aef9eb4d2294957c4530bfea7113e6a3753b95bc457508c3f3aa40f4d2e5ae0";
const payload ={
    username : "Suphaphon",
    email : "s6602041510076@email.kmutnb.ac.th",
    password : "Suphaphon_20010503",
};

axios
  .post(API_URL, payload, {
    headers: {
      "Content-Type": "application/json",
      Authorization: API_TOKEN,
    },
  })
  .then((response) => {
    console.log("Pass", response.data);
  })
  .catch((err) => {
    console.log("Not pass ", err.massage);
  });