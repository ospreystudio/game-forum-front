<template>
  <nav class=" 2xl:mx-auto sm:py-6 sm:px-7 py-5 px-4 bg-gradient-to-r from-cyan-500 ">
    <!-- For large and Medium-sized Screen -->
    <div class="flex justify-around  ">

      <div class="hidden mt-5 sm:flex flex-row items-center cursor-pointer space-x-6">
        <svg
            width="80"
            height="80"
            viewBox="0 0 21 20"
            fill="#E5E7EB"
            xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.287 5.906c-.778.324-2.334.994-4.666 2.01-.378.15-.577.298-.595.442-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294.26.006.549-.1.868-.32 2.179-1.471 3.304-2.214 3.374-2.23.05-.012.12-.026.166.016.047.041.042.12.037.141-.03.129-1.227 1.241-1.846 1.817-.193.18-.33.307-.358.336a8.154 8.154 0 0 1-.188.186c-.38.366-.664.64.015 1.088.327.216.589.393.85.571.284.194.568.387.936.629.093.06.183.125.27.187.331.236.63.448.997.414.214-.02.435-.22.547-.82.265-1.417.786-4.486.906-5.751a1.426 1.426 0 0 0-.013-.315.337.337 0 0 0-.114-.217.526.526 0 0 0-.31-.093c-.3.005-.763.166-2.984 1.09z"/>
        </svg>
      </div>

      <div class="flex space-x-3 items-center">
        <NuxtLink to="/"> <img src="/img/logo.png" width="100" height="100" alt="circle" /> </NuxtLink>
        <h1 class=" font-normal text-2xl leading-6 text-cyan-800" > Fantasy Game Forum </h1>
      </div>
      <div class="flex flex-row items-center justify-center space-x-6">

        <CustomSelect />

      </div>
      <div class="flex space-x-3 items-center">


      </div>

      <div class="flex flex-row items-center justify-center space-x-6" >
        <NuxtLink to="register">  <button class="rounded-md flex space-x-2 w-24 mt-8 h-10 font-normal text-sm leading-3 text-cyan-700 bg-white border border-cyan-700 focus:outline-none focus:bg-cyan-200 hover:bg-cyan-200 duration-150 justify-center items-center" >Sign Up</button> </NuxtLink>
        <NuxtLink to="login"> <button class="rounded-md flex space-x-2 w-24 mt-8 h-10 font-normal text-sm leading-3 text-white bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-700 focus:bg-cyan-600 hover:bg-cyan-600 duration-150 justify-center items-center" >Sign In</button> </NuxtLink>
      </div>


      <div class="flex flex-row items-center justify-center space-x-6" >
        <div class="inline-flex align-right font-medium text-cyan-700 uppercase mt-8"  >

        </div>


        <div class="absolute bottom-0 right-0 rounded-full bg-white shadow-xl border p-1 border-cyan-300 inline-block h-[22px] w-[22px]">
          <Icon name="ph:pencil-simple-line-bold" size="14" class="-mt-3 ml-0.5"/>
        </div>


        <button @click="logout()" class="rounded-md flex space-x-2 w-24 mx-10 mt-8  h-10 font-normal text-sm leading-3 text-white bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-700 focus:bg-cyan-600 hover:bg-cyan-600 duration-150 justify-center items-center mr-10" >Log Out</button>
      </div>



      <!-- Mobile and small-screen devices (toggle Menu) -->
      <div id="MobileNavigation" class="hidden sm:hidden mt-4 mx-auto">
        <div class="flex flex-row items-center justify-center space-x-6">
          <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/header-3-svg1.svg" alt="twitter" />
        </div>
        <div class="flex flex-col gap-4 mt-4 w-80 mx-auto">
          <button class="rounded-md flex space-x-2 w-full h-10 font-normal text-sm leading-3 text-cyan-700 bg-cyan-600 bg-opacity-0 hover:opacity-100 duration-100 border border-cyan-700 focus:outline-none focus:bg-cyan-200 hover:bg-cyan-200 duration-150 justify-center items-center" >Sign Up</button>
          <button class="rounded-md flex space-x-2 w-full h-10 font-normal text-sm leading-3 text-white bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-700 focus:bg-cyan-600 hover:bg-cyan-600 duration-150 justify-center items-center" > Sign In</button>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>

</script>

<style scoped>

</style>