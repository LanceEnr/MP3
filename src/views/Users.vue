<template>
    <Navbar/>
  
    <div class="w-screen-xl py-8 px-28 bg-gray-50 min-h-screen">
      <div class="flex flex-col items-right">
        <h2 class="font-bold text-5xl tracking-tight">Users</h2>
        <div class="flex justify-between items-center">
          <p class="text-neutral-500 text-xl mt-3">
            Table of users on your platform
          </p>
          <form action="#" method="GET" class="hidden lg:block lg:pl-2">
          <label class="sr-only">Search</label>
          <div class="relative mt-1 lg:w-72">
            <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
              <svg class="w-4 h-4 text-gray-500 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                viewBox="0 0 20 20">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
              </svg>
            </div>
            <input type="text" name="email" id="topbar-search"
              class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full pl-9 p-2.5 "
              placeholder="Search" />
          </div>
        </form>
        </div>
        <hr class="h-px my-8 border-yellow-500 border-2" />
      </div>
      <UserTable :users="users" />
    </div>
  </template>
  
  <script>
  import Navbar from './components/Navbar.vue';
  import UserTable from './components/UserTable.vue';
  
  export default {
    name: 'User',
    components: {
      Navbar,
      UserTable,
    },
    data() {
      return {
        users: [
        {
          name: "John Doe",
          img: "https://i.pinimg.com/736x/97/31/02/9731022f0be7c965e880505461643850.jpg",
          id: "20210001",
          position: "Admin",
          status: "Active"
        }
      ],
      };
    },
  };
  </script>
  
  <style>
  /* Add your styles here */
  </style>
  