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
          <button type="button" data-dismiss="modal" v-bind:class="{ 'btn btn-secondary': appData.isImportFile, 'btn btn-primary': !appData.isImportFile }">{{ !appData.isImportFile ? $t("order_comparer.ok") : $t("order_comparer.no") }}</button>
          <button type="button" class="btn btn-primary" v-show="appData.isImportFile">{{ $t("order_comparer.yes") }}</button>
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
        const data = this.appData;
        if (data.fileExcel && (data.fileGoogle || data.fileYahoo) ) {
          data.message = this.$t("error.sure");
          data.isImportFile = true;
          var address_of_cell = this.$t("row_check.excel");
          this.classifyFile(this.getFileFmt(address_of_cell, data.fileExcel));
          if (data.isSelectYahooFile && !data.isNothing) {
            var worksheet = this.getSheet(data.fileYahoo);
            var key_check = this.getFileHeader(worksheet);
            if ((data.isSearch && !key_check.includes(this.$t("key_search.search_yahoo"))) || ((data.isVideo || data.isDisplay) && !key_search.includes(this.$t("key_search.video_display_yahoo")))) {
              data.isImportFile = false;
              return data.message = this.$t("error.not_match");
            }
          }
        } else {
          data.message = this.$t("error.error_missing");
          data.isImportFile = false;
        }
      },

      getSheet(file) {
        const workbook = XLSX.read(file, {type:'binary'});
        const first_sheet_name = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[first_sheet_name];
        return worksheet;
      },

      getFileFmt: function(address_of_cell,file) {
        var worksheet = this.getSheet(file);
        var desired_cell = worksheet[address_of_cell];
        var desired_value = (desired_cell ? desired_cell.v : undefined);
        return desired_value;
      },

      getFileHeader: function(sheet) {
        var headers = [];
        var range = XLSX.utils.decode_range(sheet['!ref']);
        var C, R = range.s.r;
        for(C = range.s.c; C <= range.e.c; ++C) {
            var cell = sheet[XLSX.utils.encode_cell({c:C, r:R})]
            var hdr = "UNKNOWN " + C;
            if(cell && cell.t) hdr = XLSX.utils.format_cell(cell);
            headers.push(hdr);
        }
        return headers;
      },

      classifyFile: function(value) {
        const data = this.appData;
        if (value != undefined) {
          if (value.includes(this.$t("key_search.search"))) {
            data.isSearch = true;
          } else if (value.includes(this.$t("key_search.video"))) {
            data.isVideo = true;
          } else if (value.includes(this.$t("key_search.display"))) {
            data.isDisplay = true;
          } else {
            data.message = this.$t("error.not_find");
          }
        } else {
          data.isNothing = true;
          data.isImportFile = false;
          data.message = "File Content Error";
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