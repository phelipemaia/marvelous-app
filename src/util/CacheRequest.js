import React from 'react';
import { AsyncStorage } from 'react-native'
import axios from 'axios';
import { API_KEY, HASH, TS } from './properties'

export default class RequestCache {
  static get(key, url) {
    try {
      return AsyncStorage.getItem(key)
        .then((value) => {
          if (value !== null){
            return new Promise((resolve, reject) => {
              resolve(JSON.parse(value));
            });
          } else {
            let requiredParams = `apikey=${API_KEY}&hash=${HASH}&ts=${TS}`;
            let finalUrl = url;
            if (url.indexOf('?') > -1) {
              finalUrl = url + '&' + requiredParams;
            } else {
              finalUrl = url + '?' + requiredParams;
            }
            return axios.get(finalUrl)
              .then((response) => {
                AsyncStorage.setItem(key, JSON.stringify(response.data.data.results));
                return response.data.data.results;
              });
          }
        });

    } catch (error) {
      console.error('Error on CacheRequest ', error);
    }
  }
}