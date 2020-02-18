import axios from 'axios';
import {GET_WEATHER} from './types';

export const getWeather = () => async dispatch => {
  try {
    const res = await axios.get(
      'http://api.openweathermap.org/data/2.5/forecast?id=524901&appid=5d00bffa7e6de2587d1fdd17383d390a',
    );
    dispatch({
      type: GET_WEATHER,
      payload: res.data,
    });
  } catch (err) {
    //console.log(err);
  }
};
