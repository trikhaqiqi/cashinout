<template>
    <div class="container">
        <div class="w-full lg:w-1/2">
            <div class="border rounded-lg overflow-hidden">
                <div class="border-b bg-gray-50 p-4">
                    Detail dream
                </div>
                <div class="p-4">
                    <div class="mb-4">
                        <label class="uppercase text-gray-500 tracking-wider text-xs">Amount</label>
                        <div class="leading-relaxed text-gray-800">
                            {{ dream.name }}
                        </div>
                    </div>
                    <div class="mb-4">
                        <label class="uppercase text-gray-500 tracking-wider text-xs">Stored</label>
                        <div class="leading-relaxed text-gray-800">
                            {{ dream.when }}
                        </div>
                    </div>
                    <div class="mb-4">
                        <label class="uppercase text-gray-500 tracking-wider text-xs">Description</label>
                        <div class="leading-relaxed text-gray-800">
                            {{ dream.description }}
                        </div>
                    </div>
                    <div>
                        <router-link :to="`/dreams/edit/${dream.id}`" class="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded mx-2">
                            Edit
                        </router-link>
                        <button @click.prevent="postDelete(dream.id)" class="bg-red-500 hover:bg-red-700 text-white py-2 px-4 rounded">
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

        //state dream
        const dream = reactive({
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
            axios.get(`http://localhost:8000/api/dream/${route.params.id}`)
            .then(response => {
              
              //assign state dream with response data
              dream.id    = response.data.data.id
              dream.name    = response.data.data.name
              dream.when    = response.data.data.when    
              dream.description  = response.data.data.description  

              console.log(route.params);

            }).catch(error => {
                console.log(error.response.data)
            })

        })

        //method delete
        function postDelete(id) {
                    
        //delete data post by ID
        axios.delete(`http://localhost:8000/api/dream/${id}`)
        .then(() => {

                //redirect ke dream index
                router.push({
                    name: 'dreams.index'
                });

            }).catch(error => {
                console.log(error.response.data)
            })

        }


        //return
        return {
            dream,
            validation,
            router,
            postDelete
        }

    }

}
</script>
