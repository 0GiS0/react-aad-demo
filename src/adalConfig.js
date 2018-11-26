import { AuthenticationContext, adalFetch, withAdalLogin } from 'react-adal';
import dotenv from 'dotenv';
dotenv.config();

export const endpoint =process.env.REACT_APP_CLIENT_ID;

export const adalConfig = {
    tenant: process.env.REACT_APP_TENANT_ID,
    clientId: process.env.REACT_APP_CLIENT_ID,
    endpoints: {
        api: endpoint,
    },
    cacheLocation: 'localStorage',
};

export const authContext = new AuthenticationContext(adalConfig);

export const adalApiFetch = (fetch, url, options) =>
    adalFetch(authContext, adalConfig.endpoints.api, fetch, url, options);

export const withAdalLoginApi = withAdalLogin(authContext, adalConfig.endpoints.api);