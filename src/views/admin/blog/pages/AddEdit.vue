<template>
    <div>
        <v-row class="ma-10">
            <v-col
            cols="3"
            md="9"
            >
                <v-text-field
                v-model="form.name"
                :counter="55"
                :rules="nameRules"
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
                :counter="355"
                :rules="descriptionRules"
                label="Description"
                required
                >
                </v-text-field>
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
    </div>
</template>
<script>
export default {
    name: 'blog-add-edit',
    data(){
        return{
            nameRules:[
                 v => !!v || 'Name is required',
                 v => (v && v.length <= 55) || 'Name must be less than 10 characters',
            ],
            descriptionRules:[
                 v => !!v || 'Description is required',
                 v => (v && v.length <= 55) || 'Description must be less than 10 characters',
            ],
            form:{
                name: null,
                description: null
            },
            isEdit: false,
            id: null
        }
    },
    mounted(){
        this.getId();
        this.getArticle();
    },
    methods:{
        getId(){
            const id = this.$route.params.id;

            if(id){
                this.id = id;
                this.isEdit = true
            }
        },

        async getArticle(){
            if(this.isEdit){
                this.$api.get(`categories/${this.id}`)
                .then(response => {
                    this.form = response.data.data;
                    // console.log(response.data);
                }, error => console.log(error));
            }else{
                console.log('Not isEdit');
            }
        },

        send(){
            // try{
            //     await this.$api.post('categories', this.form);
            //     // console.log(response);
            // }catch(err){console.log(err);}

            const formData = new FormData();

            for(let item in this.form){
                const element = this.form[item]
                if(Array.isArray(element)){
                    for(let i=0; i<element.length; i++){
                        formData.append(`${item}[]`, element[i]);
                    }
                }else{
                    formData.append(item, element);
                }
            }
            
            if(!this.isEdit){
                this.handleResponse(
                    this.add(formData)
                )
            }else{
                this.handleResponse(
                    this.update(formData)
                )
            }
        },
        handleResponse(httpResponse){
            console.log(httpResponse);
            this.$router.push('/admin/blog/')
        },

        async add(formData){
            try{
                const response = await this.$api.post('categories', formData);
                console.log(response);
            }catch(err){console.log(err);}
        },
        update(formData){
            return this.$api.post(`categories/${this.id}?_method=PUT`, formData)
            
            
        }
    }
}
</script>