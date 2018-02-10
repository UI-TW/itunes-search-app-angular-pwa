const baseRoute =  'https://itunes-search-iypahdbpmn.now.sh';
const baseUrl = `${baseRoute}/api`;

const apisettings = {
    url: {
        login: `${baseUrl}/accounts/login`,
        signup: `${baseUrl}/accounts/signup`,
        upvote: `${baseUrl}/upvote`,
        search: `${baseUrl}/search`,
        getVapidKey: `${baseUrl}/getvapidkey`,
        subscribe: `${baseUrl}/subscribe`
    }
};

export default apisettings;