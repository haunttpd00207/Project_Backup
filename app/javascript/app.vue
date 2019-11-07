<template>
  <div>
    <h4 class="page-title custom-title">{{ $t("order_comparer.title") }}</h4>
    <div class="content-app">
      <div class="x_panel">
        <div class="x_content">
          <FileUpload
            :updateState="updateState"
            :app-data="$data"
          />
          
          <DownloadButton
            :submit="submit"
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
  import bootbox from 'bootbox'
  import _ from 'lodash'
  import FileUpload from './components/FileUpload.vue'
  import DownloadButton from './components/DownloadButton.vue'
  import XLSX from 'xlsx'

  export default {
    data() {
      return {
        fileExcel: '',
        fileGoogle: '',
        fileYahoo: '',
        nameExcel: '',
        nameGoogle: '',
        nameYahoo: '',
        cellNameExcel: 'B14',
        sheetNameExcel: '表紙',
        validTypes: [
          {parttern: '公式依頼FMT_サーチ', type: 'search'},
          {parttern: '公式依頼FMT_ディスプレイ', type: 'video'},
          {parttern: '公式依頼FMT_動画', type: 'display'},
        ],
        validTypeYahoo: [
          {parttern: 'マッチタイプ', type: 'search'},
          {parttern: 'ターゲティングの種類', type: 'video'},
          {parttern: 'ターゲティングの種類', type: 'display'},
        ]
      }
    },

    components: {
      FileUpload,
      DownloadButton
    },

    methods: {
      submit: function(e) {
        bootbox.hideAll();
        var self = this;
        var error = [];
        if (!self.fileExcel) {
          error.push(self.$t("error.error_missing_excel"));
        }
        if (!self.fileGoogle && !self.fileYahoo) {
          error.push(self.$t("error.error_missing_google_yahoo"));
        }
        if (error.length > 0) {
          bootbox.alert({message: error.join("<br>"), className: "modal-scrollable"});
        } else {
          var typeExcel = self.classifyFile();
          if (typeExcel === null) {
            error = self.$t("error.not_find")
          } else if (self.fileYahoo){
            var typeOfYahoo = self.classifyFileYahoo();
            if (typeOfYahoo != typeExcel) {
              error = self.$t("error.not_match") 
            }
          }
          if (error.length > 0) {
            bootbox.alert({message: error, className: "modal-scrollable"});
          } else {
            bootbox.confirm({
              message: self.$t("error.sure") ,
                buttons: {
                  confirm: {
                    label: self.$t("order_comparer.yes"),
                    className: 'btn-primary margin-right'
                  },
                  cancel: {
                    label: self.$t("order_comparer.no"),
                    className: 'btn-default pull-right'
                  }
                },
              callback: function (result) {
                //doing something here
              }
            });
          }
        }
      },
      
      classifyFileYahoo: function() {
        var self = this;
        const workbook = XLSX.read(self.fileYahoo, {type:'binary'});
        const first_sheet_name = workbook.SheetNames[0];
        const sheet = workbook.Sheets[first_sheet_name];
        var typeOfYahoo =_.find(this.validTypeYahoo, function(type){
          return sheet && _.indexOf(sheet, type.parttern)
        })
        if (!typeOfYahoo) return null
        return typeOfYahoo.type
      },

      classifyFile: function() {
        var self = this;
        const workbook = XLSX.read(self.fileExcel, {type:'binary'});
        const worksheet = workbook.Sheets[self.sheetNameExcel];
        var desired_cell = worksheet[self.cellNameExcel];
        var desired_value = (desired_cell ? desired_cell.v : undefined);
        var typeOf =_.find(this.validTypes, function(type){
          return desired_value && _.startsWith(desired_value, type.parttern)
        })
        if (!typeOf) return null
        return typeOf.type
      },
      
      updateState(type, result) {
        this[type] = result
      },
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