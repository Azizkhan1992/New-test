<template>
    <div>
        <v-row class="pa-5">
             <v-col
           cols="12"
           md="2"
           offset-md="10"
           >
           <router-link to="/admin/product/add">
            <v-btn class="mx-2"
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
                       <th>Name</th>
                       <th>Description</th>
                       <th>Klass</th>
                       <th>Price Currency</th>
                   </tr>
               </thead>
               <tbody>
                   <template>
                       <tr v-for="(product, idx) of products" :key="idx">
                           <td>{{product.name}}</td>
                           <td>{{product.description}}</td>
                           <td>{{product.weight_class}}</td>
                           <td>{{product.price_currency}}</td>
                           <td>
                               <button type="button" @click="edit(product.id)">Edit</button>
                               <button type="button" @click="remove(product.id)">Delete</button>
                           </td>
                       </tr>
                   </template>
                   <tr>
                       <td colspan="5">No Data</td>
                   </tr>
               </tbody>
           </table>
           </v-col>

        </v-row>

    </div>
</template>
<script>
export default {
    name: 'products',
    data(){
        return{
            products:[]
        }
    },
    mounted(){
        this.load();
    },
    methods:{
        async load(){
            try{
                const res = await this.$api.get('products');
                this.products = res.data.data;
                console.log(res);
            }catch(err){console.log(err);}
        },
        edit(id){
            this.$router.push({name: 'ProductEdit', params: {id: id}});
        },
        async remove(id){
            await this.$api.delete(`/products/${id}`);
            this.load();
        }
    }
}
</script>