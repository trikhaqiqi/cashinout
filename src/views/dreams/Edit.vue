<template>
        <div class="container">
        <div class="w-full lg:w-1/3">
            <div class="border rounded-lg overflow-hidden">
                <div class="bg-gray-50 py-4 px-4 border-b border-gray-200">
                    Edit Dream
                </div>
                <div class="p-4">
                    <form @submit.prevent="update">
                        <div class="mb-5">
                            <label for="name" class="text-xs uppercase font-medium block mb-2">
                                Name
                            </label>
                            <input type="text" name="name" v-model="dream.name" id="name" class="w-full border rounded-lg focus:outline-none focus:ring focus:border-blue-400 h-10 px-4 transition duration-150">
                        </div>
                        <!-- <div class="mb-5">
                            <label for="when" class="text-xs uppercase font-medium block mb-2">
                                When
                            </label>
                            <input type="date" name="when" v-model="dream.when" id="when" class="w-full border rounded-lg focus:outline-none focus:ring focus:border-blue-400 h-10 px-4 transition duration-150">
                        </div> -->
                        <div class="mb-5">
                            <label for="description" class="text-xs uppercase font-medium block mb-2">
                                Description
                            </label>
                            <textarea  name="description" v-model="dream.description" id="description" class="w-full border rounded-lg focus:outline-none focus:ring focus:border-blue-400 py-4 px-4 transition duration-150"></textarea>
                        </div>
                        <button class="px-4 h-10 rounded-lg focus:ring focus:ring-blue-300 bg-blue-500 hover:bg-blue-600 text-white">
                            Update
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { reactive, ref, onMounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import axios from 'axios'

export default {

    setup() {

        //state posts
        const dream = reactive({
            name: '',
            slug: '',
            when: '',
            description: ''
        })

        //state validation
        const validation = ref([])

        //vue router
        const router = useRouter()

        //vue router
        const route = useRoute()

        //mounted
        onMounted(() => {

            //get API from Laravel Backend
            axios.get(`/api/dream/${route.params.id}`)
            .then(response => {
              
              //assign state posts with response data
              dream.name    = response.data.data.name
              dream.slug    = response.data.data.slug
              dream.when    = response.data.data.when    
              dream.description  = response.data.data.description  

            }).catch(error => {
                console.log(error.response.data)
            })

        })

        //method update
        function update() {

            let name   = dream.name
            let slug   = dream.slug
            let when   = dream.when
            let description = dream.description

            axios.put(`/api/dream/${route.params.id}`, {
                name: name,
                slug: slug,
                when: when,
                description: description
            }).then(() => {

                //redirect ke dream index
                router.push({
                    name: 'dreams.index'
                })

            }).catch(error => {
                //assign state validation with error 
                validation.value = error.response.data
            })

        }

        //return
        return {
            dream,
            validation,
            router,
            update
        }

    }

}
</script>

<style>

</style>