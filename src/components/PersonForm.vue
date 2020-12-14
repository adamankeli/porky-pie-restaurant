<template>
    <div id="person-form">
        <form @submit.prevent="handleSubmit">
            <label> Person Name </label>
            <input ref="first" v-model="person.name" type="text" :class="{ 'has-error': submitting && invalidName }" @focus="clearStatus" @keypress="clearStatus" />
            <label> Person Email </label>
            <input v-model="person.email" type="text" :class="{ 'has-error': submitting && invalidEmail }" @focus="clearStatus"/>
             <p v-if="error && submitting" class="error-message">
                ❗Please complete all required fields
            </p>
            <p v-if="success" class="success-message">
                ✅ Person successfully added to Table
            </p>
            <button> Add Person </button>
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
        },
    }
  },
  methods: {
    handleSubmit () { 
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