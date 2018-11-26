import { authContext, endpoint } from './adalConfig';
import decode from 'jwt-decode';

export default class AADService {    

    login() {
        authContext.login();
    }

    loggedIn() {
        return this.getUser() ? true : false;
    }

    logout() {
        authContext.logOut();
    }

    getToken() {
        return authContext.getCachedToken(endpoint);
    }

    getUser() {
        return authContext.getCachedUser();
    }

    getClaims() {
        return decode(this.getToken());
    }

    getRoles() {

        const claims = this.getClaims();

        if (claims.hasOwnProperty('roles')) {
            return claims.roles;
        }

        return null;
    }

    isInRole(role) {

        if (this.getRoles()) {
            for (var i = 0; i < this.getRoles().length; i++) {
                if (this.getRoles()[i] === role)
                    return true;
            }
        }
        return false;
    }
}