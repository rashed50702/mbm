<template>
    <div class="container">
        <h2 class="text-center">Users List</h2>
        <div class="row">
            <div class="col-md-12">
                <router-link :to="{ name: 'ItemCreate' }" class="btn btn-primary btn-sm float-right mb-2">Add User</router-link>
            </div>
        </div>
        <div class="row">
            <div class="col-md-12">
                <table class="table">
                    <thead>
                    	<tr>
	                        <th>#</th>
	                        <th>Name</th>
	                        <th>Email</th>
	                        <th>Roles</th>
	                        <th>Actions</th>
                    	</tr>
                    </thead>
                    <tbody>
                       <tr v-for="user, index in users" :key="user.id">
                       		<td>{{index+1}}</td>
                       		<td>{{user.name}}</td>
                       		<td>{{user.email}}</td>
                       		<td>
                       			<span v-for="role,id in user.roles" class="badge rounded-pill bg-primary m-1">{{role.name}}</span>
                       		</td>
                       		<td>
                       			<router-link :to="'/users/'+user.id+'/edit'" class="btn btn-warning btn-sm" title="Edit">
                       			 Edit
                       			</router-link>
                       		</td>
                       </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';
    export default {
    	data(){
    	    return{
    	        users: {}
    	    }
    	},
    	created(){
    		this.loadItems()
    	},

        methods:{
        	loadItems(){
        		axios.get('users')
        		  .then((response) => {
        		  	this.users = response.data;
        		    console.log(this.users);
        		}).catch(error=>{
        		    console.log(error)
        		});
        	}
        }
      
    }
</script>