<template>
  <div
    class="max-w-lg mx-auto overflow-hidden bg-white shadow-lg rounded-md hover:shadow-xl transition-transform duration-200 transform hover:scale-105"
  >
    <div class="px-6 py-4">
        <h1 class="font-bold text-xl mb-2 text-gray-700 ">Title: {{ cardData.title }}</h1>
        <p class="text-gray-700 text-base mb-2">Description: {{ cardData.description }}</p>
        <p class="text-gray-700 text-sm mb-2">Due Date: {{ cardData.dueDate }}</p>
        <p class="text-gray-700 text-sm mb-2">Status: {{ cardData.status }}</p>
        <button
          @click="editCard()"
          class="bg-green-500 text-white font-semibold text-base py-2 px-4 rounded focus:outline-none focus:shadow-outline-green active:bg-green-600"
        >
          Edit
        </button>
    </div>
</div>
</template>

<script setup lang="ts">
import { defineProps, PropType } from "vue";

interface CardData {
    id: string;
  title: string;
  description: string;
  dueDate: string;
  status: string;
}

defineProps({
    cardData: {
      type: Object as PropType<CardData>,
      required: true,
    },
    editCard: {
      type: Function as PropType<() => void>,
      required: true,
    },
  });
</script>
