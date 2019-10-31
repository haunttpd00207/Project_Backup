<template>
<div>
  <div class="row">
    <div class="col-md-12 text-center">
      <button @click="submit" type="button" class="btn btn-info button-size" data-toggle="modal" data-target="#message">{{ $t("order_comparer.submit") }}</button>
      <span class="submit-execution">{{ $t("order_comparer.desc_submit") }}</span>
    </div>
  </div>

  <div class="modal fade" id="message" tabindex="-1" role="dialog" aria-labelledby="message" aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        
        <div class="modal-body">
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
          </button>
          <h5 v-html="appData.message" class="modal-title" id="message"></h5>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">{{ !appData.isLostData ? $t("order_comparer.yes") : $t("order_comparer.no") }}</button>
          <button type="button" class="btn btn-primary" v-show="appData.isLostData">{{ $t("order_comparer.ok") }}</button>
        </div>
      </div>
    </div>
  </div>

</div>
</template>
<script>
  import XLSX from 'xlsx'
  export default {
    props: {
      appData: {
        type: Object,
        required: true
      }
    },

    methods : {
      submit: function(e) {
        this.appData.message = '';
        if (this.appData.fileExcel && (this.appData.fileGoogle || this.appData.fileYahoo) ) {
          this.appData.message = this.$t("error.sure");
          this.appData.isLostData = true;
          this.classify(this.checkFile(this.appData.message,this.appData.fileExcel));
        } else {
          this.appData.message = this.$t("error.error_missing");
          this.appData.isLostData = false;
        }
      },

      checkFile: function(message,file) {
        const workbook = XLSX.read(file, {type:'binary'});
        const first_sheet_name = workbook.SheetNames[0];
        var address_of_cell = 'B14';
        const worksheet = workbook.Sheets[first_sheet_name];
        var desired_cell = worksheet[address_of_cell];
        var desired_value = (desired_cell ? desired_cell.v : undefined);
        return desired_value;
        
      },

      classify: function(value) {
        if (value.includes(this.$t("key_search.search"))) {
          this.appData.isSearch = true;
        } else if (value.includes(this.$t("key_search.video"))) {
          this.appData.isVideo = true;
        } else if (value.includes(this.$t("key_search.display"))) {
          this.appData.isDisplay = true;
        } else {
          this.appData.message = this.$t("error.not_find");
        }
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