<template>
<div>
	<div class="row">
		<div class="form-group">
			<div class="col-md-12" style="font-size: 18px">{{ $t("order_comparer.label_yahoo") }}</div>
		</div>
	</div>
	<div class="row">
		<div class="col-md-12">
			<div class="form-table">
				<div class="form-cell cell-label">
					<span style="padding-left: 50px">{{ $t("order_comparer.desc_url") }}</span>
				</div>
				<div class="input-group">
					<input type="text" class="form-control" :placeholder="$t('order_comparer.hide_yahoo')">
					<span class="input-group-btn">
						<b-button variant="primary" class="custom-button">{{ $t('order_comparer.import') }}</b-button>
					</span>
				</div>
			</div>
		</div>
	</div>
</div>
</template>
<script>
  export default {
  	
  }
</script>
<style>

</style>