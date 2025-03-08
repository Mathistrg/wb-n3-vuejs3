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
        addFeed() {
            const newFeed = { id: Date.now(), title: this.title, url: this.url };
            let feeds = JSON.parse(localStorage.getItem('feeds')) || [];
            feeds.push(newFeed);
            localStorage.setItem('feeds', JSON.stringify(feeds));

            // Simuler l'ajout de news associées
            let fakeNews = [
            { id: 1, title: "Article Test 1", description: "Contenu 1", feedId: newFeed.id },
            { id: 2, title: "Article Test 2", description: "Contenu 2", feedId: newFeed.id }
            ];
            localStorage.setItem('news_' + newFeed.id, JSON.stringify(fakeNews));

            alert('Flux et news test ajoutés !');
        }
    }
  };
  </script>
  