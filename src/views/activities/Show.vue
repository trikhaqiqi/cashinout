<template>
    <div class="container">
        <div class="w-full lg:w-1/2">
            <div class="border rounded-lg overflow-hidden">
                <div class="border-b bg-gray-50 p-4">
                    Detail activity
                </div>
                <div class="p-4">
                    <div class="mb-4">
                        <label class="uppercase text-gray-500 tracking-wider text-xs">Name Activity</label>
                        <div class="leading-relaxed text-gray-800">
                            {{ activity.name }}
                        </div>
                    </div>
                    <div class="mb-4">
                        <label class="uppercase text-gray-500 tracking-wider text-xs">When</label>
                        <div class="leading-relaxed text-gray-800">
                            {{ activity.when }}
                        </div>
                    </div>
                    <div class="mb-4">
                        <label class="uppercase text-gray-500 tracking-wider text-xs">Description</label>
                        <div class="leading-relaxed text-gray-800">
                            {{ activity.description }}
                        </div>
                    </div>
                    <div>
                        <router-link :to="`/activities/edit/${activity.id}`" class="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded mx-2">
                            Edit
                        </router-link>
                        <button @click.prevent="postDelete(activity.id)" class="bg-red-500 hover:bg-red-700 text-white py-2 px-4 rounded">
                            Delete
                        </button>
                    </div>
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

        //state activity
        const activity = reactive({
            id: '',
            name: '',
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
            axios.get(`http://localhost:8000/api/activity/${route.params.id}`)
            .then(response => {
              
              //assign state activity with response data
              activity.id    = response.data.data.id
              activity.name    = response.data.data.name
              activity.when    = response.data.data.when    
              activity.description  = response.data.data.description  

              console.log(route.params);

            }).catch(error => {
                console.log(error.response.data)
            })

        })

        //method delete
        function postDelete(id) {
                    
        //delete data post by ID
        axios.delete(`http://localhost:8000/api/activity/${id}`)
        .then(() => {

                //redirect ke activity index
                router.push({
                    name: 'activities.index'
                });

            }).catch(error => {
                console.log(error.response.data)
            })

        }


        //return
        return {
            activity,
            validation,
            router,
            postDelete
        }

    }

}
</script>
