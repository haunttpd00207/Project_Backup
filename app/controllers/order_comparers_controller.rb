class OrderComparersController < ApplicationController
  def index; end

  def save_log type_ads 
    Log.log_result(
      "#{request.remote_ip} #{request.user_agent.tr(' ', '_')} #{request.referer} #{type_ads}",
      "gy-doublecheck__access.log"
    )
  end
end
