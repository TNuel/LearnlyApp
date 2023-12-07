
<template>
  <div>
    <TopNav />
  </div>
  <div>
    <button @click="toggleShowModal" class="text-white rounded-md px-4 py-2 bg-purple-400 hover:bg-purple-600 disabled:bg-gray-400 cursor-pointer disabled:cursor-not-allowed">
      Add Task
    </button>
  </div>
  <div v-for="task in tasks" :key="task.id" class=" bg-blue-200">
    <TaskCard :cardData="task" :editCard="editTask" />
    
  </div>
  <div v-if="showModal">
    <Modal :isVisible="showModal" :closeModal="toggleShowModal" />
  </div>
</template>


<script setup lang="ts">
import { ref, computed } from 'vue';
import TopNav from "./components/layout/TopNav.vue";
import TaskCard from "./components/utility/Card.vue";
import Modal from "./components/utility/Modal.vue"
import { useTaskStore } from './stores/tasks';
// import { nanoid } from "nanoid";

const taskStore = useTaskStore()
const tasks = computed(() => {
  return taskStore.tasks
});
console.log('local storage task =>', tasks.value);
console.log('local storage task =>', taskStore.tasks);


const showModal = ref(false);
const toggleShowModal = () => {
  console.log('toggle show modal =>');
  
  showModal.value = !showModal.value;
  console.log('toggle show modal =>', showModal.value);
};


const editTask = () => {
  showModal.value = true;
  // console.log('edit data =>', data)
};

</script>
