class ContactsController < ApplicationController

  def homepage
    @contacts = Contact.all
  end

  def upload
    #Opted to use built in rails storing in file system
    #CarrierWave or Paperclip probably preferred in future
    Contact.save(params[:upload])
    redirect_to root_url, notice: "Contacts Imported"
  end


end
