<template>
    <div>
      <h1>Bienvenue sur DailyNews</h1>
  
      <h2>📢 Ajouter un Flux RSS</h2>
      <form @submit.prevent="addFeed">
        <input type="text" v-model="title" placeholder="Nom du flux" required />
        <input type="url" v-model="url" placeholder="Lien RSS" required />
        <button type="submit">Ajouter</button>
      </form>
  
      <h2>📰 Mes Flux RSS</h2>
      <ul v-if="feeds.length > 0">
        <li v-for="feed in feeds" :key="feed.id">
          <router-link :to="'/news/' + feed.id">{{ feed.title }}</router-link>
          <button @click="deleteFeed(feed.id)">🗑 Supprimer</button>
        </li>
      </ul>
      <p v-else>Aucun flux ajouté.</p>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        title: '',
        url: '',
        feeds: JSON.parse(localStorage.getItem('feeds')) || []
      };
    },
    methods: {
      addFeed() {
        if (!this.title || !this.url) {
          alert("Veuillez remplir tous les champs.");
          return;
        }
        const newFeed = { id: Date.now(), title: this.title, url: this.url };
  
        let feeds = JSON.parse(localStorage.getItem('feeds')) || [];
        feeds.push(newFeed);
        localStorage.setItem('feeds', JSON.stringify(feeds));
        this.feeds = feeds;
  
        // Ajouter des news fictives pour les tests
        let fakeNews = [
          { id: Date.now() + 1, title: "Actu 1", description: "Contenu 1", feedId: newFeed.id },
          { id: Date.now() + 2, title: "Actu 2", description: "Contenu 2", feedId: newFeed.id }
        ];
        localStorage.setItem('news_' + newFeed.id, JSON.stringify(fakeNews));
  
        this.title = '';
        this.url = '';
      },
      deleteFeed(feedId) {
        this.feeds = this.feeds.filter(feed => feed.id !== feedId);
        localStorage.setItem('feeds', JSON.stringify(this.feeds));
        localStorage.removeItem('news_' + feedId);
      }
    }
  };
  </script>
  