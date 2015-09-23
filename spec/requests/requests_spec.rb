require 'rails_helper'

RSpec.describe "Contacts", type: :request do

  describe "GET /" do
    it "renders homepage without 404" do
      get "/"
      expect(response).to have_http_status(200)
    end
  end

end
