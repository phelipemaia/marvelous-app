import React from 'react';
import { AsyncStorage } from 'react-native'
import axios from 'axios';
import { API_KEY, HASH, TS } from './properties'
import { List } from 'immutable';

export default class RequestCache {
  static get(key, url, offset, discardCache = false) {
    try {
      if (discardCache) {
        AsyncStorage.removeItem(key);
      }

      if (offset === 0) {
        return AsyncStorage.getItem(key)
          .then((value) => {
            if (value !== null) {
              let cacheValue = JSON.parse(value);
              if (cacheValue.data) {
                return new Promise((resolve, reject) => {
                  resolve(cacheValue.data);
                });
              }
            } else {
              return RequestCache._doRequest(key, url, offset);
            }
          });
      } else {
        return RequestCache._doRequest(key, url, offset);
      }

    } catch (error) {
      console.error('Error on CacheRequest ', error);
    }
  }

  static _doRequest(key, url, offset, data) {
    let requiredParams = `apikey=${API_KEY}&hash=${HASH}&ts=${TS}`;
    let finalUrl = url;
    if (url.indexOf('?') > -1) {
      finalUrl = url + '&' + requiredParams;
    } else {
      finalUrl = url + '?' + requiredParams;
    }
    return axios.get(finalUrl)
      .then((response) => {
        let finalData = response.data.data.results;
        if (data) {
          finalData = List(data).concat(response.data.data.results).toArray();
        }
        AsyncStorage.setItem(key, JSON.stringify({offset: offset, data: finalData}));
        return finalData;
      });
  }
}