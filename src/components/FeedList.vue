<template>
    <div>
      <h2>Liste des Flux</h2>
      <ul>
        <li v-for="feed in feeds" :key="feed.id">
          <router-link :to="'/news/' + feed.id">{{ feed.title }}</router-link>
          <button @click="deleteFeed(feed.id)">🗑 Supprimer</button>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        feeds: JSON.parse(localStorage.getItem('feeds')) || []
      };
    },
    methods: {
      deleteFeed(id) {
        this.feeds = this.feeds.filter(feed => feed.id !== id);
        localStorage.setItem('feeds', JSON.stringify(this.feeds));
      }
    }
  };
  </script>
  