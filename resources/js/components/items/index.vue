<template>
    <div class="container">
        <h2 class="text-center">Products List</h2>
        <div class="row">
            <div class="col-md-12">
                <router-link :to="{ name: 'ItemCreate' }" class="btn btn-primary btn-sm float-right mb-2">Add Item</router-link>
            </div>
        </div>
        <div class="row">
            <div class="col-md-12">
                <table class="table">
                    <thead>
                    	<tr>
	                        <th>#</th>
	                        <th>Name</th>
	                        <th>Description</th>
	                        <th>Price</th>
	                        <th>Actions</th>
                    	</tr>
                    </thead>
                    <tbody>
                       <tr v-for="item, index in items" :key="item.id">
                       		<td>{{index+1}}</td>
                       		<td>{{item.name}}</td>
                       		<td>{{item.description}}</td>
                       		<td>{{item.status}}</td>
                       		<td>
                       			<router-link :to="'/items/'+item.id+'/edit'" class="btn btn-warning btn-sm" title="Edit">
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
    	        items: {}
    	    }
    	},
    	created(){
    		this.loadItems()
    	},

        methods:{
        	loadItems(){
        		axios.get('items')
        		  .then((response) => {
        		  	this.items = response.data;
        		    console.log(this.items);
        		}).catch(error=>{
        		    console.log(error)
        		});
        	}
        }
      
    }
</script>