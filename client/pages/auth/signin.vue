<template>
    <div>
        <h1>Login Page</h1>
        <input type="text" v-model="email" placeholder="이메일 입력">
        <br/>
        <input type="password" v-model="password" placeholder="비밀번호 입력">
        <br>
        <input type="button" value="Sign in" @click="signIn()">
        <input type="button" value="Sign Up" @click="signUp()">
        <input type="button" value="Sign Out" @click="signOut()">
    </div>
</template>

<script>

import axios from 'axios';
axios.defaults.withCredentials = true;
axios.defaults.headers = {'Content-Type': 'application/json'}
export default {
    async asyncData (process){
        
    },
    data () {
        return {
            email: '',
            password : ''
        }
    },
    methods:{
        async signIn(){
            const params = {
                email : this.email,
                password : this.password
            };
            const result = (await axios.post('http://localhost:3000/api/auth/signin',params)).data;
            if(result.statusCode == 200){
                await this.$store.commit('SET_USER','김바다');
                await this.$router.push('/sites/mypage');
            }
        },
        async signUp(){
            const params = {
                email : this.email,
                password : this.password
            };
            const result = await axios.post('http://localhost:3000/api/auth/signup',params);
        },
        async signOut(){
            const result = await axios.get('http://localhost:3000/api/auth/signout');
        }
    },
}
</script>

<style>

</style>
