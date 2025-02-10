<script setup>

import { ref } from "vue";
import { useTenancyStore } from '~/layers/tenancy/store/tenancy';

const { name, logo, menu } = useTenancyStore();

function toggleDarkMode() {
    document.documentElement.classList.toggle('my-app-dark');
}


</script>

<template>
    <div class="guest-layout">
        <header>
            <Menubar :model="menu" class="menubar">
                <template #start>
                    <router-link v-slot="{ href, navigate }" to="/">

                        <img :src="logo" :alt="name" class="p-1" width="120" />
                    </router-link>
                    
                    <svg width="35" height="40" viewBox="0 0 35 40" fill="none" xmlns="http://www.w3.org/2000/svg"
                        class="h-8">
                        <path d="..." fill="var(--p-primary-color)" />
                        <path d="..." fill="var(--p-text-color)" />
                    </svg>
                </template>
                <template #item="{ item, props, hasSubmenu }">
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

                    <div class="flex items-center gap-2">
                        <!-- <Button label="Toggle Dark Mode" @click="toggleDarkMode()" /> -->
                    </div>

                    <div class="flex items-center gap-2">
                        <Avatar image="/assets/images/amyelsner.png" shape="circle" />
                    </div>
                </template>
            </Menubar>
        </header>
        <main class="main-content">
            <slot />
        </main>
        <footer class="layout-footer">
            <div class="footer-content">
                <div class="footer-logo">
                    <img :src="logo" :alt="name" width="60" />
                </div>
                <div class="footer-copyright">
                    <p>&copy; {{ new Date().getFullYear() }} {{ name }}. Todos los derechos reservados</p>
                </div>
                <div class="footer-stores">
                    <a href="#" class="store-button">
                    </a>
                    <a href="#" class="store-button">
                    </a>

                
                </div>
                <div class="footer-links">
                    <Button label="Ayuda" class="p-button-text" />
                    <Button label="Guía" class="p-button-text" />
                </div>
            </div>
        </footer>
    </div>
</template>


<style lang="scss">
.menubar {
    border: var(--my-app-menubar-border) !important;
}

.p-menubar-root-list {
    >.p-menubar-item {
        position: relative;

        &.p-focus,
        &:hover {
            &::after {
                height: 5px;
            }
        }

        &::after {
            background-color: var(--my-app-menubar-color);
            border-top-left-radius: 3px;
            border-top-right-radius: 3px;
            bottom: 0;
            content: "";
            height: 0;
            left: 50%;
            position: absolute;
            -ms-transform: translateX(-50%);
            transform: translateX(-50%);
            width: 50px;

        }
    }
}

.guest-layout {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
}

.main-content {
    flex: 1;
    display: flex;
    flex-direction: column;
}

.layout-footer {
    margin-top: auto;
    background-color: var(--my-app-surface-500);
    color: var(--my-app-surface-700);
    border-top: 1px solid var(--my-app-surface-600);
    padding: 1rem 2rem;
}

.footer-content {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 2rem;
}

.footer-logo img {
    height: auto;
    object-fit: contain;
}

.footer-stores {
    display: flex;
    gap: 1rem;
    align-items: center;
}

.store-button img {
    height: 40px;
    width: auto;
}

.footer-links {
    display: flex;
    gap: 0.5rem;
    
    .p-button-text {
        color: var(--my-app-surface-contrast-color);
        
        &:hover {
            background-color: rgba(255, 255, 255, 0.1);
        }
    }
}
</style>