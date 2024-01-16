<template>
    <div class="flex justify-center w-full">
        <div class="h-full w-full mx-auto">
            <div>
                <div class="mx-auto mt-4 p-2">
                   <h1 class="text-center text-6xl text-header-text bg-white rounded-full">Student Leadership</h1>
                </div>

                <div class="md:flex mx-auto flex-row-2 justify-center mt-10 space-y-4 lg:space-y-0 lg:space-x-4"> <!--Need to get the content in a row on the bottom-->


                    <div class="mx-auto lg:mx-0 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                        <div class="flex flex-col items-center py-10">

                           <div class="w-24 h-24 rounded-full shadow-lg overflow-hidden">
                              <img class="w-30" src="/daren.jpg" alt="A picture of Daren in a black jean jacket with collar folded over"/>
                           </div>
                            <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">Daren Bach</h5>
                            <span class="text-sm text-gray-500 dark:text-gray-400">Student/SWE</span>
                            <span class="text-center mt-2 mx-2 max-w-prose">Hi, I'm Daren! I build websites in my freetime, and I'm a student at Anoka Ramsey aswell. I am an aspiring Software Engineer!</span>
                            <div class="flex mt-4 md:mt-6">
                                <a href="https://www.instagram.com/" class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-header-text rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add friend</a>
                                <a href="mailto:daren.bach@my.anokaramsey.edu" class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700 ms-3">Email</a>
                            </div>
                        </div>
                    </div>

                    <div class="mx-auto lg:mx-0 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                        <div class="flex flex-col items-center py-10">
                           <div class="max-w-24 max-h-24 rounded-full shadow-lg overflow-hidden">
                              <img class="w-24" src="/samPFP.jpg" alt="An extreme close up of Sams face. We can see everything Sam, please move the camera back."/>
                           </div>

                            <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">Samuil Iordachi</h5>
                            <span class="text-sm text-gray-500 dark:text-gray-400">Student/SWE</span>
                            <span class="text-center mt-2 mx-2 max-w-prose">Hello, my name is Sam and I am student at Anoka Ramsey and an aspiring software engineer.</span>
                            <div class="flex mt-4 md:mt-6">
                                <a href="#" class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-header-text rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add friend</a>
                                <a href="#" class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700 ms-3">Message</a>
                            </div>
                        </div>
                    </div>



                    <div class="mx-auto lg:mx-auto max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                        <div class="flex flex-col items-center py-10">
                           <div class="w-24 h-24 rounded-full shadow-lg overflow-hidden">
                              <img class="w-30" src="/rob.jpg" alt=""/>
                           </div>
                            <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">Robert</h5>
                            <span class="text-sm text-gray-500 dark:text-gray-400">Designer/SWE/Student</span>
                            <span class="text-center mt-2 mx-2 max-w-prose">I develop CLIs, services, and webapps in my spare time, in addition to being a student @ ARCC</span>
                            <div class="flex mt-4 md:mt-6">
                                <a href="https://github.com/Aervyon" class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-header-text rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Github</a>
                                <a href="mailto:robert.knight@my.anokaramsey.edu" class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700 ms-3">Email</a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
           <InternalLink link="join" text="Join Now" class="mx-auto mt-10"/>

        </div>
    </div>

</template>
<script setup lang="ts">
</script>
