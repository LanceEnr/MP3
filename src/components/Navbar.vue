<template>
  <nav class="bg-yellow-500 border-gray-200">
    <div
      class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4"
    >
      <a
        href="https://flowbite.com/"
        class="flex items-center space-x-3 rtl:space-x-reverse"
      >
        <img
          src="https://scontent.xx.fbcdn.net/v/t1.15752-9/429765237_932198778143804_7395739983486024089_n.png?stp=dst-png_p403x403&_nc_cat=111&ccb=1-7&_nc_sid=510075&_nc_ohc=BIeqZA6o4rcAX-DPyYF&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdTD0DAsndZ8J84yV91nKXI_z402tdlViGdFBOFmAIFnOg&oe=66078DBB"
          class="h-8"
          alt="Flowbite Logo"
        />
        <span class="self-center text-2xl font-semibold whitespace-nowrap"
          >SadminPanel</span
        >
      </a>
      <button
        data-collapse-toggle="navbar-default"
        type="button"
        class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
        aria-controls="navbar-default"
        aria-expanded="false"
      >
        <span class="sr-only">Open main menu</span>
        <svg
          class="w-5 h-5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 17 14"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M1 1h15M1 7h15M1 13h15"
          />
        </svg>
      </button>
      <div class="hidden w-full md:block md:w-auto" id="navbar-default">
        <ul
          class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0"
        >
          <router-link
            to="/users"
            class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-gray-500 md:p-0"
            >Users</router-link
          >
          <router-link
            to="/"
            class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-gray-500 md:p-0"
            >Submissions</router-link
          >
        </ul>
      </div>
    </div>
  </nav>
</template>
