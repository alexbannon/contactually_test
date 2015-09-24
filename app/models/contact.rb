class Contact < ActiveRecord::Base
  validates :first_name, presence: true
  validates :last_name, presence: true
  validates :email_address, presence: true, format: /@/
  validates :phone_number, presence: true
  validates :company_name, presence: true
  def self.save(upload)
    CSV.foreach(upload.path, {headers:true, :header_converters => :symbol, :col_sep => "\t"}) do |row|
      contact = find_by(first_name: row[:first_name]) || new

      #if uploaded contact is not exactly the same, then save as new contact
      if !(contact.last_name == row[:last_name] && contact.email_address == row[:email_address] && contact.phone_number == row[:phone_number])
        contact = new
      end

      #only accept strong params
      contact.attributes = row.to_hash.slice(:first_name, :last_name, :email_address, :phone_number, :company_name)
      contact.save!
    end
  end

end
