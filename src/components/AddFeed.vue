<template>
    <form @submit.prevent="addFeed">
      <input type="text" v-model="title" placeholder="Nom du flux" required />
      <input type="url" v-model="url" placeholder="Lien RSS" required />
      <button type="submit">Ajouter</button>
    </form>
  </template>
  
  <script>
  export default {
    data() {
      return {
        title: '',
        url: ''
      };
    },
    methods: {
      addFeed() {
        const feeds = JSON.parse(localStorage.getItem('feeds')) || [];
        feeds.push({ id: Date.now(), title: this.title, url: this.url });
        localStorage.setItem('feeds', JSON.stringify(feeds));
        this.title = '';
        this.url = '';
        alert('Flux ajouté avec succès !');
      }
    }
  };
  </script>
  