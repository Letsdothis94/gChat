Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # sessions Routes
  post "/login", to: "sessions#login"
  post "/signup", to: "sessions#signup"

  resources :todos
  
  # account Routes
  get '/accounts', to: 'accounts#index' 
  post '/accounts/create', to: 'accounts#create'
  # user Routes
  get '/users', to: 'users#index'
  get '/users/:id', to: 'users#show'
  post '/users/create', to: 'users#create'
  delete '/users/:id', to: 'users#destroy'
  
  # messages Routes
  get '/messages', to: 'messages#index'
  post '/messages/create', to: 'messages#create'
  delete '/messages/:id', to: 'messages#destroy'

  # Defines the root path route ("/")
  # root "articles#index"
end
