Rails.application.routes.draw do
  get 'tools/index'
  root to: "tools#index"
end
