<template>
        <div class="container">
        <div class="w-full lg:w-1/3">
            <div class="border rounded-lg overflow-hidden">
                <div class="bg-gray-50 py-4 px-4 border-b border-gray-200">
                    Edit Target
                </div>
                <div class="p-4">
                    <form @submit.prevent="update">
                        <div class="mb-5">
                            <label for="name" class="text-xs uppercase font-medium block mb-2">
                                Name
                            </label>
                            <input type="text" name="name" v-model="target.name" id="name" class="w-full border rounded-lg focus:outline-none focus:ring focus:border-blue-400 h-10 px-4 transition duration-150">
                        </div>
                        <!-- <div class="mb-5">
                            <label for="when" class="text-xs uppercase font-medium block mb-2">
                                When
                            </label>
                            <input type="date" name="when" v-model="target.when" id="when" class="w-full border rounded-lg focus:outline-none focus:ring focus:border-blue-400 h-10 px-4 transition duration-150">
                        </div> -->
                        <div class="mb-5">
                            <label for="description" class="text-xs uppercase font-medium block mb-2">
                                Description
                            </label>
                            <textarea  name="description" v-model="target.description" id="description" class="w-full border rounded-lg focus:outline-none focus:ring focus:border-blue-400 py-4 px-4 transition duration-150"></textarea>
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
        const target = reactive({
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
            axios.get(`/api/target/${route.params.id}`)
            .then(response => {
              
              //assign state posts with response data
              target.name    = response.data.data.name
              target.slug    = response.data.data.slug
              target.when    = response.data.data.when    
              target.description  = response.data.data.description  

            }).catch(error => {
                console.log(error.response.data)
            })

        })

        //method update
        function update() {

            let name   = target.name
            let slug   = target.slug
            let when   = target.when
            let description = target.description

            axios.put(`/api/target/${route.params.id}`, {
                name: name,
                slug: slug,
                when: when,
                description: description
            }).then(() => {

                //redirect ke target index
                router.push({
                    name: 'targets.index'
                })

            }).catch(error => {
                //assign state validation with error 
                validation.value = error.response.data
            })

        }

        //return
        return {
            target,
            validation,
            router,
            update
        }

    }

}
</script>

<style>

</style>