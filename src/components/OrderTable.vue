<template>
  <div id="order-table">
    <p v-if="persons.length < 1" class="empty-table">No Persons</p>
    <table v-else>
      <thead>
        <tr>
          <th>Customer Full Name</th>
          <th>Email Address</th>
          <th>Order Details</th>
        </tr>
      </thead>
      <tbody>
       <tr v-for="person in persons" :key="person.id">
            <td v-if="editing === person.id">
                <input type="text" v-model="person.name" />
            </td>
            <td v-else>{{ person.name }}</td>
            
            <td v-if="editing === person.id">
                <input type="text" v-model="person.email" />
            </td>
            <td v-else>{{ person.email }}</td>
            <td>{{ person.order }}</td>
            <td v-if="editing === person.id">
                <button @click="editPerson(person)">Save</button>
                <button class="muted-button" @click="editing = null">Cancel</button>
            </td>
            <td v-else>
               <button id="editbtn" @click="editMode(person.id)">Edit</button>
               <button id="delbtn" @click="$emit('delete:person', person.id)">Delete</button>
            </td>
       </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  export default {
      name: 'order-table',
      props: {
        persons: Array,
      }, 
      data(){
          return {
              editing: null,
          }
      },
      methods: {
        editMode (id) { 
            this.editing = id
        },
      },

      editPerson(person) {
          if (person.name === '' || person.email === '') return
            this.$emit('edit.person', person.id, person)
            this.editing = null
      }
  }
</script>

<style scoped>
    button {
        margin: 0 0.5rem 0 0;
    }
    #editbtn{
      background: rgb(223, 116, 29);
      border: 1px solid rgb(223, 116, 29);
    }
    #editbtn:hover{
      background: rgb(168, 57, 57);
      border: 1px solid rgb(168, 57, 57);
    }
    #delbtn{
      background: rgb(168, 57, 57);
      border: 1px solid rgb(168, 57, 57);
    }
    #delbtn:hover{
    background: rgb(17, 13, 13);
    border: 1px solid rgb(17, 14, 14);
}
</style>