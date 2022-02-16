<template>
    <div>
        <h3 v-if="user">Hi, {{user.nickname}}</h3>
        <h3 v-if="!user">You are not logged in!</h3>

        <h3
        v-for="(category, idx) in categories" :key="idx"
        >This is {{category.name}}</h3>
        <h3 v-if="!categories">Categories not found!</h3>
    </div>
</template>
<script>
// import axios from 'axios'
import {mapGetters} from 'vuex';
export default {
    name: 'home',
    // data(){
    //     return{
    //         user: null
    //     }
    // },
    // props:['user'],  
    computed:{
        ...mapGetters([
            'user',
            'categories'
            ])
    }
    // async mounted(){
    //         const response = await axios.get('user');
    //         this.user = response.data.data;
    // }
}
</script>