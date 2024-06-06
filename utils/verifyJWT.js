import {jwtDecode} from 'jwt-decode';

export const verifyJWT = (token) => {
    return jwtDecode(token)
}