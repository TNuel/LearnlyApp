import { ref, type Ref } from "vue";
import { defineStore } from "pinia";

type task = { id: string; title: string; status: string, description: string, dueDate: string };

export const useTaskStore = defineStore("taskStore", () => {
  const tasks: Ref<task[]> = ref([]);

  const lsKey = "_v_tasks";

  function initFromLocalStorage() {
    const lstasks = localStorage.getItem(lsKey);

    if (lstasks === null) {
      tasks.value = [];
    } else {
      try {
        tasks.value = JSON.parse(lstasks);
      } catch (e) {
        tasks.value = [];
      }
    }

    updateLocalStorage();
  }

  function updateLocalStorage() {
    localStorage.setItem(lsKey, JSON.stringify(tasks.value));
  }

  function addTask(task : task) {
    tasks.value = [
      ...tasks.value, task
    ];
    updateLocalStorage();
    return tasks.value
  }

  function removeTask(id: string) {
    tasks.value = tasks.value.filter((task) => task.id !== id);
    updateLocalStorage();
  }

  return {
    tasks,
    addTask,
    removeTask,
    initFromLocalStorage,
    updateLocalStorage,
    // clearCompletedTasks,
  };
});
