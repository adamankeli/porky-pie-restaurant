<template>
  <div id="table">
    <div class="small-container">
        <h1> Table Orders </h1>
        <p> Add Customer to table </p>
        <person-form @add:person="addPerson" />
    </div>
    <div class="container">
        <order-table :persons="persons" @delete:person="deletePerson" @edit:person="editPerson" />
    </div>
    <div class="Crbutton small-container">
        <router-link to="/"><button id="cancelbtn">Cancel</button></router-link>
        <router-link to="/complete"><button>Complete Order</button></router-link>
    </div>
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
.Crbutton{
    display: grid;
    grid-auto-flow: column;
    grid-column-gap: 1px;
}
#cancelbtn{
    background: rgb(168, 57, 57);
    border: 1px solid rgb(168, 57, 57);
}
#cancelbtn:hover{
    background: rgb(17, 13, 13);
    border: 1px solid rgb(17, 14, 14);
}
</style>
