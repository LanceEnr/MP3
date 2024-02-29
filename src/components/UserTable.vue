<template>
  <div>
    <table class="w-full text-sm text-left rtl:text-right text-gray-500">
      <thead class="text-xs text-gray-700 uppercase bg-gray-50">
        <tr>
          <th scope="col" class="px-6 py-3">Name</th>
          <th scope="col" class="px-6 py-3">Position</th>
          <th scope="col" class="px-6 py-3">Status</th>
          <th scope="col" class="px-6 py-3">Action</th>
          <th scope="col" class="px-6 py-3">Promotion</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(user, index) in users"
          :key="index"
          class="bg-white border-b hover:bg-gray-50"
        >
          <th
            scope="row"
            class="flex items-center px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
          >
            <img
              class="w-10 h-10 rounded-full"
              :src="user.img"
              alt="User image"
            />
            <div class="ps-3">
              <div class="text-base font-semibold">{{ user.name }}</div>
              <div class="font-normal text-gray-500">{{ user.id }}</div>
            </div>
          </th>
          <td class="px-6 py-4">{{ user.position }}</td>
          <td class="px-6 py-4">
            <div class="flex items-center">
              <div
                class="h-2.5 w-2.5 rounded-full"
                :class="user.status === 'Active' ? 'bg-green-500' : 'bg-red-500'"
              ></div>
              {{ user.status }}
            </div>
          </td>
          <td class="px-6 py-4">
            <button
              class="px-4 py-2 text-white rounded"
              :class="user.status === 'Active' ? 'bg-red-500' : 'bg-green-500'"
              @click="toggleStatus(user)"
            >
              {{ user.status === 'Active' ? 'Deactivate' : 'Activate' }}
            </button>
          </td>
          <td class="px-6 py-4">
            <button
              class="px-4 py-2 text-white rounded"
              :class="user.position === 'Admin' ? 'bg-red-500' : 'bg-green-500'"
              @click="togglePosition(user)"
            >
              {{ user.position === 'Admin' ? 'Demote' : 'Promote' }}
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  props: ['users'],
  methods: {
    toggleStatus(user) {
      user.status = user.status === 'Active' ? 'Deactivated' : 'Active';
    },
    togglePosition(user) {
      user.position = user.position === 'Admin' ? 'User' : 'Admin';
    },
  },
};
</script>
