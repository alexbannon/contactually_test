Rails.application.routes.draw do
  root to: "contacts#homepage"
  resources :contacts do
    collection {post :upload}
  end
end
