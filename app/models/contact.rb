class Contact < ActiveRecord::Base
  validates :first_name, presence: true
  validates :last_name, presence: true
  validates :email_address, presence: true, format: /@/
  validates :phone_number, presence: true
  validates :company_name, presence: true
  def self.save(upload)
    CSV.foreach(upload.path, {headers:true, :header_converters => :symbol, :col_sep => "\t"}) do |row|
      puts row
      Contact.create! row.to_hash
    end
  end

end
