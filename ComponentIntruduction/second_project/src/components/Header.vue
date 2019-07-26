<template>
  <div class="row">
    <div class="col-sm-12">
      <h3>Quotes {{quotesCount}} / {{maxQuotes}}</h3>
      <div class="progress">
        <div
          class="progress-bar"
          role="progressbar"
          :style="{width: progressWidth + '%'}"
          aria-valuemin="0"
          aria-valuemax="100"
        ></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    progressWidth() {
      let width = (100 / this.maxQuotes) * this.quotesCount;
      console.log(width);
      return width;
    }
  },
  props: ["maxQuotes", "quotesCount"]
};
</script>

<style>
.innerProgress {
  background-color: green;
  width: 0;
  transition: 0.3s ease;
  height: inherit;
  margin: 0;
  padding: 0;
}

#quoteProgress {
  width: 100%;
  border: 1px solid black;
  height: 20px;
  padding: 0px;
}
</style>
