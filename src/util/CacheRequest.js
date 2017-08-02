import React from 'react';
import { AsyncStorage } from 'react-native'
import axios from 'axios';
import { API_KEY, HASH, TS } from './properties'

export default class RequestCache {
  static get(key, url, discardCache = false) {
    try {
      if (discardCache) {
        AsyncStorage.removeItem(key);
      }
      return AsyncStorage.getItem(key)
        .then((value) => {
          if (value !== null) {
            if (value.url !== url) {
              _doRequest(url);
            }
            return new Promise((resolve, reject) => {
              resolve(JSON.parse(value.data));
            });
          } else {
            return _doRequest(url);
          }
        });

    } catch (error) {
      console.error('Error on CacheRequest ', error);
    }
  }

  _doRequest(url) {
    let requiredParams = `apikey=${API_KEY}&hash=${HASH}&ts=${TS}`;
    let finalUrl = url;
    if (url.indexOf('?') > -1) {
      finalUrl = url + '&' + requiredParams;
    } else {
      finalUrl = url + '?' + requiredParams;
    }
    return axios.get(finalUrl)
      .then((response) => {
        AsyncStorage.setItem(key, JSON.stringify({url: url, data: response.data.data.results}));
        return response.data.data.results;
      });
  }
}