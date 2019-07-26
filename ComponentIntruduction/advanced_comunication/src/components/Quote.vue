<template>
  <div>
      <div class="title">
        <slot name="title"></slot>
        <slot name="Test">Some string</slot>
      </div>
      <div>
    <slot name="quote"></slot>
      </div>
  </div>
</template>
<script>
export default {
};
</script>

<style scoped>
div {
  margin: 30px auto;
  text-align: center;
  padding: 30px;
  box-shadow: 1px 1px 2px black;
  border: 1px solid #ccc;
}

div.title{
    font-style: italic;
}
</style>


