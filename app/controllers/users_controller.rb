class UsersController < ApplicationController

    def create 
        user = User.new(username: params[:username], password: params[:password]) 
        if user.save 
            render json: user 
        else
        end 
    end

    def me  
        authHeader = request.headers['Authorization']
        token = authHeader.split(" ")[1]
        decoded_token = JWT.decode(token, "flobble", true, {alogrithm: 'HS256'})
        user_id = decoded_token[0]["user_id"]
        user = User.find(user_id)
        render json: { user: user, meetings: user.meetings}
    end 

end