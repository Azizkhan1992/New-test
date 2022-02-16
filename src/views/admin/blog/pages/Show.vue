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
                :disabled="true"
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
                :disabled="true"
                >
                </v-text-field>
            </v-col>
        </v-row>
    </div>
</template>
<script>
export default {
    name: 'show',
    data(){
        return{
            form:{
                name: null,
                description: null
            },
            nameRules:[
                 v => !!v || 'Name is required',
                 v => (v && v.length <= 55) || 'Name must be less than 10 characters',
            ],
             descriptionRules:[
                 v => !!v || 'Description is required',
                 v => (v && v.length <= 55) || 'Description must be less than 10 characters',
            ],
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
            }
        },
        async getArticle(){
            if(this.id){
                this.$api.get(`categories/${this.id}`)
                .then(response => {
                    this.form = response.data.data;
                    // console.log(response.data);
                }, error => console.log(error));
            }else{
                console.log('Not isEdit');
            }
        }
    }
}
</script>