<template>
  <div>
    <h1>Daftar Siswa</h1>
    <input type="text" v-model="newTask" @keyup.enter="addTask" placeholder="Tambah Siswa baru">
    <button @click="addTask">Tambah</button>
    <ul>
      <li v-for="(task, index) in tasks" :key="index">
        {{ task }}
        <button @click="editTask(index)">Edit</button>
        <button @click="deleteTask(index)">Hapus</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tasks: ["Ramon", "Babang", "Udin"],
      newTask: "",
      editIndex: null
    };
  },
  methods: {
    addTask() {
      if (this.editIndex !== null) {
        this.tasks[this.editIndex] = this.newTask;
        this.newTask = "";
        this.editIndex = null;
      } else {
        this.tasks.push(this.newTask);
        this.newTask = "";
      }
    },
    editTask(index) {
      this.newTask = this.tasks[index];
      this.editIndex = index;
    },
    deleteTask(index) {
      this.tasks.splice(index, 1);
    }
  }
};
</script>
