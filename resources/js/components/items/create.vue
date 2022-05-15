<template>
    <div class="container">
        <h2 class="text-center">Create Item</h2>
        <div class="row">
            <div class="col-md-12">
                <router-link :to="{ name: 'ItemIndex' }" class="btn btn-primary btn-sm float-right mb-2">Items Lis</router-link>
            </div>
        </div>
        <div class="row">
            <div class="col-md-12">
                <form class="row g-3">
                  <div class="col-12">
                    <label for="inputName" class="form-label">Name</label>
                    <input type="text" class="form-control" v-model="formData.name" placeholder="Item Name">
                  </div>
                  <div class="col-12">
                    <label for="inputDescription" class="form-label">Description</label>
                    <textarea name="inputDescription" v-model="formData.description" class="form-control"></textarea>
                  </div>
                  <div class="col-md-6">
                    <label for="inputCity" class="form-label">Status</label>
                    <div class="form-check">
                      <input type="radio"
                               name="status"
                               value="active"
                               v-model="formData.status"
                               v-bind:checked="formData.status == 'active'" class="form-check-input">
                      <label class="form-check-label" for="status">
                        Active
                      </label>
                    </div>
                    <div class="form-check">
                      <input type="radio"
                               name="status"
                               value="disabled"
                               v-model="formData.status"
                               v-bind:checked="formData.status == 'disabled'" class="form-check-input">
                      <label class="form-check-label" for="status">
                        Disabled
                      </label>
                    </div>
                  </div>
                  <div class="col-12">
                    <button type="button" class="btn btn-primary" @click="saveFormData()">Save</button>
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
                formData: {
                    name: '',
                    description: '',
                    status: 'active',
                }
            }
        },

        methods:{
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