<template>
  <div>
    <div class="row">
      <div class="form-group">
        <div class="col-md-12" style="font-size: 18px">{{ $t("order_comparer.label_fmt") }}</div>
      </div>
    </div>

    <div class="row">
      <div class="form-group">
        <div class="col-md-12 upload">
          <div class="form-table">
            <div class="form-cell cell-label">
              <span class="desc_url">{{ $t("order_comparer.desc_url") }}</span>
            </div>
            <div class="input-group">
              <input type="text" class="form-control" :placeholder="appData.fileExcel ? appData.nameExcel : $t('order_comparer.placeholder_fmt')">
              <span class="input-group-btn">
                <b-button v-on:click.prevent="openExcelFile" variant="primary" class="btn btn-primary button-size btn-file"><i class="glyphicon glyphicon-folder-open"></i>&nbsp; {{ $t('order_comparer.import') }}</b-button>
                <b-form-file  @change="readFileExcel"
  accept=".xlsm, .xlsx" id="file_excel" style="display: none"></b-form-file>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="form-group">
        <div class="col-md-12" style="font-size: 18px">{{ $t("order_comparer.label_google") }}</div>
      </div>
    </div>

    <div class="row">
      <div class="form-group">
        <div class="col-md-12 upload">
          <div class="form-table">
            <div class="form-cell cell-label">
              <span class="desc_url">{{ $t("order_comparer.desc_url") }}</span>
            </div>
            <div class="input-group">
              <input type="text" class="form-control" :placeholder="appData.fileGoogle ? appData.nameGoogle : $t('order_comparer.placeholder_google')">
              <span class="input-group-btn">
                <b-button v-on:click.prevent="openGoogleFile" variant="primary" class="btn btn-primary button-size btn-file"><i class="glyphicon glyphicon-folder-open"></i>&nbsp; {{ $t('order_comparer.import') }}</b-button>
                <b-form-file @change="readFileGoogle" accept=".csv" id="file_google_csv" style="display: none"></b-form-file>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="form-group">
        <div class="col-md-12" style="font-size: 18px">{{ $t("order_comparer.label_yahoo") }}</div>
      </div>
    </div>
    
    <div class="row">
      <div class="form-group">
        <div class="col-md-12 upload">
          <div class="form-table">
            <div class="form-cell cell-label">
              <span class="desc_url">{{ $t("order_comparer.desc_url") }}</span>
            </div>
            <div class="input-group">
              <input type="text" class="form-control" :placeholder="appData.fileYahoo ? appData.nameYahoo : $t('order_comparer.placeholder_yahoo')">
              <span class="input-group-btn">
                <b-button v-on:click.prevent="openYahooFile" variant="primary" class="btn btn-primary button-size btn-file"><i class="glyphicon glyphicon-folder-open"></i>&nbsp; {{ $t('order_comparer.import') }}</b-button>
                <b-form-file @change="readFileYahoo" accept=".csv" id="file_yahoo_csv" style="display: none"></b-form-file>
              </span>
            </div>
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
      updateState: {
        type: Function
      },

      checkYahooFile: {
        type: Function
      },

      getNameFile: {
        type: Function
      },

      appData: {
        type: Object,
        required: true
      }
    },

    methods: {
      openExcelFile: function() {
        $("#file_excel").click();
      },

      openGoogleFile: function() {
        $("#file_google_csv").click();
      },

      openYahooFile: function() {
        $("#file_yahoo_csv").click();
      },

      readFileExcel(ev) {
        const file = ev.target.files[0];
        const reader = new FileReader();
        reader.onload = e => this.updateState("fileExcel", e.target.result);
        this.getNameFile("nameExcel", file.name);
        reader.readAsBinaryString(file);

      },
      
      readFileGoogle(ev) {
        const file = ev.target.files[0];
        const reader = new FileReader();
        reader.onload = e => this.updateState("fileGoogle", e.target.result);
        this.getNameFile("nameGoogle", file.name);
        reader.readAsText(file, 'SHIFT_JIS');
      },

      readFileYahoo(ev) {
        const file = ev.target.files[0];
        const reader = new FileReader();
        reader.onload = e => this.updateState("fileYahoo", e.target.result);
        this.getNameFile("nameYahoo", file.name);
        this.checkYahooFile("isSelectYahooFile", true);
        reader.readAsText(file, 'SHIFT_JIS');
      }
    }
  }
</script>
<style>
.col-md-12.upload {
  padding-top: 7px;
  padding-bottom: 5px;
}

span.desc_url {
  font-size: 14px;
}
</style>