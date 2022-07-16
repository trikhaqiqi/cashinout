<template>
    <div class="border-b lg:py-3">
        <div class="flex flex-col lg:flex-row justify-between">
            <div class="flex justify-between items-center border-b lg:border-b-0 py-4 lg:py-0 px-6 lg:pr-0">
                <router-link exact-active-class="bg-transparent" class="font-semibold uppercase" to='/'>
                    Cashinout
                </router-link>

                <button @click="isOn = !isOn" class="block lg:hidden focus:outline-none">
                    <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path :class="!isOn ? 'block' : 'hidden'" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
                        <path :class="isOn ? 'block' : 'hidden'" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>
            <div :class="isOn ? 'block' : 'hidden'" class="py-4 lg:py-0 lg:flex flex-col lg:flex-row justify-between lg:items-center w-full px-6">
                <div class="flex flex-col lg:flex-row lg:items-center">
                    <router-link :class="className" to="/about">About</router-link>
                    <router-link :class="className" to="/cashes" v-if="authenticated">Cash</router-link>
                    <router-link :class="className" to="/learns" v-if="authenticated">Learn</router-link>
                    <router-link :class="className" to="/activities" v-if="authenticated">Activity</router-link>
                    <router-link :class="className" to="/targets" v-if="authenticated">Target</router-link>
                    <router-link :class="className" to="/dreams" v-if="authenticated">Dream</router-link>
                </div>
                <div class="flex items-center" v-if="authenticated">
                    <div>
                        <div class=" dropdown relative inline-block text-left mr-6">
                            <div>
                                <button type="button" class="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500" id="menu-button" aria-expanded="true" aria-haspopup="true">
                                More
                                <!-- Heroicon name: solid/chevron-down -->
                                <svg class="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                    <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                                </svg>
                            </button>
                        </div>
                            <div class="dropdown-menu absolute hidden origin-top-right right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
                                <div class="py-1" role="none">
                                    <a href="#" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-0">Account settings</a>
                                    
                                    <router-link class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-0" to="/login">{{ user.name }}</router-link>
                                    <button @click="logout" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-0">Sign out</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div class="flex flex-col lg:flex-row lg:items-center" v-else>
                    <router-link :class="className" to="/login">Login</router-link>
                    <router-link :class="className" to="/register">Register</router-link>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
import { computed, ref } from 'vue'
import store from '@/store'
import router from '@/router'
export default {
    setup () {
        const className = "px-4 py-2 mx-2"
        const isOn = ref(false)

        const authenticated = computed(() => store.getters['auth/authenticated'])
        const user = computed(() => store.getters['auth/user'])

        const logout = async () => {
            store.dispatch("auth/logout")
            router.replace("/")
        }

        return { className, isOn, authenticated, user, logout }
    }
}
</script>

<style>
.dropdown:hover .dropdown-menu {
  display: block;
}
</style>