<template>
  <ul>
    <li>
      <router-link :to="{ name : 'home' }">Home</router-link>
      <router-link :to="{ name : 'about' }">About</router-link>
     </li>
  </ul>
  <router-view></router-view>
</template>
