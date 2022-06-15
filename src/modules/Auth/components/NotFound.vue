<template>
   <div class="container px-4 mx-auto mt-20">
    <div class="md:flex md:justify-center">
      <div class="md:w-10/12 xl:w-8/12 text-center">
        <h1 class="text-3xl md:text-4xl mb-4">Not Found Page!</h1>
        <p class="text-xl font-light">Sorry for you ...</p>
        <div class="mt-6">
          <a
            class="bg-indigo-600 border-2 border-solid border-indigo-600 hover:bg-indigo-700 hover:border-indigo-700 text-white rounded-full py-3 px-8 transition-colors duration-300 mx-2 mt-4 cursor-pointer" @click="$router.go(-1)"
          >
            Go Back            
          </a>
        </div>
      </div>
    </div>
  </div>
</template>


