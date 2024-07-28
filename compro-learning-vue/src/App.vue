<template>
<navbar></navbar>
<div class="container">
<beranda></beranda>
<service></service>
<portfolio>
</portfolio>
</div>
</template>
<script>
import Navbar from '@/components/layouts/Navbar.vue';
import Beranda from '@/components/beranda/Beranda.vue';
import Service from '@/components/beranda/Service.vue';
import Portfolio from '@/components/beranda/Portfolio.vue';
export default {
  components: {
    Navbar,
    Beranda,
    Service,
    Portfolio
  }
}
</script>