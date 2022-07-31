import Axios from 'axios';
import {API_HOST} from '../../config';
import {getData} from '../../utils';

export const getOrder = () => dispatch => {
  getData('token').then(resToken => {
    Axios.get(`${API_HOST.url}/transaction`, {
      headers: {
        Authorization: resToken.value,
      },
    })
      .then(res => {
        dispatch({type: 'SET_ORDER', value: res.data.data.data});
      })
      .catch(err => {});
  });
};

//41890745139

//70012
//229456859956

export const getInProgress = () => dispatch => {
  getData('token').then(resToken => {
    Axios.all([
      Axios.get(`${API_HOST.url}/transaction?status=PENDING `, {
        headers: {
          Authorization: resToken.value,
        },
      }),
      Axios.get(`${API_HOST.url}/transaction?status=SUCCESS `, {
        headers: {
          Authorization: resToken.value,
        },
      }),
      Axios.get(`${API_HOST.url}/transaction?status=ON_DELIVERY `, {
        headers: {
          Authorization: resToken.value,
        },
      }),
    ])
      .then(
        Axios.spread((res1, res2, res3) => {
          const pending = res1.data.data.data;
          const success = res2.data.data.data;
          const onDeliery = res3.data.data.data;
          dispatch({
            type: 'SET_IN_PROGRESS',
            value: [...pending, ...success, ...onDeliery],
          });
        }),
      )
      .catch(err => {});
  });
};
export const getPastOrders = () => dispatch => {
  getData('token').then(resToken => {
    Axios.all([
      Axios.get(`${API_HOST.url}/transaction?status=CANCELLED`, {
        headers: {
          Authorization: resToken.value,
        },
      }),
      Axios.get(`${API_HOST.url}/transaction?status=DELIVERED`, {
        headers: {
          Authorization: resToken.value,
        },
      }),
    ])
      .then(
        Axios.spread((res1, res2) => {
          const cancelled = res1.data.data.data;
          const delivered = res2.data.data.data;
          dispatch({
            type: 'SET_PAST_ORDERS',
            value: [...cancelled, ...delivered],
          });
        }),
      )
      .catch(err => {});
  });
};
