class ContactsController < ApplicationController

  def homepage

  end

  def upload
    #Opted to use built in rails storing in file system
    #CarrierWave or Paperclip probably preferred in future
    post = Contact.save(params[:upload])
    render :text => "File has been uploaded successfully"
  end


end
