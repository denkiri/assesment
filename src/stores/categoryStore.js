// stores/categoryStore.js
import { defineStore } from 'pinia';
import axios from 'axios';

export const useCategoryStore = defineStore('categoryStore', {
  state: () => ({
    categories: [], // holds the fetched categories
    isLoading: false,
    error: null,
  }),
  actions: {
    async fetchCategories() {
      this.isLoading = true;
      this.error = null;
      try {
        const response = await axios.get('https://api.chucknorris.io/jokes/categories'); 
        this.categories = response.data;
      } catch (err) {
        this.error = 'Failed to fetch categories';
      } finally {
        this.isLoading = false;
      }
    },
  },
});
