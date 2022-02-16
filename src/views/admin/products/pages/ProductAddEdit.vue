<template>
    <div>
        <v-row class="ma-10">
            <v-col
            cols="3"
            md="9"
            >
                <v-text-field
                v-model="form.name"
                label="Name"
                required
                >
                </v-text-field>
            </v-col>

            <v-col
            cols="3"
            md="9"
            >
                <v-text-field
                v-model="form.description"
                label="Description"
                required
                >
                </v-text-field>
            </v-col>

             <v-col
            cols="3"
            md="9"
            >
                <v-text-field
                v-model="form.weight_class"
                label="Klass"
                required
                >
                </v-text-field>
            </v-col>

             <v-col
            cols="3"
            md="9"
            >
                <v-text-field
                v-model="form.minimun_price"
                label="Minimum price"
                required
                >
                </v-text-field>
            </v-col>

             <v-col
            cols="3"
            md="9"
            >
                <v-text-field
                v-model="form.price_currency"
                label="Price Currency"
                required
                >
                </v-text-field>
            </v-col>

             <v-col
             cols="3"
             md="9"
             >
                <v-select
                v-model="form.category_id"
                :items="categories"
                attach
                chips
                item-value="id"
                item-text="name"
                label="Categories"
                required
                >
                </v-select>
            </v-col>
        </v-row>

         <v-row>
            <v-col
            cols="12"
            md="2"
            offset-md="10"
            >
                <v-btn
                class="ma-4"
                color="success"
                @click="send"
                >
                {{ isEdit ? "Edit" : "Add"}}
                </v-btn>
            </v-col>
        </v-row>
        <v-row>
            <v-col
            cols="12"
            md="2"
            >
            <v-btn
            color="success"
            @click="getIdx"
            >Click</v-btn>
            </v-col>
        </v-row>
    </div>
</template>
<script>
export default {
    name: 'product-add-edit',
    data(){
        return{
            form:{
                name: null,
                description: null,
                weight_class: null,
                minimun_price: null,
                price_currency: null,
                category_id: null
            },
            categories: [],
            isEdit: false,
            id: null,
            idx: null
        }
    },
    mounted(){
       this.getId();
       this.getArticle();
       this.getCategories();
    },
    methods:{
         getId(){
            const id = this.$route.params.id;

            if(id){
                this.id = id;
                this.isEdit = true;
            }
        },

        getArticle(){
            if(this.isEdit){
                this.$api.get(`products/${this.id}`)
                .then(response=>{
                    this.form = response.data.data;
                    console.log(response.data.data);
                })
            }
        },

        send(){
            /*const formData = new FormData();

            for(let item in this.form){
                let element = this.form[item]
                if(Array.isArray(element)){
                    for(let i=0; i<element.length; i++){
                        formData.append(`${item}[]`, element[i]);
                    }
                }else{
                    formData.append(item, element);
                }
            }*/

            if(!this.isEdit){
                this.handleResponse(
                    this.add(this.form)
                )
            }else{
                this.handleResponse(
                    this.update(this.form)
                )
            }
        },

        handleResponse(httpResponse){
            this.$router.push('/admin/product')
            console.log(httpResponse);
        },

        async add(formData){
           try{
               const res = await this.$api.post('products', formData)
               console.log(res.data.data);
           }catch(err){console.log(err);}
        },

        update(formData){
            return this.$api.put(`products/${this.id}?_method=PUT`, formData)
        },
        async getCategories(){
            await this.$api.get('categories')
            .then(response=>{
                this.categories = response.data.data;
                console.log(response.data.data.find(item=>item.id==1));
            },error=>{console.log(error)})
        },
        getIdx(){
            this.idx = this.categories.find(item=>item.id==1);
            console.log(this.idx);
        }
    }
}
</script>