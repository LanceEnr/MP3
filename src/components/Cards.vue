<template>
  <div
    class="w-full rounded-lg shadow-md lg:max-w-sm"
    style="cursor: 'pointer'"
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
    </div>
  </div>
</template>

<script>
export default {
  props: ['post'],
};
</script>
