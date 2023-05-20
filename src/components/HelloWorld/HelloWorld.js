import foodList from "./foods.json";

export default {
    name: 'HelloWorld',
    data: function(){
      return {
        newValues:{
          name:null,
          calories:null,
          carbs:null,
          fat:null,
          protein:null
        },

        listOfItems: foodList, // imported from the JSON file (could be a database at some point)
        
        totals: {
          calories:0,
          carbs: 0,
          fat: 0,
          protein:0
        }
      }
    },
    methods: {
      addItem: function(){
        this.listOfItems.push({
          ...this.newValues
        });

        // Resetting pending values to null
        this.newValues.name = null,
        this.newValues.calories = null,  
        this.newValues.carbs = null,
        this.newValues.fat = null,
        this.newValues.protein = null,

        // calculating total sum of macros
        this.calcValues()
      },
      
      // Removes an item from the array of foods and recalculates the sum of macros
      removeItem: function(itemIndex){
        this.listOfItems.splice(itemIndex,1);
        this.calcValues()
      },

      // recalculates the sum of macros
      calcValues: function(){
        //reset everything, so that it doesnt add up the existing add-up, double. So add all form start over.
          this.totals.calories = 0;
          this.totals.carbs = 0;
          this.totals.fat = 0;
          this.totals.protein = 0;

        for(let i = 0; i < this.listOfItems.length; i++){
          this.totals.calories += parseInt(this.listOfItems[i].calories);
          this.totals.carbs += parseInt(this.listOfItems[i].carbs);
          this.totals.fat += parseInt(this.listOfItems[i].fat);
          this.totals.protein += parseInt(this.listOfItems[i].protein);
        }
      }
    }
  }
  