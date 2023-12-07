<template>
  <div
    class="max-w-md mx-auto my-4 overflow-hidden bg-white shadow-lg rounded-md hover:shadow-xl transition-transform duration-200 transform hover:scale-105"
  >
    <div class="px-6 py-4">
        <div class="font-semiboldbold text-xl mb-2 text-gray-500w-full flex items-center">Title: <div class="ml-3 font-bold text-gray-600 capitalize">{{ cardData.title }}</div></div>
        <p class="text-gray-700 text-base mb-2">Description: <span class="font-semibold ml-3">{{ cardData.description }}</span></p>
        <p class="text-gray-700 text-sm mb-2">Due Date: <span class="font-semibold ml-3">{{ cardData.dueDate }}</span></p>
        <p class="text-gray-700 text-sm mb-2"
        
        >Status: <span class="ml-3"
        :class="{
            'text-gray-500 font-semibold' : cardData.status == 'Pending',
            'text-primary font-semibold' : cardData.status == 'In Progress',
            'text-red-400 font-bold' : cardData.status == 'Deprioritized',
            'text-green-300 font-semibold' : cardData.status == 'Done'}"
        >{{ cardData.status }}</span></p>
        <!-- @click="editCard()" -->
        <button
          @click="$emit('editCard', cardData)"
          class="hover:bg-primary text-primary hover:text-white font-semibold text-base py-2 px-4 rounded focus:outline-none focus:shadow-outline-blue active:bg-primary"
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
    // editCard: {
    //   type: Function as PropType<() => {}>,
    //   required: true,
    // },
  });
</script>
