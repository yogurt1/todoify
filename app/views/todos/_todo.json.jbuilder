json.extract! todo, :id, :name, :content, :status, :created_at, :updated_at
json.url todo_url(todo, format: :json)