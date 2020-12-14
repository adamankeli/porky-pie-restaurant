<template>
    <div id="person-form">
        <form @submit.prevent="handleSubmit">
            <label> Customer Full Name </label>
            <input ref="first" v-model="person.name" type="text" :class="{ 'has-error': submitting && invalidName }" @focus="clearStatus" @keypress="clearStatus" />
            <label> Customer Email Adress </label>
            <input v-model="person.email" type="text" :class="{ 'has-error': submitting && invalidEmail }" @focus="clearStatus"/>
             <p v-if="error && submitting" class="error-message">
                ❗Please complete all required fields
            </p>
            <p v-if="success" class="success-message">
                ✅ Customer Successfully added to the Table
            </p>
            <button> Add Customer </button>
        </form>
    </div>
</template>

<script>
export default {
    name: 'person-form',
  data () {
    return {
        submitting: false,
        error: false,
        success: false,
        person:{
            name: '',
            email: '',
            order: '',
        },
    }
  },
  methods: {
   async handleSubmit () { 
        try {
            const response = await fetch('https://baconipsum.com/api/?type=all-meat&sentences=1')
            const data = await response.json()
            this.person.order = data
        } catch (error) {
            console.error(error)
        }

        this.submitting = true
        this.clearStatus()

        if (this.invalidName || this.invalidEmail) {
            this.error = true
            return
        }

        this.$emit('add:person', this.person) 
        this.$refs.first.focus()
        
        this.person = {
            name: '',
            email: '',
            order: '',
        }
        this.error = false
        this.success = true
        this.submitting = false
    },

    clearStatus() {
        this.success = false
        this.error = false
    }
  },

  computed: {
      invalidName() {
          return this.person.name === ''
      },

      invalidEmail() {
          return this.person.email === ''
      },
  },
}
</script>

<style scoped>
    form {
        margin-block: 2rem;
    }
    
    [class*='-message'] {
        font-weight: 500;
    }

    .error-message {
        color: #d33c40;
    }

    .success-message {
        color: #32a95d;
    }
</style>