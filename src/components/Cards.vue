<template>
  <div
    class="w-full rounded-lg shadow-md lg:max-w-sm cursor-pointer"
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
      <p class="mb-2 leading-normal font-semibold text-xs text-yellow-500">
        {{ post.user }}
      </p>
    </div>

    <div
      v-if="showModal"
      id="large-modal"
      tabindex="-1"
      class="fixed inset-0 z-50 flex items-center justify-center h-full overflow-x-hidden overflow-y-auto"
      style="background-color: rgba(0, 0, 0, 0.5)"
    >
      <div class="relative max-h-full">
        <div class="relative bg-white rounded-lg shadow">
          <div
            class="flex items-center justify-between p-4 md:p-5 border-b rounded-t"
          >
            <h3 class="text-xl font-medium text-gray-900">
              {{ post.title }}
            </h3>
            <button
              type="button"
              class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center"
              @click.stop="showModal = false"
            >
              <svg
                class="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
              <span class="sr-only">Close modal</span>
            </button>
          </div>
          <div class="p-4 md:p-5 space-y-4">
            <img :src="post.img" alt="image" class="modal-image" />
            <p class="text-base leading-relaxed text-gray-500">
              File type: {{ post.content }}
            </p>
            <p class="text-base leading-relaxed text-gray-500">
               Submitted by: {{ post.user }}
            </p>
            <p class="text-base leading-relaxed text-gray-500">
              Date: {{ post.date }} 
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["post"],
  data() {
    return {
      showModal: false,
    };
  },
};
</script>

<style scoped>
.modal-image {
 width: 325px;
  height: auto;
}
</style>
