class MessagesController < ApplicationController

    def index
        messages = Message.all
        render json: messages
    end

    def create 
        message = Message.create(content: params[:content], user_id: params[:user_id]);
        if message.valid?
            render json: message
        else
            render json: message.errors.full_messages, status: 422;
        end
    end

    def destroy
        message = Message.find_by(id: params[:id])
        if message.valid?
            render json: message
            message.destroy
        else
            render json: message.errors.full_messages, status: 404;
        end
    end

end
