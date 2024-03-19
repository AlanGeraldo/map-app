<script lang="ts" src="./SearchBar.ts" />

<template>
  <div class="searchbar-container">
    <input v-model="searchTerm" type="text" class="form-control" placeholder="Buscar lugares..." />

    <SearchResults />
  </div>

</template>

<style scoped>
.searchbar-container {
  position: fixed;
  top: 30px;
  left: 30px;
  background-color: white;
  box-shadow: 4px 8px 12px rgba(0, 0, 0, 0.9);
  width: 250px;
  border-radius: 8px;
  overflow: hidden;
  padding: 4px;
}
</style>
