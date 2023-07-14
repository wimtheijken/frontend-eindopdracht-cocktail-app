import jwt_decode from "jwt-decode"
export function checkTokenValidity( token ) {
    const decodedToken = jwt_decode( token );
    // const expirationTime = (decodedToken.exp - 86340) * 1000; // token 1 minuut geldig - 60
    const expirationTime = (decodedToken.exp - 82800) * 1000; // token 1 uur geldig - 3600
    // const expirationTime = decodedToken.exp * 1000; // token 24 uur geldig - 86400
    const isExpired = Date.now() > expirationTime;
    return !isExpired;
}