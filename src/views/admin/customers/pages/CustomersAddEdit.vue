<template>
    <div>
        <v-row class="ma-10">
            <v-col
            cols="3"
            md="9"
            >
                <v-text-field
                v-model="form.first_name"
                label="First Name"
                required
                >
                </v-text-field>
            </v-col>

            <v-col
            cols="3"
            md="9"
            >
                <v-text-field
                v-model="form.middle_name"
                label="Middle Name"
                required
                >
                </v-text-field>
            </v-col>

             <v-col
            cols="3"
            md="9"
            >
                <v-text-field
                v-model="form.last_name"
                label="Last Name"
                required
                >
                </v-text-field>
            </v-col>

             <v-col
            cols="3"
            md="9"
            >
                <v-text-field
                v-model="form.phone_number"
                label="Phone Number"
                required
                >
                </v-text-field>
            </v-col>

             <v-col
            cols="3"
            md="9"
            >
                <v-text-field
                v-model="form.birthday"
                label="Birthday"
                type="text"
                required
                >
                </v-text-field>
            </v-col>

             <v-col
            cols="3"
            md="9"
            >
                <v-text-field
                v-model="form.company_name"
                label="Company Name"
                required
                >
                </v-text-field>
            </v-col>

             <v-col
            cols="3"
            md="9"
            >
                <v-text-field
                v-model="form.job_title"
                label="Job Title"
                required
                >
                </v-text-field>
            </v-col>

             <v-col
            cols="3"
            md="9"
            >
                <v-text-field
                v-model="form.departament"
                label="Departament"
                required
                >
                </v-text-field>
            </v-col>

             <v-col
            cols="3"
            md="9"
            >
                <v-text-field
                v-model="form.limit_credit"
                label="Limit Credit"
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
    name: 'customers-add-edit',
    data(){
        return{
            form:{
                first_name: null,
                middle_name: null,
                last_name: null,
                phone_number: null,
                birthday: null,
                company_name: null,
                job_title: null,
                departament: null,
                limit_credit: null
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
                this.isEdit = true;
            }
        },

        getArticle(){
            if(this.isEdit){
                this.$api.get(`customers/${this.id}`)
                .then(response=>{
                    this.form = response.data.data;
                    console.log(response.data.data);
                })
            }
        },

        send(){
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
            this.$router.push('/admin/customer')
            console.log(httpResponse);
        },

        async add(formData){
           try{
               const res = await this.$api.post('customers', formData)
               console.log(res.data.data);
           }catch(err){console.log(err);}
        },

        update(formData){
            return this.$api.post(`customers/${this.id}?_method=PUT`, formData)
        }
    }
}
</script>