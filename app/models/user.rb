class User < ApplicationRecord
    has_many :meetings
    has_secure_password
end
