<template>
  <div class="hello">
    <h1>Vue.js Calorie Counter</h1>
    <div id="titles">
      <span>description </span>
      <span>calories</span>
      <span>fat</span>
      <span>carbs</span>
      <span>protein</span>
    </div>
    
    <ul>
      <li v-for="(item, index) in listOfItems" v-bind:key="index">
        <span>{{item.name}}</span>
        <span>{{item.calories}}</span>
        <span>{{item.carbs}}</span>
        <span>{{item.fat}}</span>
        <span>{{item.protein}}</span>
        
        &nbsp;

        <button v-on:click="removeItem(index)">&#10060;</button> 
      </li>
    </ul>

    <div id="totals">
      <span>Totals:</span>
      <span>{{totals.calories}}</span>
      <span>{{totals.carbs}}</span>
      <span>{{totals.fat}}</span>
      <span>{{totals.protein}}</span>
    </div>

    <div id="newItem">
      <input placeholder="Title" v-model="newValues.name" type="text">
      <input placeholder="Calories" v-model="newValues.calories" @keypress="$e=>preventChars($e)" type="number">
      <input placeholder="Carbs" v-model="newValues.carbs" @keypress="$e=>preventChars($e)" type="number">
      <input placeholder="Fat" v-model="newValues.fat" @keypress="$e=>preventChars($e)" type="number">
      <input placeholder="Protein" v-model="newValues.protein" @keypress="$e=>preventChars($e)" type="number">
      <button @click="addItem">+</button>
    </div>
  </div>
</template>

<!-- JavaScript -->
<script src="./HelloWorld.js" defer></script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='scss' src="./HelloWorld.scss"></style>

