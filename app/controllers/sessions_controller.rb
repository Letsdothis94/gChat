class SessionsController < ApplicationController

    def signup
        account = Account.new(email: params[:email], password: params[:password])
        if account.save
            token = encode_account_data({ id: account.id, email: account.email })
            render json: { token: token }
        else
            render json: { message: 'Invalid credentials' }
        end
    end
    
    def login
        account = Account.find_by(email: params[:email])
        if account && account.password === params[:password]
            token = encode_account_data({ id: account.id, email: account.email })
            render json: { token: token }
        else
            render json: { message: 'Invalid credentials'}
        end
    end

end
