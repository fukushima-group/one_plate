module Api
    module V1
        class DishesController < ApplicationController
            def index
                @dishes = Dish.all.order(created_at: :desc)
                if @dishes.exists?
                    render json: { data: @dishes }, status: 200
                else
                    render json: { status: '404' }, status: 404
                end
            end
        end
    end
end
