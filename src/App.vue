<template>
    <div id="app">
      <nav>
        <router-link to="/">🏠 Accueil</router-link>
        <router-link to="/preferences">⭐ Préférences</router-link>
      </nav>
      <router-view />
    </div>
  </template>
  
  <style scoped>
  nav {
    display: flex;
    gap: 20px;
    padding: 10px;
    background: #ddd;
  }
  </style>
  