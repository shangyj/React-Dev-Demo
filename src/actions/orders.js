import { ORDER } from './../constants/actionTypes';
import cFetch from './../utils/cFetch';

import { API_CONFIG } from './../config/api';

export const fetchOrders = (params = { page: 1, per_page: 10 }) => {
  return {
    type: ORDER,
    payload: cFetch(API_CONFIG.orders, { method: "GET", params: params })
  };
};
