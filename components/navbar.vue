<script setup lang="ts">

</script>

<template>
  <header>
    <nav class="flex py-2 bg-gray-700 dark:bg-black flex-wrap items-center justify-between mx-auto px-20">
      <!-- Logo as link-->
      <a href="/" class="flex items-center rtl:space-x-revers text-blue-500">
        <img src="/image/logo-bold.svg" alt="AR Coding Club logo">
      </a>

      <!-- This button expands the menu when on smaller displays -->
      <button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
        <span class="sr-only">Open main menu</span>
        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
      </button>
      <!-- Links & stuff -->
      <div class="hidden w-full md:block md:w-auto" id="navbar-default">
        <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-transparent md:flex-row md:space-x-16 rtl:space-x-reverse md:mt-0 md:border-0 dark:border-black">
          <NuxtLink to="/resources">
          <li>
            <span class="text-lg block py-2 px-3 text-text-secondary rounded md:hover:bg-transparent md:border-0 md:hover:text-link md:p-0 md:dark:hover:text-link font-mono">Resources</span>
          </li>
          </NuxtLink>

          <li>
            <a href="/calendar" class="text-lg block py-2 px-3 text-text-secondary rounded md:border-0 md:hover:text-link md:p-0 font-mono">Calendar</a>
          </li>

          <li>
            <a href="/About" class="text-lg block py-2 px-3 text-text-secondary rounded md:border-0 md:hover:text-link md:p-0 font-mono">About Us</a>
          </li>
          
          <li>
            <!-- Need to do this later -->
            <a href="/join" class="text-lg block py-2 px-3 text-text-secondary rounded md:border-0 md:hover:text-link md:p-0 md:dark:hover:text-link font-mono">Join</a>
          </li>

        </ul>
      </div>
    </nav>
  </header>
</template>
