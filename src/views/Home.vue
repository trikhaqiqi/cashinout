<template>
   <div class="container mx-auto my-8"> 
        <!-- Start Hero Content -->
        <div class="py-8 md:py-16 hero__content text-center w-4/5 mx-auto fade-in fade-in-first mb-8">
          <h1 class="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight">Record your daily activities ranging from finances, activities, learning and others.</h1>
          <p class="text-xl pt-4 pb-8 text-gray-700">Explain your unique solution in short and how it solves a problem your customer has.</p>
          <div class="flex justify-center items-center flex-col">
            <router-link to="/register" class="bg-yellow-500 hover:bg-yellow-600 rounded border border-yellow-600 shadow font-semibold px-6 py-2 inline-block transition duration-500 ease-in-out cursor-pointer text-xl">Try now</router-link>
            <small class="capitalize mt-2 text-gray-700">Reduce Risk: Free 14 day trial</small>
          </div>
        </div>
        <!-- End Hero Content -->

        <div>
          <div class="lg:w-4/6 text-center mx-auto">
            <h2 class="text-2xl md:text-4xl font-bold">Cashinout about planning</h2>
          </div>
        </div>

        <div class="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
        <!--Card 1-->
          <div class="rounded overflow-hidden shadow-lg">
            <img class="w-full" src="../assets/logo2.jpg" alt="Mountain">
            <div class="px-6 py-4">
              <div class="font-bold text-xl mb-2">Ambition</div>
              <p class="text-gray-700 text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
              </p>
            </div>
            <div class="px-6 pt-4 pb-2">
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#ambition</span>
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#planning</span>
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#dream</span>
            </div>
          </div>
          <!--Card 2-->
          <div class="rounded overflow-hidden shadow-lg">
            <img class="w-full" src="../assets/logo1.jpg" alt="River">
            <div class="px-6 py-4">
              <div class="font-bold text-xl mb-2">Planning</div>
              <p class="text-gray-700 text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
              </p>
            </div>
            <div class="px-6 pt-4 pb-2">
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#ambition</span>
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#planning</span>
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#target</span>
            </div>
          </div>

          <!--Card 3-->
          <div class="rounded overflow-hidden shadow-lg">
            <img class="w-full" src="../assets/logo3.jpg" alt="Forest">
            <div class="px-6 py-4">
              <div class="font-bold text-xl mb-2">Target</div>
              <p class="text-gray-700 text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
              </p>
            </div>
            <div class="px-6 pt-4 pb-2">
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#ambition</span>
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#planning</span>
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#cash</span>
            </div>
          </div>
        </div>
      </div>
</template>

<script>
export default {

}
</script>

<style>

</style>