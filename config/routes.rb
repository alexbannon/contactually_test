Rails.application.routes.draw do
  root to: "contacts#homepage"
  resources :contacts
end
