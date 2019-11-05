module Api
  module V1
    class OrderComparersController < ApplicationController
      def create; end
        
      private

      def order_comparer_param
        params.require("order_comparer").permit :type_ads
      end

      def log_header
        "#{request.remote_ip} #{request.user_agent.tr(' ', '_')} #{request.referer}"
      end
    end
  end
end