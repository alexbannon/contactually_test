Rails.application.routes.draw do
  root to: "contacts#homepage"
  get "/import" => "contacts#homepage"
  get "/contacts" => "contacts#homepage"
  resources :contacts do
    collection {post :upload}
  end
end
