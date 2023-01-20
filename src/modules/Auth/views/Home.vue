<!--script setup lang="ts">
  import IconLogo from "@/icons/IconLogo.vue"
</script>

<template>  
  <div class="relative mt-20 lg:px-4 max-w-md mx-auto sm:px-3">           
      <IconLogo class= "flex justify-center pt-4 sm:justify-start sm:pt-0 w-4/5 y-4/2 h-auto m-auto bg-transparent"/>          
    <div class="flex justify-center text-lg mt-10 space-x-5">      
      <AppLink 
        to="/login" 
        class="btn btn-primary"        
        data-testid="login-link"
      >
        Iniciar sesión
      </AppLink>
      <AppLink
        to="/register"
        class="btn btn-default"
        data-testid="register-link"
      >
        Registrarse
      </AppLink>      
    </div>
  </div>  
</template-->


<script setup lang="ts">
import IconLogo from "@/icons/IconLogo.vue"
</script>

<template>
  <div class="m-10 sm:my-20 bg-base-100">
    <div class="sm:grid grid-cols-2 gap-4">
      <div class="my-auto"><IconLogo class= "w-full h-full"/></div>
      <div class="my-auto">
        <div class="">
          <div class="text-[#6C63FF] wx-full mx-auto grid justify-items-stretch my-3">
            <p class="text-xl justify-self-center">Backend / Frontend</p>
          </div>
          <div class="text-current wx-full mx-auto grid justify-items-stretch my-3">
            <p class="text-3xl justify-self-center">LaraVuel [api*spa]</p>
          </div>
          <div class="w-full wx-full wx-full mx-auto grid justify-items-stretch my-3">
            <p class="text-lg dark:text-gray-300 justify-self-center">Laravel & Vue (Scaffolding)</p>
          </div>
          <div class="flex justify-center text-lg my-10 space-x-5">
            <AppLink
              to="/login"
              class="btn btn-primary"
              data-testid="login-link"
            >
              Iniciar Sesión
            </AppLink>
            <AppLink
              to="/register"
              class="btn btn-default"
              data-testid="register-link"
            >
              Registrarse
            </AppLink>
          </div>
        </div>
      </div>      
    </div>
  </div>
</template>

