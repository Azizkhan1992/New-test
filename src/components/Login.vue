<template>
    <form @submit.prevent="handleSubmit">

        <h3>Login</h3>

        <div class="form-group">
            <label>Email</label>
            <input type="text" class="form-control" v-model="email" placeholder="email">
        </div>
        <hr/>

        <div class="form-group">
            <label>Password</label>
            <input type="password" class="form-control" v-model="password" placeholder="password">
        </div>
        <hr/>

        <button class="btn btn-primary btn-block">Login</button>
    </form>
</template>
<script>

export default {
    name: 'login',
    data(){
        return{
            email: 'person@gmail.com',
            password: 'per123'
        }
    },
    methods:{
        async handleSubmit(){
            try{
                const response = await this.$api.post('login', {
                    email: this.email,
                    password: this.password
                });
                // console.log(response.data.data.user);
                localStorage.setItem('token', response.data.data.token);
                localStorage.setItem('user', JSON.stringify(response.data.data.user))
                this.$router.push('/');
            }catch(er){console.log(er);}
        },

       
    }
}
</script>