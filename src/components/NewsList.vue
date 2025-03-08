<template>
    <div>
      <h2>Articles du Flux</h2>
      <ul v-if="news.length > 0">
        <li v-for="(article, index) in news" :key="index">
          <h3>{{ article.title }}</h3>
          <p>{{ article.description }}</p>
          <router-link :to="'/news/detail/' + article.id">Voir</router-link>
        </li>
      </ul>
      <p v-else>Aucun article disponible.</p>
    </div>
  </template>
  
  <script>
  export default {
    props: ['feedId'],
    data() {
      return {
        news: []
      };
    },
    mounted() {
      this.fetchNews();
    },
    methods: {
      fetchNews() {
        console.log("Tentative de récupération des news pour le flux :", this.feedId);
        this.news = JSON.parse(localStorage.getItem('news_' + this.feedId)) || [];
        console.log("News récupérées :", this.news);
      }
    }
  };
  </script>
  