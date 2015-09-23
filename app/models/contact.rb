class Contact < ActiveRecord::Base

  def self.save(upload)
    CSV.foreach(upload.path, {headers:true, :header_converters => :symbol, :col_sep => "\t"}) do |row|
      puts row
      Contact.create! row.to_hash
    end
  end

end
