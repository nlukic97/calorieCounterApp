<template>
  <div class="hello">
    <ul>
      <li v-for="(item, index) in listOfItems" v-bind:key="index">
        <span>{{item.name}} |</span> <!--ovo v-bind nam treba ako vucemo neki data iz vue-a. Koji god attribut, ovo ce raditi -->
        <span>{{item.calories}} |</span>
        <span>{{item.carbs}} |</span>
        <span>{{item.fat}} |</span>
        <span>{{item.prot}} |</span>
        &nbsp; <!-- no break space entity. Pravi mali razmak. -->
        <button v-on:click="removeItem(index)">X</button> <!--prosledjuje se index koji je kao gore, kao parametar -->
      </li> <!--Loop za hvatanje informacija. item je element, index je broj -->
    </ul>
    <div>
      <span>Total:</span>
      <span>{{totals.totalCal}} |</span>
      <span>{{totals.totalCarbs}} |</span>
      <span>{{totals.totalFat}} |</span>
      <span>{{totals.totalProt}} |</span>
    </div>
    <div>
      <input v-bind:placeholder="placeholderValues.inputNameText" v-model="newValues.newName" type="text">
      <input v-bind:placeholder="placeholderValues.inputCalorieText" v-model="newValues.newCalories" type="number">
      <input v-bind:placeholder="placeholderValues.inputCarbsText" v-model="newValues.newCarbs" type="number">
      <input v-bind:placeholder="placeholderValues.inputFatText" v-model="newValues.newFat" type="number">
      <input v-bind:placeholder="placeholderValues.inputProteinText" v-model="newValues.newProtein" type="number">
      <button v-on:click="addItem">+</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data: function(){
    return {
      placeholderValues:{
        inputNameText:'Ide gas',
        inputCalorieText:'',
        inputCarbsText:'',
        inputFatText:'',
        inputProteinText:''
        },
      newValues:{
        newName:'',
        newCalories:'',
        newCarbs:'',
        newFat:'',
        newProtein:''
      },
      listOfItems: [
          {
          name:'Sargarepa',
          calories: 1000,
          carbs: 500,
          fat: 10,
          prot: 100
        },
        {
          name:'Krompir',
          calories: 2000,
          carbs: 800,
          fat: 500,
          prot: 10
        },
        {
          name:'Dinja',
          calories: 100,
          carbs: 200,
          fat: 210,
          prot: 76
        }
      ],
      totals: {
        totalCal:0,
        totalCarbs: 0,
        totalFat: 0,
        totalProt:0
      }
    }
  },
  methods: {
    addItem: function(){
      this.listOfItems.push({
        name: this.newValues.newName,
        calories: this.newValues.newCalories,
        carbs: this.newValues.newCarbs,
        fat: this.newValues.newFat,
        prot: this.newValues.newProtein,
      });
      this.newValues.newName = null,      // promenio si ove u null jer kad je string zezne celu stvar. Kad je 0, vidi se.
      this.newValues.newCalories = null,  
      this.newValues.newCarbs = null,
      this.newValues.newFat = null,
      this.newValues.newProtein = null,
      this.calcValues()
    },
    removeItem: function(itemIndex){ //itemIndex gleda index
    this.listOfItems.splice(itemIndex,1); //ukloni element iz arraya koji ima ovaj index(itemIndex)
    this.calcValues()
    },
    calcValues: function(){
      //reset everything, so that it doesnt add up the existing add-up, double. So add all form start over.
        this.totals.totalCal = 0;
        this.totals.totalCarbs = 0;
        this.totals.totalFat = 0;
        this.totals.totalProt = 0;
      for(let i = 0; this.listOfItems.length; i++){ //kad zakomentarisem cetiri linije koda ispod, nastane beskonacan loop. Zasto?
        // console.log(this.totals.totalCal);
        this.totals.totalCal += parseInt(this.listOfItems[i].calories); //cak i ako promenim ovde [i] u cifru, beskonacan loop.
        this.totals.totalCarbs += parseInt(this.listOfItems[i].carbs);
        this.totals.totalFat += parseInt(this.listOfItems[i].fat);
        this.totals.totalProt += parseInt(this.listOfItems[i].prot);
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='scss'>

</style>

