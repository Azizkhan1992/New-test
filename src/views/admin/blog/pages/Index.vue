<template>
    <div>
        <v-row class="pa-10">
            <v-col
            cols="12"
            md="2"
            offset-md="10"
            >
            <router-link to="/admin/blog/add">
            <v-btn  class="mx-2"
            color="indigo"
            fab
            dark>
            <v-icon dark>
                mdi-plus
            </v-icon>
            </v-btn>
            </router-link>
            </v-col>

            <v-col cols="12"
            sm="12"
            md="12"
            >
            <table>
                <thead>
                    <tr>
                        <th><h3>Name</h3></th>
                        <th><h3>Description</h3></th>
                        <th><h3>Status</h3></th>
                        <th><h3>Actions</h3></th>
                    </tr>
                </thead>

                <tbody>
                    <template v-if="categories.length>0">
                        <tr v-for="(category, idx) in categories" :key="idx">
                            <td><h4>{{category.name}}</h4></td>
                            <td><h4>{{category.description}}</h4></td>
                            <td><h4>{{categoryStatusesList[category.status]}}</h4></td> 
                            <td>
                                <router-link :to="`/admin/blog/show/${category.id}`">Show</router-link>
                                <!-- <button type="button" @click="showCategory(category.id)"><h4>Show</h4></button> -->
                                <br/>
                                <button type="button" @click="editCategory(category.id)"><h4>Edit</h4></button>
                                <br/>
                                <button type="button" @click="remove(category.id)"><h4>Delete</h4></button>
                            </td>
                        </tr>
                    </template>
                    <tr v-else>
                        <td>No Data</td>
                    </tr>
                </tbody>
            </table>
            </v-col>
        </v-row>

        <!-- <v-row>
            <v-col>
                <Show :categories="categories"/>
            </v-col>
        </v-row> -->

    </div>
</template>
<script>
import {categoryStatusesList} from '@/static/statusId'
// import Show from './Show.vue'
export default {
    name: 'index',
    components:{
        // Show
    },
    data(){
        return{
            categories:[],
            categoryStatusesList,
        }
    },
    mounted(){
        this.load();
    },
    methods:{
        async load(){
            try{
            const res = await this.$api.get('categories');
            this.categories = res.data.data;
            console.log(res.data.data);
            }catch(err){console.log(err);}
        },
        showCategory(id){
            this.$router.push({name: 'show', params: {id: id}});
        },
        editCategory(id) {
            this.$router.push({name: "BlogEdit", params: {id: id}});
        },
        async remove(id){
           const res = await this.$api.delete(`/categories/${id}`);
           this.load();
           alert(res.data?.message)
        }
    }
}
</script>