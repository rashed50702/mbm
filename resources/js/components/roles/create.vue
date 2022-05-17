<template>
    <div class="container">
        <div class="card mt-1">
            <div class="card-header">
                <div class="row">
                    <div class="col-sm-6"><h3>Create Role</h3></div>
                    <div class="col-sm-6">
                        <router-link :to="{ name: 'RoleIndex' }" class="btn btn-primary btn-sm float-end mb-2">Role List</router-link>
                    </div>
                </div>                
            </div>
            <div class="card-body">
                <form>
                    <div class="row">
                        <div class="col-sm-3">
                            <label for="inputName" class="form-label">Name</label>
                            <input type="text" class="form-control" v-model="formData.name" placeholder="Role Name">
                            <button type="button" class="btn btn-success btn-sm mt-1 float-end" @click="saveFormData()">Save</button>
                        </div>
                        <div class="col-sm-9">
                            <div class="card">
                                <div class="card-header"><small>Permissions</small></div>
                                <div class="card-body">
                                    <div class="row">
                                        <div class="col-sm-3" v-for="permission in permissions" :key="permission.id">
                                            <div class="form-check">
                                              <input class="form-check-input" type="checkbox" :value="permission.id">
                                              <label class="form-check-label" for="defaultCheck1">
                                                {{permission.name}}
                                              </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';
    export default {
        data(){
            return{
                permissions: [],
                formData: {
                    name: '',
                    description: '',
                    status: 'active',
                }
            }
        },

        created(){
            this.getPermissions();
        },

        methods:{
            getPermissions(){
                axios.get('permissions')
                  .then((response) => {
                    this.permissions = response.data;
                    console.log(response);
                }).catch(error=>{
                    console.log(error)
                });
            },
            saveFormData(){
                    axios.post('items', this.formData)
                      .then((response) => {
                        this.formData.name = "";
                        this.formData.description = "";
                        this.formData.status = "active";
                        this.$router.push('/items');
                        console.log(response);
                    }).catch(error=>{
                        console.log(error)
                    });
            }


        }
      
    }
</script>