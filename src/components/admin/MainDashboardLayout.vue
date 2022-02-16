<template>
    <div id="app">
        <v-app>
            <HeaderLayout @change="toggleMenu($event)"/> 
            <MainMenu :toggle="isOpen"/>

            <v-main>
                <router-view/>
            </v-main>

            <FooterLayout/>
        </v-app>
    </div>
</template>
<script>
import HeaderLayout from './HeaderLayout.vue';
import MainMenu from './MainMenu.vue';
import FooterLayout from './FooterLayout.vue';
export default {
    name: 'main-dashboard-layout',
    components:{
        HeaderLayout,
        MainMenu,
        FooterLayout
    },
    data(){
        return{
            isOpen: true
        }
    },
    methods:{
        toggleMenu(e){
            this.isOpen = e;
        }
    }
}
</script>