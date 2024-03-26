import { useCookies } from "react-cookie";

const IsLoggedIn = () => {
  const [cookies] = useCookies(["refreshToken"]);
  return cookies.refreshToken ? true : false;
};

export default IsLoggedIn;

// export default function IsLoggedIn(): boolean {
//   const cookies = document.cookie.split(';').reduce((acc: { [key: string]: string }, cookie) => {
//     const [name, value] = cookie.split('=');
//     acc[name.trim()] = value;
//     return acc;
//   }, {});
//   return cookies['refreshToken'] ? true : false;
// }
