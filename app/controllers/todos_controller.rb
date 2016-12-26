class TodosController < ApplicationController
  def index
    data = Todo.all
    render json: data
  end

  def create
    todo = Todo.new
    params[:todo].sort.map { |k, v| todo[k] = v }
    todo.save
  end

  def update
    todo = Todo.find_by(id: params[:id])
    params[:todo].sort.map { |k, v| todo[k] = v }
    todo.save
  end

  def show
    todo = Todo.find_by(id: params[:id])
    render json: todo
  end
end
