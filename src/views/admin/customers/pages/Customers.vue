<template>
    <div>
        <!-- <v-row class="pa-5">
             <v-col
           cols="12"
           md="2"
           offset-md="10"
           >
           <router-link to="/admin/customer/add">
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
                        <th>Middle Name</th>
                       <th>Last Name</th>
                       <th>Phone Number</th>
                   </tr>
                   <tr>
                       <th>Company Name</th>
                       <th>Limit Credit</th>
                   </tr>
               </thead>
               <tbody>
                   <template>
                       <tr v-for="(cust, idx) in custom" :key="idx">
                           <td>{{cust.middle_name}}</td>
                           <td>{{cust.last_name}}</td>
                           <td>{{cust.phone_number}}</td>
                           
                       </tr>
                       <tr v-for="(customer, idx) in customers" :key="idx">
                           <td>{{customer.company_name}}</td>
                           <td>{{customer.limit_credit}}</td>
                           <td>
                               <button type="button">Edit</button>
                               <button type="button">Delete</button>
                           </td>
                       </tr>
                       
                   </template>
                   <tr>
                       <td colspan="5">No Data</td>
                   </tr>
               </tbody>
           </table>
           </v-col>

        </v-row> -->
         <v-row class="pa-5">
             <v-col
             style="cursor:pointer"
           cols="9"
           md="1"
           offset-md="10"
           >
        <router-link to="/admin/customer/add">
            <v-btn
            class="mx-12"
            color="primary"
            dark
            >
                New Item
            </v-btn>
        </router-link>
             </v-col>
         </v-row>
    <v-data-table
        :headers="headers"
        :items="customers"
        :items-per-page="5"
        class="elevation-1"
    >
     
    <!-- <template v-slot:body="{items}">
        <tbody>
            <tr v-for="(item, idx) in items" :key="idx">
                <td>{{ item.company_name }}</td>
                <td>{{item.departament}}</td>
                <td>{{item.limit_credit}}</td>
                <td>{{item.personal_info.first_name}}</td>
                <td>{{item.personal_info.last_name}}</td>
                <td>{{item.personal_info.phone_number}}</td>
            </tr>
        </tbody>
    </template> -->
    <template v-slot:item.actions="{ item }">
        <span
            style="cursor:pointer"
            small
            class="mr-2"
            @click="editItem(item.id)"
        >
            Edit
        </span>
        <span
            style="cursor:pointer"
            small
            @click="deleteItem(item.id)"
        >
            Delete
        </span>
        </template>
    </v-data-table>
    </div>
</template>
<script>
export default {
    name: 'customers',
    data(){
        return{
            headers: [
                {text: 'Company name', value: 'company_name'},
                {text: 'Department', value: 'departament'},
                {text: 'Limit credit', value: 'limit_credit'},
                {text: 'First name', value: 'personal_info.first_name'},
                {text: 'Last name', value: 'personal_info.last_name'},
                {text: 'Phone number', value: 'personal_info.phone_number'},
                { text: 'Actions', value: 'actions', sortable: false },
            ],
            customers:[],
            custom: []
        }
    },
    mounted(){
        this.load();
    },
    methods:{
        async load(){
            try{
                const res = await this.$api.get('customers');
                this.customers = res.data.data;
            }catch(err){console.log(err);}
        },
        editItem(e) {console.log(e)},
        deleteItem(e) {console.log(e)}

        // onLoad(department){
        //    for(let subdep in department){
        //     //    console.log(department[subdep])
        //        let one = Object.entries(department[subdep])
        //        let two = one.slice(5)
        //     //    console.log(two)
        //        for(let x in two){
        //            let sree = two[x]
        //            this.custom = sree[1]
        //         //    console.log(this.custom)
        //        }
        //     //    for(let out in subdep){
        //     //        let row = subdep[out]
        //     //        console.log(row)
                   
        //         //   if(Array.isArray(row)){
        //         //       for(let one of row){
        //         //           return one;
        //         //       }
        //         //   }else{
        //         //           let lot = Array.from(row)
        //         //           console.log(lot)
        //         //           this.custom = lot.slice(6);
        //         //         //   console.log(this.custom)
        //         //       }
        //        }
               
        //    }
        }
}
</script>