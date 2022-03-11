<template>
<!-- component -->
<div class="flex items-center justify-center">
        <div class="w-full max-w-md">
          <form @submit.prevent="authUser" class="bg-white shadow-lg rounded py-12 px-12 pt-6 pb-8 mb-4">
            <!-- @csrf -->
            <div
              class="text-gray-800 text-2xl flex justify-center border-b-2 py-2 mb-4"
            >
              Login
            </div>
            <div class="mb-4">
              <label
                class="block text-gray-700 text-sm font-normal mb-2"
                for="username"
              >
                Email
              </label>
              <input
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                name="email"
                v-model="inputEmail"
                type="email"
                required
                autofocus
                placeholder="Email"
              />
            </div>
            <div class="mb-6">
              <label
                class="block text-gray-700 text-sm font-normal mb-2"
                for="password"
              >
                Password
              </label>
              <input
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                type="password"
                v-model="inputPassword"
                placeholder="Password"
                name="password"
                required
                autocomplete="current-password"
              />
            </div>
            <div class="flex items-center justify-between">
              <button class="px-4 py-2 rounded text-white inline-block shadow-lg bg-blue-500 hover:bg-blue-600 focus:bg-blue-700" type="submit">Sign In</button>
              <a
                class="inline-block align-baseline font-normal text-sm text-blue-500 hover:text-blue-800"
                href="#"
              >
                Forgot Password?
              </a>
            </div>
          </form>
        </div>
      </div>
</template>

<script>

export default {
  created(){
    console.log(this.users.length)
    console.log(this.users[1].password)
  },
  data(){
    return{
      users : [
      {
        'name': 'admin',
        'email': 'admin@gmail.com',
        'password': 123456,
        'role': 'admin'
      },
      {
        'name': 'dara',
        'email': 'dara@gmail.com',
        'password': 123456,
        'role': 'user'
      }
      ],
      inputName:'',
      inputEmail: '',
      inputPassword:'',
      inputRole:''
    }
  },
  methods:{
    authUser(){
      for(let i=0;i<this.users.length;i++){
        if(this.users[i].email == this.inputEmail && this.users[i].password == this.inputPassword ){
          alert('Access Granted')
          this.$router.push('/admin/dashboard')
          break;
        }
        else{
          alert('Access Denied')
          break;
        }
      }
    }
    /* authUser(){
      if(this.inputEmail === this.users[1].email && this.inputPassword == this.users[1].password){
        alert('Access Granted')
        this.$router.push('/admin/dashboard')
      }
      else{
        alert('Access Denied')
      }
    } */
  }
}
</script>

<style>

</style>