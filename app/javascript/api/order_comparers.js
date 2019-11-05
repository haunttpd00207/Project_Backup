import axios from 'axios';

export default {

  performComparer (params, cb) {
    axios.post(`/api/v1/order_comparers`,
      {
        order_comparer: {
          type_ads: params['type_ads']
        }
      },
      { headers: {'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute('content')}}
    ).then(function(response) {
      cb(response.data)
    })["catch"](function(error) {
      console.log(error);
    });
  }
}
