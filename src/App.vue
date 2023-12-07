<template>
  <div>
    <TopNav />
  </div>
  <div class="w-full md:hidden flex justify-end">
    <button
      type="button"
      @click="toggleShowModal"
      class="bg-secondary/90 mx-4 hover:bg-secondary cursor-pointer hover:scale-105 text-white py-2 px-4 rounded-md"
    >
      Add Task
    </button>
  </div>
  <div class="flex mx-auto w-full space-x-6 lg:w-2/3 mt-8 justify-center">
    <div v-if="tasks.length > 0" class="w-full md:w-1/2">
      <div
        class="flex justify-center text-center items-center mx-auto w-full text-2xl font-bold text-purple-500"
      >
        All Tasks
      </div>
      <div v-for="task in tasks" :key="task.id" class="">
        <TaskCard :cardData="task" @edit-card="editTask(task)" />
      </div>
    </div>
    <div
      v-else
      class="flex justify-center items-center w-1/2 text-2xl font-bold text-purple-500"
    >
      No Task yet, Add Task
    </div>
    <div v-if="showModal">
      <Modal :isVisible="showModal" :closeModal="toggleShowModal" />
    </div>
    <div v-if="showEditModal">
      <EditModal
        :isVisible="showEditModal"
        :formData="editTaskData"
        :closeModal="closeEditModal"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import {
  ref,
  computed,
  reactive,
  onMounted,
  onBeforeUnmount,
  watchEffect,
} from "vue";
import TopNav from "./components/layout/TopNav.vue";
import TaskCard from "./components/utility/Card.vue";
import Modal from "./components/utility/Modal.vue";
import EditModal from "./components/utility/EditModal.vue";
import { useTaskStore } from "./stores/tasks";
// import { nanoid } from "nanoid";

interface CardData {
  id: string;
  title: string;
  description: string;
  dueDate: string;
  status: string;
}

let editTaskData: CardData = reactive({
  id: "",
  title: "",
  description: "",
  dueDate: "",
  status: "",
});
const taskStore = useTaskStore();
const tasks = computed(() => {
  return taskStore.tasks;
});
console.log("local storage task =>", tasks.value);
console.log("local storage task =>", taskStore.tasks);

const showModal = ref(false);
const shouldShowModal = ref(window.innerWidth >= 768);
const showEditModal = ref(false);
const toggleShowModal = () => {
  console.log("toggle show modal =>");

  showModal.value = !showModal.value;
  console.log("toggle show modal =>", showModal.value);
};

const closeEditModal = () => {
  showEditModal.value = false;
};

const editTask = (data: CardData) => {
  showEditModal.value = true;
  console.log("edit data =>", data);
  editTaskData = data;
  console.log("edit data =>", editTaskData);
};

const handleResize = () => {
  shouldShowModal.value = window.innerWidth >= 768;
};

onMounted(() => {
  // Set initial value based on the screen width
  showModal.value = shouldShowModal.value;

  // Watch for window resize events
  window.addEventListener("resize", handleResize);
});

onBeforeUnmount(() => {
  // Remove the resize event listener when the component is destroyed
  window.removeEventListener("resize", handleResize);
});

// Watch for changes in shouldShowModal
watchEffect(() => {
  showModal.value = shouldShowModal.value;
});
</script>
