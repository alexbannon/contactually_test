class CreateContacts < ActiveRecord::Migration
  def change
    create_table :contacts do |t|
      t.string :first_name, :null => false
      t.string :last_name, :null => false
      t.string :email_address, :null => false
      t.string :phone_number, :null => false
      t.string :company_name, :null => false

      t.timestamps null: false
    end
  end
end
