<template>
    <div class="container">
        <div class="flex">
            <div class="w-full lg:w-8/12 mr-6">    
                <div class="mb-5">
                    <div class="border rounded-lg overflow-hidden">
                        <div class="border-b px-6 py-4 bg-gray-50">
                            List of learns
                        </div>
                        <div class="h-96 overflow-y-scroll">
                            <template v-for="(learn, index) in learns" :key="index">
                                <router-link :to="`/learns/${learn.id}`" href="#" class="px-6 py-5 flex justify-between items-center hover:bg-gray-50 border-b mb-2">
                                    <span class="flex flex-col">
                                        <span class="text-gray-500 text-xs">status</span>
                                        <span>{{ learn.name }}</span>
                                    </span>
                                    <span class="text-gray-500 text-xs">{{ learn.when }}</span>
                                </router-link>
                            </template>
                        </div>
                    </div>
                </div>
            </div>
            <div class="w-full lg:w-4/12">
                <h1 class="font-semibold text-lg text-gray-800 mb-5">
                    Additional Learn
                </h1>
                <form @submit.prevent="add">
                    <div class="mb-5">
                        <label for="name" class="text-xs uppercase font-medium block mb-2">
                            Lesson name
                        </label>
                        <input type="text"  name="name" id="name" v-model="form.name" class="w-full border rounded-lg focus:outline-none focus:ring focus:border-blue-400 h-10 px-4 transition duration-150 placeholder-gray-500 placeholder-opacity-50" placeholder="Lesson Name">
                    </div>
                    <div class="mb-5">
                        <label for="when" class="text-xs uppercase font-medium block mb-2">
                            When
                        </label>
                        <input type="date"  v-model="form.when" name="when" id="when" class="w-full border rounded-lg focus:outline-none focus:ring focus:border-blue-400 h-10 px-4 transition duration-150">
                    </div>
                    <div class="mb-5">
                        <label for="description" class="text-xs uppercase font-medium block mb-2">
                            Description
                        </label>
                        <textarea v-model="form.description" name="description" id="description" class="w-full border rounded-lg focus:outline-none focus:ring focus:border-blue-400 py-4 px-4 transition duration-150 placeholder-gray-500 placeholder-opacity-50" placeholder="Description"></textarea>
                    </div>
                    <button class="px-4 h-10 rounded-lg focus:ring focus:ring-blue-300 bg-blue-500 hover:bg-blue-600 text-white">
                        Add Learn
                    </button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import { onMounted, reactive, ref } from 'vue'
// import { useRouter } from 'vue-router'

export default {

    setup() {
        const form = reactive({
            name: '',
            when: '',
            description: '',
        })

        //reactive state
        let learns = ref([])

        //mounted
        onMounted(() => {

            //get API from Laravel Backend
            axios.get('api/learn')
            .then(response => {
              
              //assign state learns with response data
              learns.value = response.data.data

            }).catch(error => {
                console.log(error.response.data)
            })

        })

        const add = async () => {
            let response = await axios.post('api/learn', form)
            learns.value.learns.unshift(response.data.learn)
        }

        //return
        return {
            learns,
            form,
            add
        }

    }
}
</script>

<style>

</style>