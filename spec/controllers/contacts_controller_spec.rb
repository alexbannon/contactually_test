require 'rails_helper'

RSpec.describe ContactsController, type: :controller do

  let(:valid_attributes) {
    {
      first_name: "Alex",
      last_name: "Bannon",
      email_address: "alexbannon@gmail.com",
      phone_number: "301-919-4523",
      company_name: "Alex Inc"
    }
  }

  let(:invalid_attributes) {
    {
      shblibityschblop: "bloopadoop",
      first_name: 1,
      email_address: false
    }
  }

  describe "GET #homepage" do
    it "assigns a new contact as @contact" do
      get :homepage
      expect(assigns(:contacts)).to be_a_new(Contact)
    end
  end

end
