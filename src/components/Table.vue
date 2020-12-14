<template>
  <div id="table" class="small-container">
    <h1> Table Orders </h1>
    
    <person-form @add:person="addPerson" />
    <order-table :persons="persons" @delete:person="deletePerson" @edit:person="editPerson" />
  </div>
</template>

<script>
import OrderTable from './OrderTable.vue'
import PersonForm from './PersonForm.vue'

export default{
  watch: {
  },
  name: 'table',
  components: {
    OrderTable,
    PersonForm,
  },
  data() {
    return{
      persons: [],
    }
  },
    methods: {
    addPerson(person) { 
      const lastId = 
        this.persons.length > 0
          ? this.persons[this.persons.length - 1].id
          : 0;
      const id  = lastId + 1;
      const newPerson = {...person, id};
      this.persons = [...this.persons, newPerson];
    },
    deletePerson(id) {
      this.persons = this.persons.filter(
        person => person.id !== id
      )
    },
    editPerson(id, updatedPerson) {
      this.persons = this.persons.map(person => 
        person.id === id ? updatedPerson : person
      )
    }
  },
}
</script>

<style>
button {
  background: #009435;
  border: 1px solid #009435;
}

.small-container {
  max-width: 680px;
}
</style>
