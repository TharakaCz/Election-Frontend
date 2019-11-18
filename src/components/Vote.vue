<template>
    <div class="col-md-10 mx-auto shadow p-3 mb-5 bg-white rounded">
        <form id="vote-form">
            <div class="form-group">
                <label for="exampleFormControlSelect1">Example select</label>
                <select class="form-control" name="name" id="name" v-model="name">
                    <option value="NPP">Gotabaya Rajapaksha</option>
                    <option value="UNP">Sajith Premadasa</option>
                    <option value="JVP">Anura kumara</option>
                </select>
            </div>
            <div class="form-group">
                <label>NIC Number</label>
                <input type="text" class="form-control" name="nic" id="nic" v-model="nic" placeholder="Enter NIC Number">
            </div>
           <div class="row justify-content-center">
                <button type="button" class="btn btn-primary" @click="send()">Confirm Vote</button>
           </div>
        </form>
    </div>
</template>

<script>
   import axios from 'axios';

    export default {
        data(){
            return{
                name:"",
                nic:""
            }
        },
       methods:{
           send:function(){
               var name = this.name;
               var nic = this.nic;

               var voteDto ={
                   vId:"",
                   vName:name,
                   vNic:nic
               };
               console.log(voteDto);
                axios.post("http://localhost:8082/app/vote/save",voteDto)
                .then(response=>{
                   if(response != null){
                     alert("Vote Succsessfully !");
                   }else{
                       alert("System Error Occurd ! (500 error)");
                   }
                })
                .catch(e=>{
                    this.error.push(e)
                })
           }
       }
    }
</script>

<style scoped>

</style>