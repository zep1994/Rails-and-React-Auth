Rails.application.routes.draw do
  post '/users', to: 'users#create'
  post '/login', to: 'auth#create'
  get 'users/me', to: 'users#me'
  
end
