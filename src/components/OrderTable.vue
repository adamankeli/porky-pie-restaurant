<template>
  <div id="order-table">
    <p v-if="persons.length < 1" class="empty-table">No Persons</p>
    <table v-else>
      <thead>
        <tr>
          <th>Person Name</th>
          <th>Person Email</th>
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
            
            <td v-if="editing === person.id">
                <button @click="editPerson(person)">Save</button>
                <button class="muted-button" @click="editing = null">Cancel</button>
            </td>
            <td v-else>
               <button @click="editMode(person.id)">Edit</button>
               <button @click="$emit('delete:person', person.id)">Delete</button>
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
</style>