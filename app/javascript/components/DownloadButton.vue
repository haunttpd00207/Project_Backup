<template>
  <div>
    <div class="row">
      <div class="col-md-12 text-center">
        <button @click="submit" type="button" class="btn btn-info button-size" data-toggle="modal" data-target="#message">{{ $t("order_comparer.submit") }}</button>
        <span class="submit-execution">{{ $t("order_comparer.desc_submit") }}</span>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    props: {
      submit: {
        type: Function
      }
    }
}
</script>
<style>
  .submit-execution {
    font-size: 14px;
    padding-left: 20px;
  }
</style>