let host;

if(process.env.NODE_ENV == "test"){
  host = "http://localhost:4000";
}else{
  host = location.origin;
}

const baseUri = host + "/test";
export const API_CONFIG = {
  host: host,
  baseUri: baseUri,
  auth: 'auth',
  users: 'users'
};
