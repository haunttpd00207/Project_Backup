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
              <input type="text" class="form-control" :placeholder="$t('order_comparer.hide_fmt')">
              <span class="input-group-btn">
                <b-button variant="primary" class="btn btn-primary button-size btn-file"><i class="glyphicon glyphicon-folder-open"></i>&nbsp; {{ $t('order_comparer.import') }}</b-button>
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
              <input type="text" class="form-control" :placeholder="$t('order_comparer.hide_google')">
              <span class="input-group-btn">
                <b-button variant="primary" class="btn btn-primary button-size btn-file"><i class="glyphicon glyphicon-folder-open"></i>&nbsp; {{ $t('order_comparer.import') }}</b-button>
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
              <input type="text" class="form-control" :placeholder="$t('order_comparer.hide_yahoo')">
              <span class="input-group-btn">
                <b-button variant="primary" class="btn btn-primary button-size btn-file"><i class="glyphicon glyphicon-folder-open"></i>&nbsp; {{ $t('order_comparer.import') }}</b-button>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
.col-md-12.upload {
  padding-top: 7px;
  padding-bottom: 5px;
}

span.desc_url {
  font-size: 14px;
}
</style>