import axios from 'axios'

const APIURL = process.env.APIURL;

export const api = axios.create({
  baseURL: APIURL? APIURL : 'localhost:1337'
});
