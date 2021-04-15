Vue.component("character", {
  props: ["name", "codename"],
  data: function() {
    return {
      displayValue: this.name
    }
  },
  methods: {
    changeDisplay: function() {
      if (this.displayValue === this.name) {
        this.displayValue = this.codename;
      } else {
        this.displayValue = this.name;
      }
    }
  },
  template: '<div v-on:click="changeDisplay">{{displayValue}}</div>'
})

var app = new Vue({
  el: "#app",
  data: {
    name: "",
    email: "",
    nameMessage: null,
    emailMessage: null,
    list: [{name:"Protagonist", codename:"Joker"}, {name:"Anne", codename:"Panther"}, {name:"Ryuji", codename:"Skull"}]
  },
  computed: {
    submitted: function() {
      if (this.nameMessage === "" && this.emailMessage === "") {
        return "Submitted";
      } else {
        return "Not Submitted";
      }
    }
  },
  methods: {
    validEmail: function(email) {
      var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    }
  },
  watch: {
    name: function() {
      if (this.name.length < 2) {
        this.nameMessage = "Name must be at least 2 characters long.";
      } else {
        this.nameMessage = "";
      }
    },
    email: function() {
      if (this.validEmail(this.email)) {
        this.emailMessage = "";
      } else {
        this.emailMessage = "Email must be formatted correctly."
      }
    }
  }
})