<template>
    <div class="container">
        <h2 class="text-center">Roles List</h2>
        <div class="row">
            <div class="col-md-12">
                <router-link :to="{ name: 'ItemCreate' }" class="btn btn-primary btn-sm float-right mb-2">Add Role</router-link>
            </div>
        </div>
        <div class="row">
            <div class="col-md-12">
                <table class="table">
                    <thead>
                    	<tr>
	                        <th>#</th>
	                        <th>Name</th>
	                        <th>Actions</th>
                    	</tr>
                    </thead>
                    <tbody>
                       <tr v-for="role, index in roles" :key="role.id">
                       		<td>{{index+1}}</td>
                       		<td>{{role.name}}</td>
                       		<td>
                       			<router-link :to="'/roles/'+role.id+'/edit'" class="btn btn-warning btn-sm" title="Edit">
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
    	        roles: {}
    	    }
    	},
    	created(){
    		this.loadRoles()
    	},

        methods:{
        	loadRoles(){
        		axios.get('roles')
        		  .then((response) => {
        		  	this.roles = response.data;
        		    console.log(this.roles);
        		}).catch(error=>{
        		    console.log(error)
        		});
        	}
        }
      
    }
</script>