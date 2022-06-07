<script setup lang="ts">
import { useAuthStore } from "@/modules/Auth/stores"
import AuthUser from "./AuthUser.vue"
import AuthUserForm from "./AuthUserForm/Index.vue"
import UpdatePassword from "./UpdatePassword/Index.vue"
import FileUpload from "./FileUpload.vue"
import SectionBorder from "@/components/SectionBorder.vue"
import SectionInfo from "@/components/SectionInfo.vue"

const store = useAuthStore()

const updateUser = () => {
  store.getAuthUser()
}

</script>

<template>
  <div class="p-0 xl:px-0">
    
      <div class="max-w-7xl mx-auto py-5 sm:px-5 lg:px-5">
        <!--h1 class="font-bold text-xl mb-4">Mi Perfil</h1-->
      
        <div class="md:grid md:grid-cols-3 md:gap-6">      
          <SectionInfo 
            title="Información de su cuenta"
            description="Actualice la información de perfil y la dirección de correo electrónico de su cuenta."
          />
          <AuthUserForm class="p-5 bg-white border rounded shadow col-span-2" />
          <SectionBorder />                 
        </div>

        <div class="md:grid md:grid-cols-3 md:gap-6">
          <SectionInfo
            title="Actualizar contraseña"
            description="Asegúrese de que su cuenta esté usando una contraseña larga y aleatoria para mantenerse seguro."
          />
          <UpdatePassword class="p-5 bg-white border rounded shadow col-span-2" />
          <SectionBorder />
        </div>
        
        <div class="md:grid md:grid-cols-3 md:gap-6">
          <SectionInfo
            title="Verificación de correo"
            description="Asegúrese de que su correo está correctamente configurado para los envios de mensajes de notificaciones."
          />
          <AuthUser class="p-5 bg-white border rounded shadow col-span-2" />
          <SectionBorder />          
        </div>
        
        <div class="md:grid md:grid-cols-3 md:gap-6">
          <SectionInfo
            title="Suba su Avatar"
            description="Suba el avatar que desea que aparezca en su perfil."
          />
          <FileUpload
            label="Upload Avatar"
            :fileTypes="['image/*']"
            endpoint="/users/auth/avatar"
            @fileUploaded="updateUser"
            class="p-5 bg-white border rounded shadow col-span-2"
          />
          <SectionBorder />          
        </div>
      </div>
    </div>
</template>
