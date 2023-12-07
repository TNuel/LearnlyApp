<template>
  <div
    v-show="isVisible"
    class="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-50"
    >
    <div class="w-80 bg-white px-8 py-4 rounded-lg">
        <h1 class="text-center font-bold text-gray-700">Update Task</h1>
      <form @submit.prevent="submitForm">
        <div class="mb-4">
          <label for="title" class="block text-sm font-medium text-gray-600"
            >Title:</label
          >
          <input
            v-model="formData.title"
            type="text"
            required
            class="mt-1 p-2 border border-gray-300 rounded-md w-full"
          />
        </div>
    
        <div class="mb-4">
          <label
            for="description"
            class="block text-sm font-medium text-gray-600"
            >Description:</label
          >
          <textarea
            v-model="formData.description"
            required
            class="mt-1 p-2 border border-gray-300 rounded-md w-full"
          ></textarea>
        </div>
    
        <div class="mb-4">
          <label for="dueDate" class="block text-sm font-medium text-gray-600"
            >Due Date:</label
          >
          <input
            v-model="formData.dueDate"
            type="date"
            required
            class="mt-1 p-2 border border-gray-300 rounded-md w-full"
          />
        </div>
    
        <div class="mb-4">
          <label for="status" class="block text-sm font-medium text-gray-600"
            >Status:</label
          >
          <select
            v-model="formData.status"
            required
            class="mt-1 p-2 border border-gray-300 rounded-md w-full"
          >
          <option selected disabled>Select Status</option>
          <option value="Pending">Pending</option>
          <option value="In Progress">In Progress</option>
          <option value="Depriortized">Depriortized</option>
          <option value="Done">Done</option>
        </select>
        </div>
        <div class="flex justify-between">
          <button @click="closeModal" class="bg-gray-300 py-2 px-4 rounded-md">
            Close
          </button>
          <button
            type="submit"
            class="bg-secondary/90 hover:bg-secondary cursor-pointer hover:scale-105 text-white py-2 px-4 rounded-md"
          >
            Done
          </button>
        </div>
      </form>
    </div>
</div>
</template>

<script setup lang="ts">
import { defineProps, PropType } from "vue";

interface FormData {
  id: string;
  title: string;
  description: string;
  dueDate: string;
  status: string;
}

const prop = defineProps({
  isVisible: {
    type: Boolean as PropType<boolean>,
    required: true,
  },
  closeModal: {
    type: Function as PropType<() => void>,
    required: true,
  },
  formData: {
    type: Object as PropType<FormData>,
    required: true,
  },
});


const submitForm = async () => {
  console.log("Submit");
  prop.closeModal()
};
</script>
