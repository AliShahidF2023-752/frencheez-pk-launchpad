const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

const getAuthHeader = () => {
  const token = localStorage.getItem('adminToken');
  return token ? { Authorization: `Bearer ${token}` } : {};
};

export const api = {
  // Products
  getProducts: async (params?: Record<string, any>) => {
    const query = new URLSearchParams(params).toString();
    const response = await fetch(`${API_URL}/api/products?${query}`, {
      headers: getAuthHeader(),
    });
    return response.json();
  },

  getProduct: async (id: string) => {
    const response = await fetch(`${API_URL}/api/products/${id}`, {
      headers: getAuthHeader(),
    });
    return response.json();
  },

  createProduct: async (data: any) => {
    const response = await fetch(`${API_URL}/api/products`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        ...getAuthHeader(),
      },
      body: JSON.stringify(data),
    });
    return response.json();
  },

  updateProduct: async (id: string, data: any) => {
    const response = await fetch(`${API_URL}/api/products/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        ...getAuthHeader(),
      },
      body: JSON.stringify(data),
    });
    return response.json();
  },

  deleteProduct: async (id: string) => {
    const response = await fetch(`${API_URL}/api/products/${id}`, {
      method: 'DELETE',
      headers: getAuthHeader(),
    });
    return response.json();
  },

  // Categories
  getCategories: async () => {
    const response = await fetch(`${API_URL}/api/categories`, {
      headers: getAuthHeader(),
    });
    return response.json();
  },

  createCategory: async (data: any) => {
    const response = await fetch(`${API_URL}/api/categories`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        ...getAuthHeader(),
      },
      body: JSON.stringify(data),
    });
    return response.json();
  },

  updateCategory: async (id: string, data: any) => {
    const response = await fetch(`${API_URL}/api/categories/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        ...getAuthHeader(),
      },
      body: JSON.stringify(data),
    });
    return response.json();
  },

  deleteCategory: async (id: string) => {
    const response = await fetch(`${API_URL}/api/categories/${id}`, {
      method: 'DELETE',
      headers: getAuthHeader(),
    });
    return response.json();
  },

  // Orders
  getOrders: async (params?: Record<string, any>) => {
    const query = new URLSearchParams(params).toString();
    const response = await fetch(`${API_URL}/api/orders?${query}`, {
      headers: getAuthHeader(),
    });
    return response.json();
  },

  updateOrderStatus: async (id: string, status: string) => {
    const response = await fetch(`${API_URL}/api/orders/${id}/status`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        ...getAuthHeader(),
      },
      body: JSON.stringify({ status }),
    });
    return response.json();
  },

  // Users
  getUsers: async (params?: Record<string, any>) => {
    const query = new URLSearchParams(params).toString();
    const response = await fetch(`${API_URL}/api/users?${query}`, {
      headers: getAuthHeader(),
    });
    return response.json();
  },

  updateUser: async (id: string, data: any) => {
    const response = await fetch(`${API_URL}/api/users/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        ...getAuthHeader(),
      },
      body: JSON.stringify(data),
    });
    return response.json();
  },

  deleteUser: async (id: string) => {
    const response = await fetch(`${API_URL}/api/users/${id}`, {
      method: 'DELETE',
      headers: getAuthHeader(),
    });
    return response.json();
  },

  // Media
  uploadFile: async (file: File) => {
    const formData = new FormData();
    formData.append('file', file);

    const response = await fetch(`${API_URL}/api/upload/single`, {
      method: 'POST',
      headers: getAuthHeader(),
      body: formData,
    });
    return response.json();
  },

  getMedia: async (params?: Record<string, any>) => {
    const query = new URLSearchParams(params).toString();
    const response = await fetch(`${API_URL}/api/upload?${query}`, {
      headers: getAuthHeader(),
    });
    return response.json();
  },

  deleteMedia: async (id: string) => {
    const response = await fetch(`${API_URL}/api/upload/${id}`, {
      method: 'DELETE',
      headers: getAuthHeader(),
    });
    return response.json();
  },
};
