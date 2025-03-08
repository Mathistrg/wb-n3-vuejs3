<template>
    <div>
      <h2>Articles du flux</h2>
      <select v-model="limit">
        <option value="10">10</option>
        <option value="50">50</option>
        <option value="100">100</option>
        <option value="all">Tout</option>
      </select>
      <ul>
        <li v-for="(news, index) in displayedNews" :key="index">
          <h3>{{ news.title }}</h3>
          <p>{{ news.description }}</p>
          <button @click="saveToPreferences(news)">⭐ Sauvegarder</button>
          <router-link :to="'/news/detail/' + news.id">Voir</router-link>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    props: ['feedId'],
    data() {
      return {
        news: [], 
        limit: '10'
      };
    },
    computed: {
      displayedNews() {
        return this.limit === 'all' ? this.news : this.news.slice(0, Number(this.limit));
      }
    },
    mounted() {
      this.fetchNews();
    },
    methods: {
      fetchNews() {
        // Simule un appel API pour récupérer les news du flux
        this.news = [
          { id: 1, title: "Article 1", description: "Contenu de l'article", image: "", feedId: this.feedId },
          { id: 2, title: "Article 2", description: "Contenu de l'article", image: "", feedId: this.feedId }
        ];
      },
      saveToPreferences(news) {
        let preferences = JSON.parse(localStorage.getItem('preferences')) || [];
        if (!preferences.some(n => n.id === news.id)) {
          preferences.push(news);
          localStorage.setItem('preferences', JSON.stringify(preferences));
          alert('Article sauvegardé !');
        }
      }
    }
  };
  </script>
  