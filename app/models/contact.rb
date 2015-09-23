class Contact < ActiveRecord::Base

  def self.save(upload)
    name =  upload['datafile'].original_filename
    directory = "public/data"
    # create the file path
    path = File.join(directory, name)
    # write the file
    temp = File.open(path, "wb") { |f| f.write(upload['datafile'].read) }
    puts "path is #{path}"

    CSV.foreach(path, {headers:true, :header_converters => :symbol, :col_sep => "\t"}) do |row|
      puts row
      Contact.create! row.to_hash
    end
  end

end
