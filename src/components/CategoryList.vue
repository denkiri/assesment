<template>
    <div class="category-container">
      <h1>Categories</h1>
      <div v-if="isLoading" class="loading">Loading...</div>
      <div v-if="error" class="error">{{ error }}</div>
  
      <div v-if="!isLoading && !error" class="categories-grid">
        <div class="category-card" v-for="category in categories" :key="category">
          <p>{{ category }}</p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { useCategoryStore } from '../stores/categoryStore';
  import { onMounted } from 'vue';
  
  export default {
    setup() {
      const categoryStore = useCategoryStore();
  
      onMounted(() => {
        categoryStore.fetchCategories();
      });
  
      return {
        categories: categoryStore.categories,
        isLoading: categoryStore.isLoading,
        error: categoryStore.error,
      };
    },
  };
  </script>
  
  <style scoped>
  .category-container {
    text-align: center;
    margin: 20px;
  }
  
  h1 {
    font-size: 2.5rem;
    margin-bottom: 20px;
    color: #333;
  }
  
  .loading, .error {
    font-size: 1.2rem;
    color: #ff0000;
    margin-top: 20px;
  }
  
  .categories-grid {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 15px;
    margin-top: 20px;
  }
  
  .category-card {
    background-color: #f0f0f0;
    border-radius: 10px;
    padding: 15px;
    width: 150px;
    text-align: center;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease;
  }
  
  .category-card:hover {
    transform: scale(1.05);
  }
  
  .category-card p {
    margin: 0;
    font-size: 1.2rem;
    font-weight: bold;
    color: #333;
  }
  </style>
  