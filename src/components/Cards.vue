<template>
  <div
    class="w-full rounded-lg shadow-md lg:max-w-sm"
    style="cursor: 'pointer'"
    @click="showModal = true"
  >
    <img
      class="object-cover w-full h-64 rounded-t-lg"
      :src="post.img"
      alt="image"
      style="transition: 'transform 0.01s'"
      @mouseover="scaleUp"
      @mouseout="scaleDown"
    />
    <div class="p-4 bg-white rounded-b-lg">
      <h4 class="text-l font-semibold">{{ post.title }}</h4>
      <p class="mb-2 leading-normal text-xs">{{ post.content }}</p>
      <p class="mb-2 leading-normal font-semibold text-xs">{{ post.user }}</p>
    </div>

    <div v-if="showModal" id="large-modal" tabindex="-1" class="fixed top-0 left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">      <div class="relative w-full max-w-4xl max-h-full">
        <!-- Modal content -->
        <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
          <!-- Modal header -->
          <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
            <h3 class="text-xl font-medium text-gray-900 dark:text-white">
              {{ post.title }}
            </h3>
            <button type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" @click="showModal = false">
              <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
              </svg>
              <span class="sr-only">Close modal</span>
            </button>
          </div>
          <!-- Modal body -->
          <div class="p-4 md:p-5 space-y-4">
      <img :src="post.img" alt="image" class="modal-image">
            <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              {{ post.content }}
            </p>
            <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              {{ post.date }}
            </p>
            <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              {{ post.user }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['post'],
  data() {
    return {
      showModal: false,  // Make sure this is initially set to false
    };
  },
};
</script>

<style scoped>
.modal-image {
  max-width: 100%;
  height: auto;
}
</style>