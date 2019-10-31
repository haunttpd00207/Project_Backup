<template>
  <div>
    <h1>asdas{{ nameGoogle }}</h1>
    <h4 class="page-title custom-title">{{ $t("order_comparer.title") }}</h4>
    <div class="content-app">
      <div class="x_panel">
        <div class="x_content">
          <FileUpload
            :updateState="updateState"
            :checkYahooFile="checkYahooFile"
            :getName="getName"
            :app-data="$data"
          />
          
          <DownloadButton
            :app-data="$data"
          />
        </div>
      </div>
    </div>
    <div class="x_panel no-border no-background" >
      <div class="row">
        <div class="col-md-12">
          <div class="form-table">
            <div class="form-row">
              <div class="form-cell cell-label">
                <p v-html="$t('order_comparer.note_html')"></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import FileUpload from './components/FileUpload.vue'
  import DownloadButton from './components/DownloadButton.vue'

  export default {
    data() {
      return {
        fileExcel: '',
        fileGoogle: '',
        fileYahoo: '',
        nameExcel: '',
        nameGoogle: '',
        nameYahoo: '',
        isChooseYahooFile: false,
        isSearch: false,
        isVideo: false,
        isDisplay: false,
        isLostData: false,
        message: ''
      }
    },
    components: {
      FileUpload,
      DownloadButton
    },
    methods: {
      updateState(type, result) {
        this[type] = result
      },
      checkYahooFile(type, result) {
        this[type] = result
      },
      getName(type, result) {
        this[type] = result
      }
    }
  }
</script>
<style scoped>
  .form-control:disabled,
   
  .form-control[readonly] {
    background-color: white;
  }

  span {
    font-size: 14px;
  }

  .form-cell.cell-label {
    font-size: 14px;
  }
</style>