const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

const getAuthHeader = () => {
  const token = localStorage.getItem('userToken');
  return token ? { Authorization: `Bearer ${token}` } : {};
};

export const customerApi = {
  // Auth
  register: async (data: any) => {
    const response = await fetch(`${API_URL}/api/auth/register`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    return response.json();
  },

  login: async (email: string, password: string) => {
    const response = await fetch(`${API_URL}/api/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });
    return response.json();
  },

  logout: async () => {
    const response = await fetch(`${API_URL}/api/auth/logout`, {
      method: 'POST',
      headers: getAuthHeader(),
    });
    return response.json();
  },

  getProfile: async () => {
    const response = await fetch(`${API_URL}/api/auth/profile`, {
      headers: getAuthHeader(),
    });
    return response.json();
  },

  // Products
  getProducts: async (params?: Record<string, any>) => {
    const query = new URLSearchParams(params).toString();
    const response = await fetch(`${API_URL}/api/products?${query}`);
    return response.json();
  },

  getProduct: async (id: string) => {
    const response = await fetch(`${API_URL}/api/products/${id}`);
    return response.json();
  },

  // Categories
  getCategories: async () => {
    const response = await fetch(`${API_URL}/api/categories`);
    return response.json();
  },

  // Orders
  createOrder: async (data: any) => {
    const response = await fetch(`${API_URL}/api/orders`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        ...getAuthHeader(),
      },
      body: JSON.stringify(data),
    });
    return response.json();
  },

  getOrders: async () => {
    const response = await fetch(`${API_URL}/api/orders`, {
      headers: getAuthHeader(),
    });
    return response.json();
  },

  getOrder: async (id: string) => {
    const response = await fetch(`${API_URL}/api/orders/${id}`, {
      headers: getAuthHeader(),
    });
    return response.json();
  },
};
