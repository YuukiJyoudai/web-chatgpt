<script setup lang="ts">
import {ArrowRightIcon} from '@heroicons/vue/20/solid'
</script>

<template>
    <input class="bg-[#3A3F47] text-white placeholder:text-[#949494] text-sm rounded-2xl p-4 w-full outline-none" />
    <!-- <button class="bg-green-500 py-2 px-4 bg-emerald-500 text-white font-semibold rounded-lg shadow-md focus:ouline-none">Button</button> -->
    <button class="absolute right-0 mr-4 mt-2 bg-white hover:opacity-50 active:opacity-100 transition-colors py-2 px-3 rounded-xl">
        <ArrowRightIcon class="w-5 h-5 fill-[#3A3F47]" />
    </button>
</template>