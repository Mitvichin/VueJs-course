export const FruitMixin = {
  data() {
    return {
      fruits: ["banana", "mango", "melon", "apple"],
      filterValue: ""
    };
  },
  computed: {
    filteredFruits() {
      return this.fruits.filter(fruit => {
        return fruit.match(this.filterValue);
      });
    }
  }
};
