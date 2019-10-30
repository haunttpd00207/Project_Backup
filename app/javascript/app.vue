<template>
<div>
  <h4 class="page-title custom-title">{{ $t("order_comparer.title") }}</h4>
  <div class="x_panel">
    <div class="x_content">
      <div class="row">
        <div class="form-group">
          <div class="col-md-12" style="font-size: 18px">{{ $t("order_comparer.label_fmt") }}</div>
        </div>
      </div>

      <div class="row">
        <div class="form-group">
          <div class="col-md-12">
            <div class="form-table">
              <div class="form-row">
                <div class="form-cell cell-label">
                  <span style="padding-left: 50px">{{ $t("order_comparer.desc_url") }}</span>
                </div>
                <div class="form-cell.cell-input">
                  <input type="text" class="form-control" :placeholder="$t('order_comparer.hide_fmt')">
                  <span class="input-group-btn">
                    <b-button variant="primary" class="custom-button">{{ $t('order_comparer.import') }}</b-button>
                  </span>
                </div>
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
          <div class="col-md-12">
            <div class="form-table">
              <div class="form-row">
                <div class="form-cell cell-label">
                  <span style="padding-left: 50px">{{ $t("order_comparer.desc_url") }}</span>
                </div>
                <div class="form-cell.cell-input">
                  <input type="text" class="form-control" :placeholder="$t('order_comparer.hide_google')">
                  <span class="input-group-btn">
                    <b-button variant="primary" class="custom-button">{{ $t('order_comparer.import') }}</b-button>
                  </span>
                </div>
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
          <div class="col-md-12">
            <div class="form-table">
              <div class="form-row">
                <div class="form-cell cell-label">
                  <span style="padding-left: 50px">{{ $t("order_comparer.desc_url") }}</span>
                </div>
                <div class="form-cell.cell-input">
                  <input type="text" class="form-control" :placeholder="$t('order_comparer.hide_yahoo')">
                  <span class="input-group-btn">
                    <b-button variant="primary" class="custom-button">{{ $t('order_comparer.import') }}</b-button>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-md-12 text-center">
          <button type="button" class="btn btn-info">{{ $t("order_comparer.submit") }}</button>
          <span style="padding-left: 20px">{{ $t("order_comparer.desc_submit") }}</span>
        </div>
      </div>
    </div>
  </div>
  
  <div class="x_panel no-border no-background" >
    <div class="row">
      <div class="col-md-12">
        <div class="form-table">
          <div class="form-row">
            <div class="form-cell cell-label">
              <span style="padding-left: 50px">{{ $t("order_comparer.note_title") }}</span>
              <br>
              <span style="padding-left: 50px">{{ $t("order_comparer.note_content_1") }}</span>
              <br>
              <span style="padding-left: 50px">{{ $t("order_comparer.note_content_2") }}</span>
              <br>
              <span style="padding-left: 50px">{{ $t("order_comparer.note_content_3") }}</span>
              <br>
              <span style="padding-left: 50px">{{ $t("order_comparer.note_content_4") }}</span>
              <br>
              <span style="padding-left: 50px">{{ $t("order_comparer.note_content_5") }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>
<script>
</script>
<style scoped>
p {
font-size: 2em;
text-align: center;
}
.hidden {
display: none;
}
.custom-button {
border-top-left-radius: 0;
border-bottom-left-radius: 0;
}
.form-control:disabled, .form-control[readonly] {
background-color: white;
}
</style>