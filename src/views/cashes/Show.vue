<template>
    <div class="container">
        <div class="w-full lg:w-1/2">
            <div class="border rounded-lg overflow-hidden">
                <div class="border-b bg-gray-50 p-4">
                    Detail cashes
                </div>
                <div class="p-4">
                    <div class="mb-4">
                        <label class="uppercase text-gray-500 tracking-wider text-xs">Name</label>
                        <div class="leading-relaxed text-gray-800">
                            {{ transaction.name }}
                        </div>
                    </div>
                    <div class="mb-4">
                        <label class="uppercase text-gray-500 tracking-wider text-xs">Amount</label>
                        <div class="leading-relaxed text-gray-800">
                            Rp {{ transaction.amount }}
                        </div>
                    </div>
                    <div class="mb-4">
                        <label class="uppercase text-gray-500 tracking-wider text-xs">Stored</label>
                        <div class="leading-relaxed text-gray-800">
                            {{ transaction.when }}
                        </div>
                    </div>
                    <div class="mb-4">
                        <label class="uppercase text-gray-500 tracking-wider text-xs">Description</label>
                        <div class="leading-relaxed text-gray-800">
                            {{ transaction.description }}
                        </div>
                    </div>
                    <!-- <div>
                        <router-link :to="{name: 'cashes.edit', params:{id: transaction.id}}" class="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded mx-2">
                            Edit
                        </router-link>
                        <button class="bg-red-500 hover:bg-red-700 text-white py-2 px-4 rounded">
                            Delete
                        </button>
                    </div> -->
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import axios from 'axios'
import router from '@/router'
export default {
    setup () {
        const route = useRoute()
        const transaction = ref([])
        let slug = route.params.slug

        const getTransaction = async () => {
            try {
                let { data } = await axios.get(`api/cash/${slug}`)
                transaction.value = data.data
            } catch {
                router.replace('/cashes')
            }
        }

        onMounted(() => {
            getTransaction()
        })

        return { transaction }
    }
}
</script>