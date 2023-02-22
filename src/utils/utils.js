import MD5 from "crypto-js/md5";

const getHash = (ts, privateKey, publicKey) => {
    return MD5(ts + privateKey + publicKey).toString();
};

let API_URL = process.env.REACT_APP_BASE_URL;

const fetchCharacters = async (name) => {
    let endpoint = `${API_URL}/v1/public/characters`;

    let ts = Date.now().toString();
    let apiKey = process.env.REACT_APP_API_KEY;
    let privateKey = process.env.REACT_APP_PRIVATE_KEY;
    let hash = getHash(ts, privateKey, apiKey);
    let limit = 100;
    let url = `${endpoint}?ts=${ts}&apikey=${apiKey}&hash=${hash}&nameStartsWith=${name}&limit=${limit}`;

    try {
        let response = await fetch(url);
        let data = await response.json();
        console.log(data);
        return data;
    } catch (err) {
        console.error(err);
        return;
    }
};

const fetchCharactersByCharacterID = async (id) => {
    let endpoint = `${API_URL}/v1/public/characters/${id}`;

    let ts = Date.now().toString();
    let apiKey = process.env.REACT_APP_API_KEY;
    let privateKey = process.env.REACT_APP_PRIVATE_KEY;
    let hash = getHash(ts, privateKey, apiKey);
    let limit = 100;
    let url = `${endpoint}?ts=${ts}&apikey=${apiKey}&hash=${hash}&limit=${limit}`;

    try {
        let response = await fetch(url);
        let data = await response.json();
        console.log(data);
        return data;
    } catch (err) {
        console.error(err);
        return;
    }
};

const fetchComicsByCharacterID = async (id) => {
    let endpoint = `${API_URL}/v1/public/characters/${id}/comics`;

    let ts = Date.now().toString();
    let apiKey = process.env.REACT_APP_API_KEY;
    let privateKey = process.env.REACT_APP_PRIVATE_KEY;
    let hash = getHash(ts, privateKey, apiKey);
    let limit = 100;
    let url = `${endpoint}?ts=${ts}&apikey=${apiKey}&hash=${hash}&limit=${limit}`;

    try {
        let response = await fetch(url);
        let data = await response.json();
        console.log(data);
        return data;
    } catch (err) {
        console.error(err);
        return;
    }
};

const fetchEventsByCharacterID = async (id) => {
    let endpoint = `${API_URL}/v1/public/characters/${id}/events`;

    let ts = Date.now().toString();
    let apiKey = process.env.REACT_APP_API_KEY;
    let privateKey = process.env.REACT_APP_PRIVATE_KEY;
    let hash = getHash(ts, privateKey, apiKey);
    let limit = 100;
    let url = `${endpoint}?ts=${ts}&apikey=${apiKey}&hash=${hash}&limit=${limit}`;

    try {
        let response = await fetch(url);
        let data = await response.json();
        console.log(data);
        return data;
    } catch (err) {
        console.error(err);
        return;
    }
};

const fetchSeriesByCharacterID = async (id) => {
    let endpoint = `${API_URL}/v1/public/characters/${id}/series`;

    let ts = Date.now().toString();
    let apiKey = process.env.REACT_APP_API_KEY;
    let privateKey = process.env.REACT_APP_PRIVATE_KEY;
    let hash = getHash(ts, privateKey, apiKey);
    let limit = 100;
    let url = `${endpoint}?ts=${ts}&apikey=${apiKey}&hash=${hash}&limit=${limit}`;

    try {
        let response = await fetch(url);
        let data = await response.json();
        console.log(data);
        return data;
    } catch (err) {
        console.error(err);
        return;
    }
};

const fetchStoriesByCharacterID = async (id) => {
    let endpoint = `${API_URL}/v1/public/characters/${id}/stories`;

    let ts = Date.now().toString();
    let apiKey = process.env.REACT_APP_API_KEY;
    let privateKey = process.env.REACT_APP_PRIVATE_KEY;
    let hash = getHash(ts, privateKey, apiKey);
    let limit = 100;
    let url = `${endpoint}?ts=${ts}&apikey=${apiKey}&hash=${hash}&limit=${limit}`;

    try {
        let response = await fetch(url);
        let data = await response.json();
        console.log(data);
        return data;
    } catch (err) {
        console.error(err);
        return;
    }
};

const fetchComicsByComicID = async (id) => {
    let endpoint = `${API_URL}/v1/public/comics/${id}`;

    let ts = Date.now().toString();
    let apiKey = process.env.REACT_APP_API_KEY;
    let privateKey = process.env.REACT_APP_PRIVATE_KEY;
    let hash = getHash(ts, privateKey, apiKey);
    let limit = 100;
    let url = `${endpoint}?ts=${ts}&apikey=${apiKey}&hash=${hash}&limit=${limit}`;

    try {
        let response = await fetch(url);
        let data = await response.json();
        console.log(data);
        return data;
    } catch (err) {
        console.error(err);
        return;
    }
};

const fetchEventsByEventID = async (id) => {
    let endpoint = `${API_URL}/v1/public/events/${id}`;

    let ts = Date.now().toString();
    let apiKey = process.env.REACT_APP_API_KEY;
    let privateKey = process.env.REACT_APP_PRIVATE_KEY;
    let hash = getHash(ts, privateKey, apiKey);
    let limit = 100;
    let url = `${endpoint}?ts=${ts}&apikey=${apiKey}&hash=${hash}&limit=${limit}`;

    try {
        let response = await fetch(url);
        let data = await response.json();
        console.log(data);
        return data;
    } catch (err) {
        console.error(err);
        return;
    }
};

const fetchSeriesBySeriesID = async (id) => {
    let endpoint = `${API_URL}/v1/public/series/${id}`;

    let ts = Date.now().toString();
    let apiKey = process.env.REACT_APP_API_KEY;
    let privateKey = process.env.REACT_APP_PRIVATE_KEY;
    let hash = getHash(ts, privateKey, apiKey);
    let limit = 100;
    let url = `${endpoint}?ts=${ts}&apikey=${apiKey}&hash=${hash}&limit=${limit}`;

    try {
        let response = await fetch(url);
        let data = await response.json();
        console.log(data);
        return data;
    } catch (err) {
        console.error(err);
        return;
    }
};

const fetchStoriesByStoryID = async (id) => {
    let endpoint = `${API_URL}/v1/public/stories/${id}`;

    let ts = Date.now().toString();
    let apiKey = process.env.REACT_APP_API_KEY;
    let privateKey = process.env.REACT_APP_PRIVATE_KEY;
    let hash = getHash(ts, privateKey, apiKey);
    let limit = 100;
    let url = `${endpoint}?ts=${ts}&apikey=${apiKey}&hash=${hash}&limit=${limit}`;

    try {
        let response = await fetch(url);
        let data = await response.json();
        console.log(data);
        return data;
    } catch (err) {
        console.error(err);
        return;
    }
};

const fetchComics = async (title) => {
    let endpoint = `${API_URL}/v1/public/comics`;

    let ts = Date.now().toString();
    let apiKey = process.env.REACT_APP_API_KEY;
    let privateKey = process.env.REACT_APP_PRIVATE_KEY;
    let hash = getHash(ts, privateKey, apiKey);
    let limit = 100;
    let url = `${endpoint}?ts=${ts}&apikey=${apiKey}&hash=${hash}&titleStartsWith=${title}&limit=${limit}`;

    try {
        let response = await fetch(url);
        let data = await response.json();
        console.log(data);
        return data;
    } catch (err) {
        console.error(err);
        return;
    }
};

const fetchCreators = async (name) => {
    let endpoint = `${API_URL}/v1/public/creators`;

    let ts = Date.now().toString();
    let apiKey = process.env.REACT_APP_API_KEY;
    let privateKey = process.env.REACT_APP_PRIVATE_KEY;
    let hash = getHash(ts, privateKey, apiKey);
    let limit = 100;
    let url = `${endpoint}?ts=${ts}&apikey=${apiKey}&hash=${hash}&nameStartsWith=${name}&limit=${limit}`;

    try {
        let response = await fetch(url);
        let data = await response.json();
        console.log(data);
        return data;
    } catch (err) {
        console.error(err);
        return;
    }
};

const fetchCreatorsByCreatorID = async (id) => {
    let endpoint = `${API_URL}/v1/public/creators/${id}`;

    let ts = Date.now().toString();
    let apiKey = process.env.REACT_APP_API_KEY;
    let privateKey = process.env.REACT_APP_PRIVATE_KEY;
    let hash = getHash(ts, privateKey, apiKey);
    let limit = 100;
    let url = `${endpoint}?ts=${ts}&apikey=${apiKey}&hash=${hash}&limit=${limit}`;

    try {
        let response = await fetch(url);
        let data = await response.json();
        console.log(data);
        return data;
    } catch (err) {
        console.error(err);
        return;
    }
};

const fetchEvents = async (name) => {
    let endpoint = `${API_URL}/v1/public/events`;

    let ts = Date.now().toString();
    let apiKey = process.env.REACT_APP_API_KEY;
    let privateKey = process.env.REACT_APP_PRIVATE_KEY;
    let hash = getHash(ts, privateKey, apiKey);
    let limit = 100;
    let url = `${endpoint}?ts=${ts}&apikey=${apiKey}&hash=${hash}&nameStartsWith=${name}&limit=${limit}`;

    try {
        let response = await fetch(url);
        let data = await response.json();
        console.log(data);
        return data;
    } catch (err) {
        console.error(err);
        return;
    }
};

const fetchSeries = async (title) => {
    let endpoint = `${API_URL}/v1/public/series`;

    let ts = Date.now().toString();
    let apiKey = process.env.REACT_APP_API_KEY;
    let privateKey = process.env.REACT_APP_PRIVATE_KEY;
    let hash = getHash(ts, privateKey, apiKey);
    let limit = 100;
    let url = `${endpoint}?ts=${ts}&apikey=${apiKey}&hash=${hash}&titleStartsWith=${title}&limit=${limit}`;

    try {
        let response = await fetch(url);
        let data = await response.json();
        console.log(data);
        return data;
    } catch (err) {
        console.error(err);
        return;
    }
};

const fetchStories = async (title) => {
    let endpoint = `${API_URL}/v1/public/stories`;

    let ts = Date.now().toString();
    let apiKey = process.env.REACT_APP_API_KEY;
    let privateKey = process.env.REACT_APP_PRIVATE_KEY;
    let hash = getHash(ts, privateKey, apiKey);
    let limit = 100;
    let url = `${endpoint}?ts=${ts}&apikey=${apiKey}&hash=${hash}&titleStartsWith=${title}&limit=${limit}`;

    try {
        let response = await fetch(url);
        let data = await response.json();
        console.log(data);
        return data;
    } catch (err) {
        console.error(err);
        return;
    }
};

const fetchComicsByCreatorID = async (id) => {
    let endpoint = `${API_URL}/v1/public/creators/${id}/comics`;

    let ts = Date.now().toString();
    let apiKey = process.env.REACT_APP_API_KEY;
    let privateKey = process.env.REACT_APP_PRIVATE_KEY;
    let hash = getHash(ts, privateKey, apiKey);
    let limit = 100;
    let url = `${endpoint}?ts=${ts}&apikey=${apiKey}&hash=${hash}&limit=${limit}`;

    try {
        let response = await fetch(url);
        let data = await response.json();
        console.log(data);
        return data;
    } catch (err) {
        console.error(err);
        return;
    }
};

const fetchEventsByCreatorID = async (id) => {
    let endpoint = `${API_URL}/v1/public/creators/${id}/events`;

    let ts = Date.now().toString();
    let apiKey = process.env.REACT_APP_API_KEY;
    let privateKey = process.env.REACT_APP_PRIVATE_KEY;
    let hash = getHash(ts, privateKey, apiKey);
    let limit = 100;
    let url = `${endpoint}?ts=${ts}&apikey=${apiKey}&hash=${hash}&limit=${limit}`;

    try {
        let response = await fetch(url);
        let data = await response.json();
        console.log(data);
        return data;
    } catch (err) {
        console.error(err);
        return;
    }
};

const fetchSeriesByCreatorID = async (id) => {
    let endpoint = `${API_URL}/v1/public/creators/${id}/series`;

    let ts = Date.now().toString();
    let apiKey = process.env.REACT_APP_API_KEY;
    let privateKey = process.env.REACT_APP_PRIVATE_KEY;
    let hash = getHash(ts, privateKey, apiKey);
    let limit = 100;
    let url = `${endpoint}?ts=${ts}&apikey=${apiKey}&hash=${hash}&limit=${limit}`;

    try {
        let response = await fetch(url);
        let data = await response.json();
        console.log(data);
        return data;
    } catch (err) {
        console.error(err);
        return;
    }
};

const fetchStoriesByCreatorID = async (id) => {
    let endpoint = `${API_URL}/v1/public/creators/${id}/stories`;

    let ts = Date.now().toString();
    let apiKey = process.env.REACT_APP_API_KEY;
    let privateKey = process.env.REACT_APP_PRIVATE_KEY;
    let hash = getHash(ts, privateKey, apiKey);
    let limit = 100;
    let url = `${endpoint}?ts=${ts}&apikey=${apiKey}&hash=${hash}&limit=${limit}`;

    try {
        let response = await fetch(url);
        let data = await response.json();
        console.log(data);
        return data;
    } catch (err) {
        console.error(err);
        return;
    }
};

export {
    fetchCharacters,
    fetchCharactersByCharacterID,
    fetchComicsByCharacterID,
    fetchEventsByCharacterID,
    fetchSeriesByCharacterID,
    fetchStoriesByCharacterID,
    fetchComicsByComicID,
    fetchEventsByEventID,
    fetchSeriesBySeriesID,
    fetchStoriesByStoryID,
    fetchComics,
    fetchCreators,
    fetchCreatorsByCreatorID,
    fetchEvents,
    fetchSeries,
    fetchStories,
    fetchComicsByCreatorID,
    fetchEventsByCreatorID,
    fetchSeriesByCreatorID,
    fetchStoriesByCreatorID
};