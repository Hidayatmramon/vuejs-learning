<template>
  <p>Nama: {{ name }}</p>
  <p>Password: {{ showPassword ? typeInput : '' }}</p>
  <p>Year: {{ year }}</p>
  <p>{{ msg }}</p>
  <input v-model="name" placeholder="tulis nama disini" />
  <button :disabled="nonaktif" @click="showPassword = true">button</button><br>
  <input v-model="typeInput" :type="showPassword ? 'text' : 'password'" placeholder="Masukan Password anda" /><br>
  <button @click="count++">You clicked me {{ count }} times.</button>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      year: 2023,
      msg: 'larning vue.js with PT Wan Teknologi Internasional',
      count: 0,
      typeInput: '',
      showPassword: false
    }
  },
  methods: {
    showAlert() {
      alert('Selamat datang!');
    }
  },
  mounted() {
    this.showAlert();
  }
}
</script>
