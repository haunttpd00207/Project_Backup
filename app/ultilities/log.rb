# frozen_string_literal: true

module Log
  class << self
    def log_result message = nil, filename = "access.log"
      return if message.blank?
      dirname = Rails.root.join("log").to_s
      FileUtils.mkdir_p(dirname) unless File.directory?(dirname)
      @log = Logger.new(File.join(dirname, filename))
      @log.formatter = proc do |_severity, datetime, _progname, msg|
        "#{datetime.strftime(DATE_TIME_FORMAT)} #{msg}\n"
      end
      @log.info(message)
    end

    def rename_access_log
      %w(gy-doublecheck__access).each do |filename|
        file_path = File.join(Rails.root, "log", "#{filename}.log")
        next unless File.exist?(file_path)

        time = File.birthtime(file_path)
        File.rename(file_path, File.join(Rails.root, "log", "#{filename}#{time.strftime(DATE_TIME_FORMAT)}.log"))
      end
    end

    def logger exception
      Rails.logger.error exception.message
      Rails.logger.error exception.backtrace.join("\n")
    end
  end
end
