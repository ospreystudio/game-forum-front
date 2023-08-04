<template>
  <body class="min-h-screen bg-gradient-to-r from-cyan-500">
  <div
      class="min-h-screen bg-gradient-to-tl from-white-400 to-cyan-900 w-full px-4 "
  >

    <div class="flex flex-col items-center justify-center ">
      <div class="mt-3 p-3">

        <img src="/img/logo.png"    width="150" height="150" alt="Gay Talk Day" />
      </div>
      <div
          class="bg-white drop-shadow-2xl rounded lg:w-1/4 md:w-1/2 w-full p-5 mt-15"
      >
        <p
            tabindex="0"
            role="heading"
            aria-label="Login to your account"
            class="text-2xl font-extrabold leading-6 text-gray-800"
        >
          Login page
        </p>
        <p class="text-sm mt-4 font-medium leading-none text-gray-500">
          If you haven't account yet?
          <span
              tabindex="0"
              role="link"
              aria-label="Sign up here"
              class="text-sm font-medium leading-none underline text-gray-800 cursor-pointer"
          >
            <NuxtLink to="register" style="color:cyan">  Register here </NuxtLink></span
          >
        </p>
        <button
            aria-label="Continue with google"
            role="button"
            class="focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-gray-700 py-3.5 px-4 border rounded-lg border-gray-700 flex items-center w-full mt-10"
        >
          <svg
              width="21"
              height="20"
              viewBox="0 0 21 20"
              fill="#40A7E3"
              xmlns="http://www.w3.org/2000/svg"
          >
            <path id="telegram-1" d="M18.384,22.779c0.322,0.228 0.737,0.285 1.107,0.145c0.37,-0.141 0.642,-0.457 0.724,-0.84c0.869,-4.084 2.977,-14.421 3.768,-18.136c0.06,-0.28 -0.04,-0.571 -0.26,-0.758c-0.22,-0.187 -0.525,-0.241 -0.797,-0.14c-4.193,1.552 -17.106,6.397 -22.384,8.35c-0.335,0.124 -0.553,0.446 -0.542,0.799c0.012,0.354 0.25,0.661 0.593,0.764c2.367,0.708 5.474,1.693 5.474,1.693c0,0 1.452,4.385 2.209,6.615c0.095,0.28 0.314,0.5 0.603,0.576c0.288,0.075 0.596,-0.004 0.811,-0.207c1.216,-1.148 3.096,-2.923 3.096,-2.923c0,0 3.572,2.619 5.598,4.062Zm-11.01,-8.677l1.679,5.538l0.373,-3.507c0,0 6.487,-5.851 10.185,-9.186c0.108,-0.098 0.123,-0.262 0.033,-0.377c-0.089,-0.115 -0.253,-0.142 -0.376,-0.064c-4.286,2.737 -11.894,7.596 -11.894,7.596Z"/></svg>

          <p class="text-base font-medium ml-4 text-gray-700">
            Continue with Telegram
          </p>
        </button>
        <button
            aria-label="Continue with telegram"
            role="button"
            class="focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-gray-700 py-3.5 px-4 border rounded-lg border-gray-700 flex items-center w-full mt-4"
        >

          <svg
              width="19"
              height="20"
              viewBox="0 0 19 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
          >
            <path
                d="M18.9892 10.1871C18.9892 9.36767 18.9246 8.76973 18.7847 8.14966H9.68848V11.848H15.0277C14.9201 12.767 14.3388 14.1512 13.047 15.0812L13.0289 15.205L15.905 17.4969L16.1042 17.5173C17.9342 15.7789 18.9892 13.221 18.9892 10.1871Z"
                fill="#4285F4"
            />
            <path
                d="M9.68813 19.9314C12.3039 19.9314 14.4999 19.0455 16.1039 17.5174L13.0467 15.0813C12.2286 15.6682 11.1306 16.0779 9.68813 16.0779C7.12612 16.0779 4.95165 14.3395 4.17651 11.9366L4.06289 11.9465L1.07231 14.3273L1.0332 14.4391C2.62638 17.6946 5.89889 19.9314 9.68813 19.9314Z"
                fill="#34A853"
            />
            <path
                d="M4.17667 11.9366C3.97215 11.3165 3.85378 10.6521 3.85378 9.96562C3.85378 9.27905 3.97215 8.6147 4.16591 7.99463L4.1605 7.86257L1.13246 5.44363L1.03339 5.49211C0.37677 6.84302 0 8.36005 0 9.96562C0 11.5712 0.37677 13.0881 1.03339 14.4391L4.17667 11.9366Z"
                fill="#FBBC05"
            />
            <path
                d="M9.68807 3.85336C11.5073 3.85336 12.7344 4.66168 13.4342 5.33718L16.1684 2.59107C14.4892 0.985496 12.3039 0 9.68807 0C5.89885 0 2.62637 2.23672 1.0332 5.49214L4.16573 7.99466C4.95162 5.59183 7.12608 3.85336 9.68807 3.85336Z"
                fill="#EB4335"
            />
          </svg>
          <p class="text-base font-medium ml-4 text-gray-700">
            Continue with Google
          </p>
        </button>
        <div
            aria-label="Continue with google"
            role="button"
            class="focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-gray-700 py-3.5 px-4 border rounded-lg border-gray-700 flex items-center w-full mt-4"
        >
          <svg fill="#0077FF"
               height="21px"
               width="20px" version="1.1"
               xmlns="http://www.w3.org/2000/svg"
               viewBox="0 0 363.301 363.301" xml:space="preserve">
<path d="M347.506,240.442c-7.91-9.495-16.899-18.005-25.592-26.235c-3.091-2.927-6.287-5.953-9.368-8.962
	c-8.845-8.648-9.167-11.897-2.164-21.72c4.845-6.771,9.982-13.551,14.95-20.108c4.506-5.949,9.166-12.101,13.632-18.273l0.917-1.269
	c8.536-11.811,17.364-24.024,22.062-38.757c1.22-3.887,2.501-9.607-0.428-14.39c-2.927-4.779-8.605-6.237-12.622-6.918
	c-1.987-0.337-3.96-0.383-5.791-0.383l-55.901-0.04l-0.462-0.004c-8.452,0-14.148,3.983-17.412,12.178
	c-3.116,7.83-6.539,16.168-10.445,24.096c-7.773,15.787-17.645,33.97-31.93,49.135l-0.604,0.645
	c-1.687,1.813-3.598,3.866-4.995,3.866c-0.214,0-0.447-0.041-0.711-0.124c-2.959-1.153-4.945-8.316-4.855-11.648
	c0.001-0.046,0.002-0.092,0.002-0.138l-0.039-64.61c0-0.224-0.016-0.446-0.045-0.668c-1.422-10.503-4.572-17.041-16.474-19.372
	c-0.316-0.063-0.639-0.094-0.961-0.094h-58.126c-9.47,0-14.688,3.849-19.593,9.61c-1.324,1.54-4.08,4.746-2.714,8.635
	c1.386,3.947,5.885,4.791,7.35,5.065c7.272,1.384,11.371,5.832,12.532,13.604c2.027,13.496,2.276,27.901,0.784,45.334
	c-0.416,4.845-1.239,8.587-2.595,11.784c-0.315,0.746-1.432,3.181-2.571,3.182c-0.362,0-1.409-0.142-3.316-1.456
	c-4.509-3.089-7.808-7.497-11.654-12.942c-13.084-18.491-24.065-38.861-33.575-62.288c-3.527-8.624-10.114-13.452-18.556-13.594
	c-9.276-0.141-17.686-0.209-25.707-0.209c-8.764,0-16.889,0.081-24.823,0.246C8.914,83.74,4.216,85.776,1.744,89.676
	c-2.476,3.903-2.315,9.03,0.479,15.236c22.366,49.723,42.645,85.876,65.755,117.228c16.193,21.938,32.435,37.123,51.109,47.784
	c19.674,11.255,41.722,16.727,67.402,16.727c2.911,0,5.921-0.071,8.956-0.213c14.922-0.727,20.458-6.128,21.158-20.657
	c0.333-7.425,1.145-15.212,4.795-21.853c2.304-4.184,4.452-4.184,5.158-4.184c1.36,0,3.046,0.626,4.857,1.799
	c3.248,2.12,6.033,4.96,8.316,7.441c2.149,2.357,4.274,4.738,6.401,7.12c4.59,5.141,9.336,10.456,14.294,15.497
	c10.852,11.041,22.807,15.897,36.538,14.843h51.252c0.109,0,0.219-0.004,0.328-0.011c5.107-0.337,9.53-3.17,12.135-7.772
	c3.227-5.701,3.162-12.974-0.174-19.46C356.718,251.867,351.808,245.601,347.506,240.442z"/>
</svg>
          <p class="text-base font-medium ml-4 text-gray-700">
            Continue with Google
          </p>
        </div>

        <TextInput
            placeholder="Email"
            v-model:input="email"
            inputType="name"
            :autoFocus="true"
            :error="errors && errors.email ? errors.email[0] : ''"
        />


        <TextInput
            placeholder="Password"
            v-model:input="password"
            inputType="name"
            :autoFocus="true"
            :error="errors && errors.password ? errors.password[0] : ''"
        />



        <div class="mt-8">
          <button
              button="submit"
              role="button"
              aria-label="create my account"
              class="focus:ring-2 focus:ring-offset-2 focus:ring-cyan-700 text-sm font-semibold leading-none text-white focus:outline-none bg-cyan-700 border rounded hover:bg-cyan-600 py-4 w-full"
          >

            Create my account
          </button>
        </div>
      </div>

    </div>
  </div>


  </body>
</template>


<script setup>

</script>

<style scoped>

</style>