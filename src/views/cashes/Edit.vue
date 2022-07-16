<template>
    <!-- <div class="container">
        <div class="w-full lg:w-4/12">
            <h1 class="font-semibold text-lg text-gray-800 mb-5">
                Edit Transactions History
            </h1>
            <form @submit.prevent="add">
                    <div class="mb-5">
                        <label for="name" class="text-xs uppercase font-medium block mb-2">
                            Name
                        </label>
                        <input type="text" name="name" v-model="transaction.name" id="name" class="w-full border rounded-lg focus:outline-none focus:ring focus:border-blue-400 h-10 px-4 transition duration-150">
                    </div>
                    <div class="mb-5">
                        <label for="amount" class="text-xs uppercase font-medium block mb-2">
                            Amount
                        </label>
                        <input type="text" v name="amount" v-model="transaction.amount" id="amount" class="w-full border rounded-lg focus:outline-none focus:ring focus:border-blue-400 h-10 px-4 transition duration-150">
                    </div>
                    <div class="mb-5">
                        <label for="when" class="text-xs uppercase font-medium block mb-2">
                            When
                        </label>
                        <input type="date" name="when" v-model="transaction.when" id="when" class="w-full border rounded-lg focus:outline-none focus:ring focus:border-blue-400 h-10 px-4 transition duration-150">
                    </div>
                    <div class="mb-5">
                        <label for="description" class="text-xs uppercase font-medium block mb-2">
                            Description
                        </label>
                        <textarea  name="description" v-model="transaction.description" id="description" class="w-full border rounded-lg focus:outline-none focus:ring focus:border-blue-400 py-4 px-4 transition duration-150"></textarea>
                    </div>
                <button class="px-4 h-10 rounded-lg focus:ring focus:ring-blue-300 bg-blue-500 hover:bg-blue-600 text-white">
                    Update
                </button>
            </form>
        </div>
    </div> -->

        <div class="container">
        <div class="w-full lg:w-1/3">
            <div class="border rounded-lg overflow-hidden">
                <div class="bg-gray-50 py-4 px-4 border-b border-gray-200">
                    Edit Transactions History
                </div>
                <div class="p-4">
                    <form @submit.prevent="">
                        <div class="mb-5">
                            <label for="name" class="text-xs uppercase font-medium block mb-2">
                            Name
                        </label>
                        <input type="text" name="name" v-model="transaction.name" id="name" class="w-full border rounded-lg focus:outline-none focus:ring focus:border-blue-400 h-10 px-4 transition duration-150">
                        </div>

                        <div class="mb-5">
                        <label for="amount" class="text-xs uppercase font-medium block mb-2">
                            Amount
                        </label>
                        <input type="text" v name="amount" v-model="transaction.amount" id="amount" class="w-full border rounded-lg focus:outline-none focus:ring focus:border-blue-400 h-10 px-4 transition duration-150">
                    </div>
                    <div class="mb-5">
                        <label for="when" class="text-xs uppercase font-medium block mb-2">
                            When
                        </label>
                        <input type="date" name="when" v-model="transaction.when" id="when" class="w-full border rounded-lg focus:outline-none focus:ring focus:border-blue-400 h-10 px-4 transition duration-150">
                    </div>
                    <div class="mb-5">
                        <label for="description" class="text-xs uppercase font-medium block mb-2">
                            Description
                        </label>
                        <textarea  name="description" v-model="transaction.description" id="description" class="w-full border rounded-lg focus:outline-none focus:ring focus:border-blue-400 py-4 px-4 transition duration-150"></textarea>
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
import { onMounted, ref } from '@vue/runtime-core';
import { useRoute } from 'vue-router';
import axios from 'axios';

export default {

    setup() {
        const route = useRoute()
        const transaction = ref([])
        let slug = route.params.slug

        const getTransaction = async () => {
            let { data } = await axios.get(`api/cash/${slug}`)
            transaction.value = data.data

            console.log(data);
        }

        onMounted(() => {
            getTransaction()
        })

        return { transaction }
    }
}
</script>