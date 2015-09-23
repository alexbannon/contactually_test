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

  def create
    @contact = Contact.new(contact_params)

    respond_to do |format|
      if @contact.save
        format.json { render json: @contact }
      else
        format.json { render json: @contact.errors, status: :unprocessable_entity }
      end
    end
  end

  def update
    respond_to do |format|
      if @contact.update(contact_params)
        format.json { render json: @contact }
      else
        format.json { render json: @contact.errors, status: :unprocessable_entity }
      end
    end
  end


  def destroy
    @contact.destroy
    respond_to do |format|
      format.json { head :no_content }
    end
  end




  private
    def contact_params
      params.require(:contact).permit(:first_name, :last_name, :email_address, :phone_number, :company_name)
    end

end
