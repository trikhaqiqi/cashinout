<template>
        <div class="container">
        <div class="w-full lg:w-1/3">
            <div class="border rounded-lg overflow-hidden">
                <div class="bg-gray-50 py-4 px-4 border-b border-gray-200">
                    Edit Activity
                </div>
                <div class="p-4">
                    <form @submit.prevent="update">
                        <div class="mb-5">
                            <label for="name" class="text-xs uppercase font-medium block mb-2">
                                Name
                            </label>
                            <input type="text" name="name" v-model="activity.name" id="name" class="w-full border rounded-lg focus:outline-none focus:ring focus:border-blue-400 h-10 px-4 transition duration-150">
                        </div>
                        <!-- <div class="mb-5">
                            <label for="when" class="text-xs uppercase font-medium block mb-2">
                                When
                            </label>
                            <input type="date" name="when" v-model="activity.when" id="when" class="w-full border rounded-lg focus:outline-none focus:ring focus:border-blue-400 h-10 px-4 transition duration-150">
                        </div> -->
                        <div class="mb-5">
                            <label for="description" class="text-xs uppercase font-medium block mb-2">
                                Description
                            </label>
                            <textarea  name="description" v-model="activity.description" id="description" class="w-full border rounded-lg focus:outline-none focus:ring focus:border-blue-400 py-4 px-4 transition duration-150"></textarea>
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
        const activity = reactive({
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
            axios.get(`/api/activity/${route.params.id}`)
            .then(response => {
              
              //assign state posts with response data
              activity.name    = response.data.data.name
              activity.slug    = response.data.data.slug
              activity.when    = response.data.data.when    
              activity.description  = response.data.data.description  

            }).catch(error => {
                console.log(error.response.data)
            })

        })

        //method update
        function update() {

            let name   = activity.name
            let slug   = activity.slug
            let when   = activity.when
            let description = activity.description

            axios.put(`/api/activity/${route.params.id}`, {
                name: name,
                slug: slug,
                when: when,
                description: description
            }).then(() => {

                //redirect ke activity index
                router.push({
                    name: 'activities.index'
                })

            }).catch(error => {
                //assign state validation with error 
                validation.value = error.response.data
            })

        }

        //return
        return {
            activity,
            validation,
            router,
            update
        }

    }

}
</script>

<style>

</style>