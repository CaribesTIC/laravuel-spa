<script setup lang="ts">
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
</template>
