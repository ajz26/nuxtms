<script setup>
   
   import { ref } from "vue";


function toggleDarkMode() {
    document.documentElement.classList.toggle('my-app-dark');
}


const items = ref([
    {
        label: 'Home',
        route: '/login',
    },
    {
        label: 'Vehicles',
        route: '/vehicles',
        icon: 'pi pi-star'
    }
]);
</script>

<template>
    <div class="guest-layout">
        <header>
            <h1>Welcome to Our Site logueado</h1>
            <Menubar :model="items">
    <template #start>
        <svg width="35" height="40" viewBox="0 0 35 40" fill="none" xmlns="http://www.w3.org/2000/svg" class="h-8">
            <path d="..." fill="var(--p-primary-color)" />
            <path d="..." fill="var(--p-text-color)" />
        </svg>
    </template>
    <template #item="{ item, props , hasSubmenu }">
        <router-link v-if="item.route" v-slot="{ href, navigate }" :to="item.route" custom>
            <a v-ripple :href="href" v-bind="props.action" @click="navigate">
                <span :class="item.icon" />
                <span class="ml-2">{{ item.label }}</span>
            </a>
        </router-link>
        <a v-else v-ripple :href="item.url" :target="item.target" v-bind="props.action">
            <span :class="item.icon" />
            <span class="ml-2">{{ item.label }}</span>
            <span v-if="hasSubmenu" class="pi pi-angle-right ml-auto" />
        </a>
    </template>
    <template #end>
    <Button label="Toggle Dark Mode" @click="toggleDarkMode()" />

        <div class="flex items-center gap-2">
            <InputText placeholder="Search" type="text" class="w-32 sm:w-auto" />
            <Avatar image="/images/avatar/amyelsner.png" shape="circle" />
        </div>
    </template>
</Menubar>
        </header>
        <main>
          <slot />
        </main>
        <footer>
            <p>&copy; 2023 Your Company. All rights reserved.</p>
        </footer>
    </div>
</template>
