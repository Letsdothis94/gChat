class AccountsController < ApplicationController

    def index
        render json: Account.all
    end

    def create
        account = Account.create(email: params[:email], password: params[:password])
        if account.valid?
            render json: account
        else
            render json: account.errors.full_messages, status: 400
        end
    end

end
