<!-- src/App.vue -->
<template>
  <div id="app">
    <CategoryList />
  </div>
</template>

<script>
import CategoryList from './components/CategoryList.vue';

export default {
  components: {
    CategoryList,
  },
};
</script>
