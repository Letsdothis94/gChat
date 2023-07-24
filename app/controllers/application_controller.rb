class ApplicationController < ActionController::API
    SECRET = "secretkey";

    def authentication
        decode_data = decode_account_data(request.headers["token"])
        account_data = decode_data[0]["account_id"] unless !decode_data
        account = Account.find(account_data&.id)

        if account 
            return true
        else
            render json: { message: "invalid credentials"}
        end
    end

    def encode_account_data(payload)
        token = JWT.encode payload, SECRET, "HS256"
        return token
    end

    def encode_account_data(payload)
        JWT.encode payload, SECRET, "HS256"
    end

    def decode_account_data(token)
        begin
            data = JWT.decode token, SECRET, true, { algorithm: "HS256" }
            return data
        rescue => e
            puts e
        end
    end

    def decode_account_data(token)
        begin
            JWT.decode token, SECRET, true, { algorithm: "HS256" }
        rescue => e
            puts e
        end
    end

end
